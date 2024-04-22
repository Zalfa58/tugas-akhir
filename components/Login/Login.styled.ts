import styled from "styled-components";
import BackgroundCard from "@/assets/login/backgroundcard.jpg"

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    background-color: #FFEAE3;
    justify-content: center;
    align-items: center;
`

export const LoginCard = styled.div`
    width: 1000px;
    height: 600px;
    background: url(${BackgroundCard.src});
    background-size: cover;
    border-radius: 20px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: grid;
`

export const InputLoginCard = styled.div`
    width: 300px;
    height: 350px;
    background: transparent;
    backdrop-filter: invert(10%);
    margin: auto;
    border-radius: 20px;
    border: 3px solid #F6F5F2;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`

export const InputLoginContainer = styled.div`
    width: 270px;
    height: 320px;
    background: transparent;
    display: grid;
    gap: 10px;
    font-family: 'Trebuchet MS', sans-serif;
`

export const TitleText = styled.div`
    width: 100%;
    height: 60px;
    font-family: 'Brush Script MT', cursive;
    text-align: center;

`

export const Input = styled.div`
    width: 100%;
    height: 45px;
    border-radius: 50px;
    border: 1px solid;
    display: flex;
    input::placeholder{
        color: #F6F5F2;
    }
    .Input{
        width: 260px;
        height: 45px;
        background-color: transparent;
        border: none;
        align-items: center;
        padding: 0px 15px 0px 15px;
        margin: auto;
        outline: none;
        
    }
`

export const OptionRemember = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    gap: 30px;
    align-items: center;
`

export const CheckBox = styled.div`
    margin-left: 10px;
    display: flex;
    gap: 8px;
    label{
        font-size: 12px;
    }
`

export const ForgotPassword = styled.div`
    p{
        font-size: 12px;
    }
`

export const LoginButton = styled.div`
    width: 100%;
    height: 40px;
    background-color: cadetblue;
    border-radius: 50px;
    button{
        width: 100%;
        height: 100%;
        border-radius: 30px;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: #F6F5F2;
        color: black;
    }
    p{
        font-size: 15px;
        font-weight: 600;
    }
`

export const Register = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    gap: 5px;
    justify-content: center;
    .p-text{
        font-size: 12px;
    }
    .register-text{
        font-size: 12px;
    }
`