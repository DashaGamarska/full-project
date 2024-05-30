import { NextApiRequest, NextApiResponse } from "next";
import CartItem from "../models/cartItem";

export async function addToCartController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, quantity, price } = req.body;

    // Перевірка наявності елементу кошика за допомогою id
    const existingCartItem = await CartItem.findOne({ id });

    if (existingCartItem) {
      // Якщо елемент вже існує в кошику, оновлюємо його кількість
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      res
        .status(200)
        .json({ message: "Cart item quantity updated successfully" });
    } else {
      // Якщо елемент ще не існує в кошику, створюємо новий запис
      await CartItem.create({ id, quantity, price });
      res.status(201).json({ message: "New item added to cart successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
