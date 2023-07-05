import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const [rows] = await db.query("SELECT * FROM product_category");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
