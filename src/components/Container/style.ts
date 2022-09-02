import styled from "styled-components";

export const Container = styled.div`
    
    margin-top: 5vh;
    text-align: justify;
    padding: auto;
    -webkit-margin-start: 10vh;
    -webkit-margin-end: 10vh;
    background-color: rgba(255, 255, 255, 0.1);
    position: relative;
    min-height: 50vh;
    border-radius: 15px;
    margin-bottom: 40px;

    @media(max-width: 800px) {
        -webkit-margin-start: 2.5vh;
        -webkit-margin-end: 2.5vh;
  }

`

export const Content = styled.div`

    * {
        margin-inline-start: 15px;
        margin-inline-end: 15px;
        padding: 15px;
        position: relative;
    }

    p {
        font-size: 1.2em;
        display: block;
    }

    h2 {
        padding: 15px;
        font-size: 1.8em;
        text-align: start;
    }

    a {
        text-decoration: none;
        color: #007bb6;
    }

    a:hover {
        color: rgb(51, 158, 83);
        transition: 0.3s;
    }

    @media(max-width: 800px) {
        p {
            font-size: 1em;
        }

        h2 {
            font-size: 1.4em;
        }
    }

`

export const Title = styled.h2`
    margin-top: 5vh;
    text-transform: uppercase;

    @media(max-width: 800px) {
        font-size: 1.4em;
    }
`

export const Quest = styled.p`
    color: #007bb6;
`

export const Answer = styled.p`
    color: rgb(15, 196, 15);
`