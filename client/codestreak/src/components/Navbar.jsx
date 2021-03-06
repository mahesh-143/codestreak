import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavParent } from "./styles/Navbar.styled";

export const Navbar = () => {
  return (
    <>
        <NavParent>
           <h1>code<span>S</span>treak</h1>
          <Nav>
           
            <ul>
              <li>
                <Link to="/myprofile">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.07296 7.81246C8.07296 5.36745 10.055 3.38538 12.5 3.38538C14.9451 3.38538 16.9271 5.36745 16.9271 7.81246C16.9271 10.2575 14.9451 12.2395 12.5 12.2395C10.055 12.2395 8.07296 10.2575 8.07296 7.81246ZM12.5 4.94788C10.918 4.94788 9.63546 6.23039 9.63546 7.81246C9.63546 9.39452 10.918 10.677 12.5 10.677C14.0821 10.677 15.3646 9.39452 15.3646 7.81246C15.3646 6.23039 14.0821 4.94788 12.5 4.94788Z"
                    
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33337 15.3645C7.03896 15.3645 5.98962 16.4139 5.98962 17.7083V18.9461C5.98962 18.9649 6.00328 18.981 6.02188 18.984C10.3123 19.6845 14.6878 19.6845 18.9782 18.984C18.9968 18.981 19.0105 18.9649 19.0105 18.9461V17.7083C19.0105 16.4139 17.9611 15.3645 16.6667 15.3645H16.3116C16.2842 15.3645 16.2569 15.3689 16.2308 15.3774L15.3292 15.6718C13.4909 16.2721 11.5092 16.2721 9.67086 15.6718L8.76928 15.3774C8.74318 15.3689 8.7159 15.3645 8.68845 15.3645H8.33337ZM4.42712 17.7083C4.42712 15.5509 6.17601 13.802 8.33337 13.802H8.68845C8.88062 13.802 9.0716 13.8324 9.25428 13.8921L10.1559 14.1865C11.6791 14.6839 13.321 14.6839 14.8442 14.1865L15.7458 13.8921C15.9285 13.8324 16.1195 13.802 16.3116 13.802H16.6667C18.8241 13.802 20.573 15.5509 20.573 17.7083V18.9461C20.573 19.7307 20.0043 20.3997 19.23 20.5261C14.7729 21.2538 10.2272 21.2538 5.77012 20.5261C4.99575 20.3997 4.42712 19.7307 4.42712 18.9461V17.7083Z"
                     
                    />
                  </svg>
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/explore">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.16385 5.40874C4.7351 6.79842 4.7351 8.30575 5.16385 9.69542C10.0434 10.1657 14.9568 10.1657 19.8363 9.69542C20.265 8.30575 20.265 6.79842 19.8363 5.40874C14.9568 4.93846 10.0434 4.93846 5.16385 5.40874ZM4.90501 3.86402C9.95633 3.37003 15.0438 3.37003 20.0951 3.86402C20.6519 3.91848 21.1199 4.30003 21.291 4.82688C21.8635 6.59051 21.8635 8.51365 21.291 10.2773C21.1199 10.8041 20.6519 11.1857 20.0951 11.2401C15.0438 11.7341 9.95633 11.7341 4.90501 11.2401C4.34818 11.1857 3.8802 10.8041 3.70917 10.2773C3.13666 8.51365 3.13666 6.59051 3.70917 4.82688C3.8802 4.30003 4.34818 3.91848 4.90501 3.86402Z"
                     
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.16385 15.3046C4.7351 16.6943 4.7351 18.2016 5.16385 19.5913C10.0434 20.0615 14.9568 20.0615 19.8363 19.5913C20.265 18.2016 20.265 16.6943 19.8363 15.3046C14.9568 14.8343 10.0434 14.8343 5.16385 15.3046ZM4.90501 13.7599C9.95633 13.2659 15.0438 13.2659 20.0951 13.7599C20.6519 13.8143 21.1199 14.1959 21.291 14.7227C21.8635 16.4863 21.8635 18.4095 21.291 20.1731C21.1199 20.7 20.6519 21.0815 20.0951 21.136C15.0438 21.63 9.95633 21.63 4.90501 21.136C4.34818 21.0815 3.8802 20.7 3.70917 20.1731C3.13666 18.4095 3.13666 16.4863 3.70917 14.7227C3.8802 14.1959 4.34818 13.8143 4.90501 13.7599Z"
                    
                    />
                  </svg>
                  <span>Explore</span>
                </Link>
              </li>
            </ul>
          </Nav>
        </NavParent>
        </>
  );
};
