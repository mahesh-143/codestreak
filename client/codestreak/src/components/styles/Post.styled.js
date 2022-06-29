import styled from  "styled-components";

export const PostStyle = styled.div`
background : ${props => props.theme.color.card};
// max-width : 35em;
padding : 1em;
margin : 1rem auto;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius : 0.625em;
display : grid;
gap : 1rem;
font-size : clamp(1rem, 2.5vw, 1.2rem);
line-height : 1.6rem;

span{
  opacity : 0.5;
  font-size : 1rem;
}
`;
