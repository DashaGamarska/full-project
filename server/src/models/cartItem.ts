import mongoose, { Schema, Document } from "mongoose";

export interface CartItemInterface extends Document {
  id: string;
  quantity: number;
  price: number;
}

const CartItemSchema: Schema = new Schema({
  id: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const CartItem = mongoose.model<CartItemInterface>("CartItem", CartItemSchema);

export default CartItem;
