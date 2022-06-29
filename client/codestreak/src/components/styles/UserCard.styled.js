import styled from "styled-components";

export const UserCardStyles = styled.div`
  background: ${(props) => props.theme.color.card};
  // max-width : 40em;
  padding : 1em;
  margin : 1rem;
  border-radius : 0.625em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display : grid;
  gap : 1em;
  grid-template-columns: repeat(3, 1fr);
  align-items : center;
  margin: 1rem auto;

    a{
      font-weight : 500;
      font-size : 1rem;
      text-decoration : none;
      font-family : inherit;
      color : ${props => props.theme.color.primary};
    }

    p{
      font-size : clamp(1rem, 2.5vw, 1.2rem);
      grid-column : 1/4;
    }
`;

export const UserInfo = styled.div`
  display : flex;
  align-items : center;
  gap : 1em;
  grid-column : span 2;
`;