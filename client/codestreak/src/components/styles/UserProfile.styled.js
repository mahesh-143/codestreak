import styled from "styled-components";

export const Profile = styled.div`

display : grid;
justify-items : center;
text-align : center;
gap : 1rem;
margin : 2rem auto;

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

}
`;

export const AvatarContainer = styled.div`
div{
  clip-path : circle();
}

  @media (min-width: 510px){
    grid-row : span 3;
    margin-right : 1rem;
    justify-self : center;
    align-self : center;

    div{
    grid-row : span 3;
    }
  }
}
`

