import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 3vh;
    margin-bottom: 2vh;
    color: #333;
    text-transform: uppercase;

    @media(max-width: 800px) {

        font-size: 1.2em;
    }

`
export const Description = styled.a`
    padding: 0.5vh;
    text-decoration: none;
    color: #007bb6;
    font-size: 1.2em;

    &:hover {
        color: rgb(51, 158, 83);
        transition: 0.2s;
    }
    @media(max-width: 800px) {

        font-size: 1em;
    }


`