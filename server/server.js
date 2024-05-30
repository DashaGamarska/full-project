const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      // Дозволяємо запити зі всіх джерел
      res.setHeader("Access-Control-Allow-Origin", "*");

      if (req.method === "OPTIONS") {
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        res.setHeader("Access-Control-Max-Age", "86400");
        res.statusCode = 200;
        res.end();
        return;
      }

      if (pathname === "/uk/embroidery") {
        // Обробка запиту для /uk/embroidery
        // Використовуйте app.render для рендерингу сторінки
        // Приклад:
        app.render(req, res, "/embroidery", query);
      } else if (pathname === "/uk/bags") {
        // Обробка запиту для /uk/bags
        app.render(req, res, "/bags", query);
      } else if (pathname.startsWith("/uk/decorations")) {
        // Обробка запиту для /uk/decorations/*
        // Приклад:
        const splitPathname = pathname.split("/");
        const pageName = splitPathname[splitPathname.length - 1];
        app.render(req, res, `/decorations/${pageName}`, query);
      } else {
        // Якщо шлях не відповідає жодному з визначених, передати управління наступному обробнику
        handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(4000, () => {
    console.log("> Ready on http://localhost:4000");
  });
});
