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
align-items: center;
justify-content: center;
justify-items: center;
text-align: center;
display: flex;

    @media(max-width: 800px) {
        margin-inline-start: 5vh;
    }
`

export const ContainerGraphic = styled.div` 
    max-width: 1000px;
    margin: 0;
    padding: 0;
`

export const Graphic = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    /* -webkit-margin-start: none;
    -webkit-margin-end: none; */
`