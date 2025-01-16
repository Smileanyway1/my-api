const express = require("express");
const app = express();
const port = 3000;

// Middleware để xử lý JSON
app.use(express.json());

// API endpoint cơ bản
app.get("/", (req, res) => {
  res.send("Chào mừng bạn đến với API của tôi!");
});

// API trả về dữ liệu JSON
app.get("/api/data", (req, res) => {
  res.json({
    message: "Dữ liệu của bạn",
    data: [1, 2, 3, 4, 5],
  });
});

// API POST nhận dữ liệu từ client
app.post("/api/submit", (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Xin chào, ${name}!`,
  });
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`API của bạn đang chạy tại http://localhost:${port}`);
});
