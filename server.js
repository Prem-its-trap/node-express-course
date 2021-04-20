const express = require("express");
const app = express();

const mockUserData = [{ name: "john" }, { name: "Sonny" }];
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.listen(8000, () => console.log("Server is running"));
