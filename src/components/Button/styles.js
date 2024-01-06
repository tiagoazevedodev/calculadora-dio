import styled from "styled-components";

export const ButtonContainerNumero = styled.button`
    padding: 20px;
    width: 120px;
    height: 120px;
    margin: 5px;
    font-size: 40px;
    border-radius: 50%;
    border: 1px solid #FF9600;
    outline: none;
    background-color: #FF9600;
    color: #ffffff;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

export const ButtonContainerOperador = styled.button`
    padding: 20px;
    margin: 5px;
    width: 120px;
    height: 120px;
    font-size: 30px;
    border-radius: 50%;
    border: 1px solid #333333;
    outline: none;
    background-color: #333333;
    color: #ffffff;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`

export const ButtonContainerZero = styled.button`
    padding: 20px;
    margin: 5px;
    width: 300px;
    height: 120px;
    font-size: 30px;
    border-radius: 25%;
    border: 30px solid #333333;
    outline: none;
    background-color: #333333;
    color: #ffffff;
    text-align: left;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`

export const ButtonContainerCinza = styled.button`
    padding: 20px;
    margin: 5px;
    width: 120px;
    height: 120px;
    font-size: 24px;
    border-radius: 50%;
    border: 1px solid #a8a8a8;
    outline: none;
    background-color: #a8a8a8;
    color: #ffffff;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`