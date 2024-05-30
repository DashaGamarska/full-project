import CartItem from "@/models/cartItem";
import { NextApiRequest, NextApiResponse } from "next";

interface CartApiRequest {
  lang: string;
  ids: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Обробка GET запиту для отримання переліку товарів у кошику
    try {
      // Отримання всіх елементів кошика з бази даних
      const cartItems = await CartItem.find();

      // Відправлення успішної відповіді з переліком товарів у кошику
      return res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    // Обробка POST запиту для додавання елементу до кошика
    try {
      const { id, quantity, price } = req.body;

      // Перевірка чи всі необхідні дані надано
      if (!id || !quantity || !price) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Створення нового елементу кошика
      const newItem = await CartItem.create({ id, quantity, price });

      // Відправлення успішної відповіді з створеним елементом
      return res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    // Обробка інших HTTP методів
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
