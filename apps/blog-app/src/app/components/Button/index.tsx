import styled, { ThemeProvider } from "styled-components";


const BaseButton = styled.button`
    font-size: 1em;
    padding: 0.6em 1em;
    border-radius: 5px;
    min-width: 120px;
    /* border: solid 2px var(--primary-color); */
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    :hover {
        opacity: .9;
    }
`;

const PrimaryButton = styled(BaseButton)`
    background: var(--primary-color);
    color: white;
`;

const SuccessButton = styled(BaseButton)`
    background: var(--success-color);
    color: white;
`;

const DangerButton = styled(BaseButton)`
    background: var(--danger-color);
    color: white;
`;

const SecondaryButton = styled(BaseButton)`
    background: var(--secondary-color);
    color: white;
`

BaseButton.defaultProps = {
    theme: {
      main: "palevioletred"
    }
}

interface PropsType {
    label: string;
    onClick?: any;
    appearance?: 'solid' | 'outlined';
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}


const Button = (props: PropsType) => {
    const { label, color } = props;

    const theme = {
        main: "mediumseagreen"
    };
    return(
        <ThemeProvider theme={theme}>
            {color === 'success'? (<SuccessButton { ...props}>  {label} </SuccessButton>) : 
                color === 'danger'?  (<DangerButton { ...props}>  {label} </DangerButton>):
                color === 'secondary'? (<SecondaryButton { ...props}>  {label} </SecondaryButton>):
                (<PrimaryButton { ...props}>  {label} </PrimaryButton>)
            } 
        </ThemeProvider>
    )
}

export default Button;