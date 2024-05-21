import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const {id, title, body} = post;
    return (
        <div>
            <h3>Hello from Post Details ID: {id}</h3>
            <b>{title}</b>
            <small>{body}</small>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;