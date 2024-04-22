import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Login from '@/components/Login/Login';
import CreateAccount from "@/components/CreateAccount/CreateAccount"
// import Login from "";

export default function Home() {
  return (
    <>
      {/* <Login/> */}
      <CreateAccount/>
    </>
  )
}
