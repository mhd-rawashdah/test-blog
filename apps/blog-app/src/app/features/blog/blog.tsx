import { useParams } from "react-router-dom";


interface Param {
    id?: string;
}

const BlogPage = () => {
    const params: Param = useParams();

    return(
        <div>
            <h1>Blog Details</h1>
        </div>
    )
}

export default BlogPage;