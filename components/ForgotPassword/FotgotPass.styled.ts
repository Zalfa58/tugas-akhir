import styled from "styled-components";
import BackgroundCard from "@/assets/login/backgroundcard.jpg"


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    background-color: #FFEAE3;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    width: 1000px;
    height: 600px;
    background: url(${BackgroundCard.src});
    background-size: cover;
    border-radius: 20px;
    margin: auto;
    padding: 80px 120px 80px 120px;
    gap: 20px;
    h2{
        text-align: center;
    }
`

export const InputContainer = styled.div`
    width: 400px;
    height: auto;
    margin: auto;
    margin-top: 20px;
    border: 1px solid #F6F5F2;
    border-radius: 10px;
    padding: 20px;
    form{
        display: grid;
        gap: 30px;
    }
`

export const Input = styled.div`
    width: 300px;
    height: 50px;
    margin: auto;
    
`

export const InputForm = styled.div`
    width: 100%;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #F6F5F2;
    input{
        width: 100%;
        height: 30px;
        outline: none;
        background: transparent;
        padding: 0px 15px 0px 15px;
        border: none;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    gap: 10px;
    .button{
        width: 200px;
        height: 35px;
        margin: auto;
        border-radius: 30px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: #F6F5F2;
        color: black;
        display: block;
        justify-content: center;
    }
    .error-text{
        color: red;
        width: 300px;
        margin: auto;
        font-size: 12px;
    }
`