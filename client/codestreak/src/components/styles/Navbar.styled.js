import styled from "styled-components";

export const Header = styled.header`
@media (min-width: 700px) {
    width : 100vw;
    height : 5em;
    background : ${props => props.theme.color.nav};
  }
`;

export const NavParent = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
`;

export const Nav = styled.nav`
    position : fixed;
    bottom : 0;
    width : 14em;
    height : 3.25em;
    margin-bottom : 1em;
    background : ${props => props.theme.color.nav};
    border-radius : 0.625em;
    display : flex;
    justify-content : center;

    ul{
       display : flex;
       align-items : center;
       justify-content : center;
       list-style : none;
       gap : 4.5em;

       span {
           display : none;
       }

       a{
           text-decoration : none;
           color : ${props => props.theme.color.primary};

           &:hover{
               opacity : 50%;
           }
       }  

       svg{
         width : 2em;
         height : auto;
       }
    }

    @media (min-width: 700px) {
        position : static;
        width : 100%;
        height : 5em;
        border-radius : 0;
        justify-content : start;

        ul{
            gap : 4.5em;
     
            span {
                display : block;
                font-size : 1.125em;
            }
     
            svg{
              display : none;
            }
         }
      }
`;



  


