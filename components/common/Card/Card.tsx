"use client";
import Image from "next/image";
import { useState } from "react";
import {
 CardContainer,
 CardContent,
} from './card.styled';
import UserImage from '@/assets/user-profile.svg';

type Data = {
  id: number;
  imageUrl: string;
  user: string;
  photoUser: string;
  title: string;
};

interface CardProps {
  data: Data;
}

export default function Card({ data }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickToggleDropdown, setIsClickToggleDropdown] = useState(false);

  const handleDropdown = () => {
    setIsClickToggleDropdown(!isClickToggleDropdown);
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section
        className="flex break-inside-avoid relative flex-col mb-[20px] cursor-pointer overflow-hidden
        rounded-[16px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContainer>
        <Image
          src={data.imageUrl || UserImage}
          alt="Image Gallery"
          width={265}
          height={500}
          className="h-auto overflow-hidden"
        />
        <div
          className={` w bottom-0 rounded[16px] overflow-hidden transition-opacity duration-500 ease p-[20px] bg-slate-400 `}
        >
          <h1 className="text-[16px] mb-[10px] text-white">{data.title}</h1>
          <div className="flex gap-[8px] items-center">
            <Image
              src={data.photoUser}
              alt="Person"
              width={30}
              height={30}
              className="rounded-[50%]"
            />
            <p className="text-[14px] text-white">{data.user}</p>
          </div>
        </div>
        </CardContainer>
      </section>
    </>
  );
}
