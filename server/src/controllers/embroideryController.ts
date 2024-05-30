import { NextApiRequest, NextApiResponse } from "next";
import Embroidery from "../models/embroidery";

export async function getByUrl(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  try {
    const embroidery = await Embroidery.findOne({ url });
    if (!embroidery) {
      return res.status(404).json({ message: "Embroidery not found" });
    }
    res.json(embroidery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getById(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const embroidery = await Embroidery.findById(id);
    res.json(embroidery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function create(req: NextApiRequest, res: NextApiResponse) {
  try {
    const embroidery = await Embroidery.create(req.body);
    res.status(201).json(embroidery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function update(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const embroidery = await Embroidery.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(embroidery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function remove(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    await Embroidery.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
