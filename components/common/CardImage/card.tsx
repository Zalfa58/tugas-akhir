"use client";
import React from "react";
import Image from "next/image";
import {
    CardContainer,
    CardContent,
} from "./card.styled"
import Empty from "@/assets/empty.svg";

interface CardProps {
    image: string,
    Title: string,
    Description: string,
}

export default function Card({
    image,
    Title,
    Description,
}: CardProps) {
    return(
        <CardContainer>
            <Image src={image || Empty} alt={""} className="image-card"/>
            <CardContent>
                <h3 className="title">{Title}</h3>
                <p className="description">{Description}</p>
            </CardContent>
        </CardContainer>
    );
}