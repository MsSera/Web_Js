// utils/db.ts
import mysql from 'mysql2/promise'; // Import MySQL client library

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sera',
  database: 'web_drill',
};

export const connectToDatabase = async () => {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
};
