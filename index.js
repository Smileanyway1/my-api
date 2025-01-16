const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware để xử lý JSON
app.use(express.json());

// Dữ liệu người dùng mẫu (giả lập)
const users = [
  {
    username: "admin",
    password: "123456", // Trong thực tế, không nên lưu mật khẩu dưới dạng plain text
  },
  {
    username: "user",
    password: "password",
  },
];

// API Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xem username và password có khớp với dữ liệu không
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Nếu thông tin hợp lệ, trả về thông báo thành công
    res.json({
      success: true,
      message: "Đăng nhập thành công!",
      user: {
        username: user.username,
      },
    });
  } else {
    // Nếu thông tin không hợp lệ, trả về lỗi
    res.status(401).json({
      success: false,
      message: "Tên đăng nhập hoặc mật khẩu không đúng!",
    });
  }
});

// API kiểm tra
app.get("/", (req, res) => {
  res.send("API Login đang hoạt động!");
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`API đang chạy tại http://localhost:${port}`);
});
