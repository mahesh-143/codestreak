import styled from "styled-components";

export const NavParent = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;

    h1{
        font-size : 1.3rem;
        font-weight : 500;
        padding : 0.5rem 0;

        span{
            color : green;
        }
    }

    @media (min-width: 700px){
        h1{
            padding : 0;
        }
    }
`;

export const Nav = styled.nav`
    position : fixed;
    bottom : 0;
    width : 14em;
    height : 3.25em;
    margin-bottom : 1em;
    background : #000;
    border-radius : 0.625em;
    display : flex;
    justify-content : center;
    align-items : center;

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
           display : flex;
           align-items : center;
           gap : 0.5rem;
           color : ${props => props.theme.color.primary};

           &:hover{
               opacity : 50%;
           }
       }  

       svg{
         width : 2em;
         height : auto;
         path{
        fill : #fff;
         }
       }
    }

    @media (min-width: 700px) {
        position : static;
        width : 100%;
        margin : auto;
        height : 5em;
        border-radius : 0;
        background : #fff;

        ul{
            gap : 4.5em;
     
            span {
                display : block;
                font-size : 1.125em;
            }
     
            svg{
              path{
                fill : #000;
              }
            }
         }
      }
`;



  


