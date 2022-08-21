import dotenv from "dotenv";
import express from "express";
import path from "path";
const app = express();


// initialize config..
dotenv.config();

const port = process.env.SERVER_PORT;
//  configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// default home page route
app.get("/", (req, res) => {
  // rendering the index template
  res.render("index");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`app listening on http://localhost:${port}`);
});
