import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;

    overflow-x: auto;
`

export const Table = styled.table`
    background: #fafafa;
    border-radius: 10px;
    color: #333;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;

    input {
        width: 5em;
    }

    @media(max-width: 800px) {

        input {
            width: 3em;
        }
  
    }
`

export const Graphic = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
`