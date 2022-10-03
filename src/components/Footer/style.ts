import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 3vh;
    margin-bottom: 5vh;
`

export const Title = styled.p` 
    margin-top: 3vh;
    margin-bottom: 2vh;
    color: #fff;
    text-transform: uppercase;

    @media(max-width: 800px) {

        font-size: 0.8em;
    }

    @media(max-width: 500px) {
        font-size: 0.65em;
    }
`

export const ContainerText = styled.div` 

`

export const TitleDescription = styled.p` 
    @media(max-width: 800px) {

        font-size: 0.8em;
    }

    @media(max-width: 500px) {
        font-size: 0.6em;
    }
`

export const UfopIcon = styled.img` 
    margin-left: 3vh;
    margin-bottom: -3vh;

    @media(max-width: 800px) {

    }

    @media(max-width: 500px) {
        width: 40px;
        height: 80px;
    }
`
