"use client";
import React from "react";
import {
    GalleryWrapper,
    Header,
    Body,
} from './HomePage.styled';
import { PaddingContainer, Navbar, Card } from "../common";

export default function HomePage() {
 return(
    <GalleryWrapper>
        <Navbar/>
        <PaddingContainer>
            <Header>
                <Card 
                image={""} 
                Title={"Creating Form in React Native Using React Hook Form"} 
                Description={"Form is one of the essential components on an application. Many applications contain some forms on inside them. There are some ways to…"}>
                </Card>
            </Header>
        </PaddingContainer>
    </GalleryWrapper>
 );
}