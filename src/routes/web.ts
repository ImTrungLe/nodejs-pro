import express, { Express } from "express";
import {
    getCreateUserPage,
    getHomePage,
    postCreateUserPage,
    postDeleteUser,
    getViewUserPage,
    postUpdateUser,
} from "controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUserPage);

    router.get("/view-user/:id", getViewUserPage);

    router.post("/handle-create-user", postCreateUserPage);

    router.post("/handle-delete-user/:id", postDeleteUser);

    router.post("/handle-update-user/:id", postUpdateUser);

    // base path, để biết ứng dụng chạy từ đường dẫn nào
    app.use("/", router);
};

export default webRoutes;
