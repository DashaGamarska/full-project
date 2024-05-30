import { Schema, model, Document } from "mongoose";
import Joi from "joi";

interface IDecoration extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  slug: string;
}

const decorationSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for decoration"],
    },
    description: {
      type: String,
      required: [true, "Set description for decoration"],
    },
    price: {
      type: Number,
      required: [true, "Set price for decoration"],
    },
    images: {
      type: [String],
      required: [true, "Set image for decoration"],
    },
    slug: {
      type: String,
      required: [true, "Set slug for decoration"],
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
  images: Joi.array().required(),
  slug: Joi.string().required(),
});

export const schemas = {
  addSchema,
};

const Decoration = model<IDecoration>("Decoration", decorationSchema);

export default Decoration;
