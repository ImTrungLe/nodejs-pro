import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 3000;

// config view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files
app.use(express.static("public"));

// config routes
webRoutes(app);

// show in terminal
app.listen(PORT, () => {
    console.log("🚀 ~ APP - ROOT is running on PORT:", PORT);
});
