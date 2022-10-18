import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Blog } from "../../../common/types";

const Wrapper = styled.div`
    min-height: 12rem;
    border: solid 1px #E0E0E0;
    border-radius: 3px;
    margin: 1rem 0.2rem;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;


const ItemImage = styled.div`
    flex: .25;
    overflow: hidden;
    > img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 768px) {
        flex: 1;
    }
`

const ItemInfo = styled.div`
    flex: .75;
    padding: 1rem;
    @media (max-width: 768px) {
        flex: 1;
    }
`

const Title = styled.h2`
    color:  #272727;
`;

const SubTitle = styled.span`
    color: var(--label-color);
    font-size: 15px;
    padding: .5rem 0;
`;


interface PropsType {
    blog: Blog
}


const BlogListItem = (props: PropsType) => {
    const { blog } = props;
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => navigate(`/blogs/${blog.id}`)}>
            <ItemImage>
                <img src="assets/images/blog.webp" alt="blog"></img>
            </ItemImage>
            <ItemInfo>
                <Title>{blog?.title} </Title>
                <SubTitle>{blog?.author?.name}</SubTitle>
                <p>{blog?.desc}</p>
            </ItemInfo>
        </Wrapper>
    )
}

export default BlogListItem;