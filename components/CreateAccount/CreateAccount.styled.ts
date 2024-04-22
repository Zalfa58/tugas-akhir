import styled from "styled-components";
import BackgroundCard from "@/assets/login/backgroundcard.jpg"

export const CreateWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #FFEAE3;
    justify-content: center;
    display: grid;
    align-items: center;
`

export const CreateCard = styled.div`
    width: 1000px;
    height: 600px;
    background: url(${BackgroundCard.src});
    background-size: cover;
    border-radius: 50px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: grid;
    h2{
        width: 600px;
        margin: auto;
    }
`
export const InputCard = styled.div`
    width: 600px;
    height: 350px;
    background: transparent;
    backdrop-filter: invert(10%);
    margin: auto;
    border-radius: 20px;
    border: 3px solid #F6F5F2;
    display: grid;
    align-items: center;
    margin-top: -50px;
`

export const Input = styled.div`
    width: 400px;
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

export const ButtonPosition = styled.div`
    width: 400px;
    height: 26px;
    margin: auto;
    margin-top: 10px;
`

export const Button = styled.button`
    width: 150px;
    height: 24px;
`