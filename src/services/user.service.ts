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

export { handleCreateUser, getAllUsers };
