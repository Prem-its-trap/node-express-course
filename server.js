const express = require("express");
const app = express();

const mockUserData = [{ name: "john" }, { name: "Sonny" }];
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});
// adding dynamic route using variable in url
app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "Got one user",
    user: req.params.id,
  });
});

app.listen(8000, () => console.log("Server is running"));
