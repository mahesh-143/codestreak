import styled from "styled-components";

export const Button = styled.button`
    padding : 0.5em 1em;
    background : ${props => props.theme.color.btn};
    color : #fff;
    border : 1px solid #000;
    border-radius : 0.3125em;
    cursor : pointer;

    &:hover{
        color :#000;
        transform: scale(1.05);
      }
`;
