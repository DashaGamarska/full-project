import { NextApiRequest, NextApiResponse } from "next";
import Decoration from "../models/decoration";
import { log } from "console";

export async function getBySlug(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  try {
    const decorations = await Decoration.find({ slug });

    if (decorations.length === 0) {
      return res.status(404).json({ message: "Decorations not found" });
    }
    res.json(decorations);
    console.log("decorations", decorations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getById(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const decoration = await Decoration.findById(id);
    res.json(decoration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function create(req: NextApiRequest, res: NextApiResponse) {
  try {
    const decoration = await Decoration.create(req.body);
    res.status(201).json(decoration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
