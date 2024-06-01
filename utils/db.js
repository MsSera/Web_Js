// utils/db.js
import mysql from 'mysql2/promise';

export async function query(sql, values) {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sera',
    database: 'web_drill',
  });
  const [results] = await db.execute(sql, values);
  db.end();
  return results;
}
 