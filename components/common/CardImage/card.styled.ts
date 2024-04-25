import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    height: 410px;
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
`

export const CardContent = styled.div`
    width: 270px;
    height: 150px;
    color: black;
    margin: auto;
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

