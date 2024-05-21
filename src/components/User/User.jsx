import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, username, email} = user;

    const userStyles = {
        border: '2px solid #45d3c4',
        borderRadius: '20px',
        padding: '10px',
    }

    return (
        <div style={userStyles}>
            <h2>{name}</h2>
            <h4>User Name: {username}</h4>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;