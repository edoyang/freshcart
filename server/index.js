const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// PostgreSQL Configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Fresh Cart",
  password: "123",
  port: 5432,
});

// Route: Get all products
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products;");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
