import styled from "styled-components";

export const Container = styled.div` 
    /* justify-content: center; */
    align-items: center;
    display: flex;
    flex-direction: column;
    /* text-align: center; */
    margin-inline-end: 15vh;

    @media(max-width: 1440px) {
        display: inline;

    }
`

export const ContainerAnalysis = styled.div` 
    margin-inline-start: 15vh;

    @media(max-width: 800px) {
        margin-inline-start: 5vh;
    }
`

export const ContainerGraphic = styled.div` 

`