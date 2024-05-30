
import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "mongoose";
import Embroidery from "../../models/embroidery";
import { create as createEmbroidery } from "../../controllers/embroideryController";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    await connect(process.env.MONGODB_URI, {});

    if (req.method === "POST") {
      await createEmbroidery(req, res);
    } else if (req.method === "GET") {
      const embroidery = await Embroidery.find();
      res.json(embroidery);
    } else {
      res.status(405).end(); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
