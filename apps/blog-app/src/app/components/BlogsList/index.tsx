import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Blog } from "../../common/types";
import BlogListItem from "./BlogsListItem";


interface PropsType {
  blogs: Blog[];
}


export function BlogsList(props: PropsType) {

  const navigate = useNavigate();
  const { blogs } = props;
    return (
      <div>
        {blogs.map((blog) => <BlogListItem blog={blog} key={blog.id} />)}
      </div>
    );
  }
  
  export default BlogsList;
  