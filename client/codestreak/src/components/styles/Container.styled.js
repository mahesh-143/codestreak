import styled from "styled-components";

export const Container = styled.div`
    width: min(100% - 5rem, 90rem);
    margin-inline: auto;

    @media (max-width: 768px) {
      width: 90%;
    }
`; 