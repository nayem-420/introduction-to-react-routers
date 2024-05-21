import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id, title, body} = post;

    const postStyles = {
        border: '2px solid #45d3c4',
        borderRadius: '20px',
        padding: '10px',
    }

    return (
        <div style={postStyles}>
            <h1>Post ID: {id}</h1>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <Link to={`/posts/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default Post;