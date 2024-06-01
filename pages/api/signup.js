import { query } from '../../utils/db';

// Handle signup without image upload
export default async function handler(req, res) {
  const { firstname, lastname, email, password, bio } = req.body;

  try {
    const result = await query(
      `INSERT INTO users (user_firstname, user_lastname, user_email, user_password, user_bio) VALUES (?, ?, ?, ?, ?)`,
      [firstname, lastname, email, password, bio]
    );

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup error', error);
    res.status(500).json({ error: 'Signup failed' });
  }
}
