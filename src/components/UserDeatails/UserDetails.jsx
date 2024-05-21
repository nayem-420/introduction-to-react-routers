import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {username, email} = user;
    return (
        <div>
            <h3>Show the User Details of: {username}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;