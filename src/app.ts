import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello World! I'm Trungql");
});

app.get("/trungql", (req, res) => {
    res.send("Hello Trunql");
});

app.listen(PORT, () => {
    console.log("🚀 ~ APP - ROOT is running on PORT:", PORT);
});
