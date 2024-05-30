import { Schema, model, Document } from "mongoose";
import Joi from "joi";

interface IEmbroidery extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  slug: string;
}

const embroiderySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for embroidery"],
    },
    description: {
      type: String,
      required: [true, "Set description for embroidery"],
    },
    price: {
      type: Number,
      required: [true, "Set price for embroidery"],
    },
    images: [
      {
        type: String,
        required: [true, "Set image for embroidery"],
      },
    ],
    slug: {
      type: String,
      required: [true, "Set slug for embroidery"],
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .regex(/^[a-zA-Z0-9 ]+$/)
    .required(),
  description: Joi.string().required(),
  price: Joi.number().min(0).required(),
  images: Joi.array().items(Joi.string()).required(),
  slug: Joi.string().required(),
});

export const schemas = {
  addSchema,
};

const Embroidery = model<IEmbroidery>("Embroidery", embroiderySchema);

export default Embroidery;
