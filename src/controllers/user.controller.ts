import { Request, Response } from "express";
import { getAllUsers } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    console.log("🚀 ~ getHomePage ~ users:", users);
    return res.render("home", { users });
};

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
};

const postCreateUserPage = (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;
    return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUserPage };
