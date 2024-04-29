import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    height: auto;
    position: relative;
    background-color: aliceblue;
    overflow: hidden;
    border-radius: 20px;
    .image-card{
        border-radius: 14px 14px 0px 0px;
        height: 240px;
        width: 100%;
        object-fit: cover;
        background-color: #dddddd;
    }
    p{
        width: 170px;
    }
`

export const CardContent = styled.div`
    width: 265px;
    height: 105px;
    color: black;
    .title{
        width: 100%;
        height: auto;
    }
    .description{
        width: 100%;
        height: auto;
        max-height: 95px;
        padding-top: 10px;
    }
    
`

export const DropdownItem = styled.div`
    width: 120px;
    height: 130px;
    background-color: rgb(148 163 184 / 35%);
    position: absolute;
    margin-left: 120px;
    margin-top: -30px;
    border-radius: 12px;
    border: 1px solid black;
` 