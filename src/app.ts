import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World! I'm Trungql");
});

app.get("/trungql", (req, res) => {
    res.send("Hello Trunql");
});

app.listen(PORT, () => {
    console.log("🚀 ~ APP - ROOT is running on PORT:", PORT);
});
