import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    text-align: center;
    justify-content: space-space-between;
`

export const Table = styled.table`
    background: #fafafa;
    border-radius: 10px;
    color: #333;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 3vh;
    margin-bottom: 5vh;
    input {
        width: 5em;
    }

    @media(max-width: 800px) {

        font-size: 0.8em;
        input {
            width: 3em;
        }
  
    }
`
export const ContainerGraphic = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* align-items: center; */
    /* justify-content: space-between; */
    /* margin-right: 10vh; */

    /* @media(max-width: 1440px) {
        display: inline;

    } */
`
export const Graphic = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    /* -webkit-margin-start: none;
    -webkit-margin-end: none; */
`

export const Analysis = styled.div`

`

export const Title = styled.p` 
    font-size: 2vh;
    margin-top: 3vh;
`