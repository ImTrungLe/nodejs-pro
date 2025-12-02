import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home");
    });

    router.get("/trungql", (req, res) => {
        res.send("Hello Trunql");
    });

    // base path, để biết ứng dụng chạy từ đường dẫn nào
    app.use("/", router);
};

export default webRoutes;
