const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const mockUserData = [{ name: "john" }, { name: "Sonny" }];
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});
// adding dynamic route using variable in url colons are used for variabls that be viewd in the params
app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "Got one user",
    user: req.params.id,
  });
});

// post route
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //   this should come from database
  const mockUserName = "johndoe";
  const mockPassword = "superman";

  if (username === mockUserName && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match",
      token: "encrption token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username does not match",
    });
  }
});

app.listen(8000, () => console.log("Server is running"));
