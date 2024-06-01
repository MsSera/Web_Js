// pages/api/signup.js
import { query } from '../../utils/db';

export default async function handler(req, res) {
  const { firstname, lastname, email, password , bio, image} = req.body;
  const result = await query(
    `INSERT INTO users (user_firstname, user_lastname, user_email, user_password, user_photo, user_bio) VALUES (?, ?, ?, ?, ?, ?)`,
    [firstname, lastname, email, password, bio, image]
  );
  res.status(201).json(result);
}
