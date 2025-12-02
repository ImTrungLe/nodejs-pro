import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

//config view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/trungql", (req, res) => {
    res.send("Hello Trunql");
});

// show in terminal
app.listen(PORT, () => {
    console.log("🚀 ~ APP - ROOT is running on PORT:", PORT);
});
