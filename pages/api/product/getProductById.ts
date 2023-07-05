import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/db";
import { apiConfig } from "../api.config";

export const config = apiConfig;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = req.body;
    const [rows] = await db.query(
      "SELECT * FROM products where product_id =" + id
    );
    res.status(200).json(rows);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
