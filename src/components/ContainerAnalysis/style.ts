import styled from "styled-components";

export const Container = styled.div `
    color: #333;
    /* padding: 10px; */
    background: #fafafa;
    overflow-y: auto;
    max-width: 50vh;
    max-height: 50vh;
    border-radius: 10px;
    margin-top: 2vh;
    margin-bottom: 2vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-inline-start: 10px;
    margin-inline-end: 10px;

    button {
        position: relative;
        margin-bottom: 2vh;
    }

    p {
        padding: 0;
        font-size: 1em;
    }
`

export const Title = styled.h2 `
    color: #333;
`