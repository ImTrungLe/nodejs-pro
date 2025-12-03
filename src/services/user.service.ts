import getConnection from "config/database";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string
) => {
    const connection = await getConnection();

    try {
        // execute will internally call prepare and query
        const sql =
            "INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)";
        const values = [fullName, email, address];

        const [results, fields] = await connection.execute(sql, values);

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const handleDeleteUser = async (userId: string) => {
    const connection = await getConnection();

    try {
        // execute will internally call prepare and query
        const sql = "DELETE FROM `users` WHERE `id` = ?";
        const values = [userId];

        const [results, fields] = await connection.execute(sql, values);

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const handleUpdateUser = async (
    userId: string,
    fullName: string,
    email: string,
    address: string
) => {
    const connection = await getConnection();

    try {
        // execute will internally call prepare and query
        const sql =
            "UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?";
        const values = [fullName, email, address, userId];

        const [results, fields] = await connection.execute(sql, values);

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const getUserById = async (userId: string) => {
    const connection = await getConnection();

    try {
        const sql = "SELECT * FROM `users` WHERE `id` = ?";
        const values = [userId];

        const [results, fields] = await connection.execute(sql, values);

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const getAllUsers = async () => {
    const connection = await getConnection();

    try {
        const [results, fields] = await connection.query(
            "SELECT * FROM `users`"
        );

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export {
    handleCreateUser,
    getAllUsers,
    handleDeleteUser,
    handleUpdateUser,
    getUserById,
};
