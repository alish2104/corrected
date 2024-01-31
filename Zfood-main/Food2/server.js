const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(__dirname + "/public/food.html");
});

app.post("/book-table", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.body);
  res.send("Form submission successful!");
});
