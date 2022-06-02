import styled from "styled-components";

export const Profile = styled.div`

display : grid;
justify-items : center;
text-align : center;
gap : 1rem;
margin : 2rem auto;

img{
    max-width :6em;
    clip-path : circle();
}

h1{
    color : #000;
    font-size : clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 500;
}

p{
    font-size : clamp(1rem, 2.5vw, 1.125rem);
}

div{
      display : flex;
      gap : 1rem;
}


@media (min-width: 510px){
    
    grid-template-columns: 30% 70%;
    justify-items : left;
    text-align : left;
    margin-inline: auto;
    max-width: 45em;
  
  img{
    max-width : 8em;
    margin-right : 1rem;
    grid-row : span 3;
    justify-self : center;
    align-self : center;
  }
}
`;