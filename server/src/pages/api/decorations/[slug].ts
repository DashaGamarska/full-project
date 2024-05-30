import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "mongoose";
import { create as createDecoration } from "../../../controllers/decorationController";

import Decoration from "@/models/decoration";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    await connect(process.env.MONGODB_URI, {});

    if (req.method === "POST") {
      await createDecoration(req, res);
    } else if (req.method === "GET") {
      const { slug } = req.query;

      if (slug) {
        // Якщо переданий слаг, отримати декорацію за цим слагом
        const decoration = await Decoration.find({ slug });
        if (!decoration) {
          return res.status(404).json({ message: "Decoration not found" });
        }
        return res.json(decoration);
      } else {
        // Якщо слаг не переданий, отримати всі декорації
        const decorations = await Decoration.find();
        return res.json(decorations);
      }
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default handler;
