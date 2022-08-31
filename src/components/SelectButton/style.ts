import styled from "styled-components";

export const Button = styled.a `
    position: relative;
    padding: 10px;
    margin: 10px;
    background: #fff;
    color: black;
    border-radius: 18px;
    font-weight: 500;
    align-items: center;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    &:hover {
        transition: 0.3s;
        background: black;
        color: #fff;
    }

`