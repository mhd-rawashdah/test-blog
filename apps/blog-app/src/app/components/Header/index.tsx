import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components"
import Button from "../Button";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 65px;
    align-items: center;
    padding: .2rem 1.5rem;
    border-bottom: solid 1px #efefef;
    background: #fff;
`;

const FlexRow = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`;

const Title = styled.h2`
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--primary-color);
    cursor: pointer;
`;

interface PropsType {
    loggedIn?: boolean;
}

export function Header(props: PropsType) {

    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <Title onClick={()=> navigate('/')}>
                Moe's Blogs
            </Title>
          

            <FlexRow>
                <Button label="New" onClick={() => navigate('/blogs/new')} />
            </FlexRow> 
        </HeaderWrapper>
    )
}

export default Header