import { Request, Response } from "express";

const getHomePage = (req: Request, res: Response) => {
    return res.render("home");
};

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
};

const postCreateUserPage = (req: Request, res: Response) => {
    console.log("🚀 ~ postCreateUserPage ~ req:", req.body);
    const { fullName, email, address } = req.body;
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Address:", address);
    return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUserPage };
