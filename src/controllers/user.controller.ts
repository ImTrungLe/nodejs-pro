import { Request, Response } from "express";
import {
    getAllUsers,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser,
    getUserById,
} from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("home", { users });
};

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
};

const getViewUserPage = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    const userData = Array.isArray(user) && user.length > 0 ? user[0] : {};
    return res.render("view-user", { user: userData });
};

const postCreateUserPage = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;

    // handle create user
    await handleCreateUser(fullName, email, address);

    return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;

    // handle delete user
    await handleDeleteUser(userId);

    return res.redirect("/");
};

const postUpdateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { fullName, email, address } = req.body;

    // handle update user
    await handleUpdateUser(userId, fullName, email, address);

    return res.redirect("/");
};

export {
    getHomePage,
    getCreateUserPage,
    postCreateUserPage,
    postDeleteUser,
    getViewUserPage,
    postUpdateUser,
};
