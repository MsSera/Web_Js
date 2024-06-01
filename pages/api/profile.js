// pages/api/profile.js
import { query } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const result = await query(`SELECT * FROM users WHERE user_id = ?`, [10]); // Assuming user with id 1 is logged in
    res.status(200).json(result[0]);
  } else if (req.method === 'PUT') {
    const { firstname, lastname, email, image, bio } = req.body;
    const result = await query(
      `UPDATE users SET user_firstname = ?, user_lastname = ?, user_email = ?, user_bio = ?, user_photo = ? WHERE user_id = ?`,
      [firstname, lastname, email, image, bio, 10]
    );
    res.status(200).json(result);
  }
}