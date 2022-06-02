import styled from "styled-components";

export const Button = styled.button`
    padding : 0.5em 1em;
    background : ${props => props.theme.color.btn};
    color : #fff;
    border : 1px solid #000;
    box-shadow : 4px 4px 0px #000;
    border-radius : 10px;
    cursor : pointer;

    &:hover{
        color :#000;
        transform: scale(1.05);
      }
`;
