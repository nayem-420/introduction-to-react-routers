import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();
    
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <p>We can use your time</p>

            <div className="Users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;