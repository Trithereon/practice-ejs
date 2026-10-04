const express = require("express");
const app = express();
const path = require("node:path");

const PORT = 8080;
const HOSTNAME = "localhost";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.listen(PORT, (error) => {
  console.log(`Serving on http://${HOSTNAME}:${PORT}`);
  if (error) throw error;
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
