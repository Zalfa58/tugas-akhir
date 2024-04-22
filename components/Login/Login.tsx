"use client";
import React, { useState } from "react";
import {
    LoginWrapper,
    LoginCard,
    InputLoginCard,
    InputLoginContainer,
    TitleText,
    Input,
    OptionRemember,
    LoginButton,
    Register,
    CheckBox,
    ForgotPassword

} from "./Login.styled";
import {
    PaddingContainer
} from '@/components/common/'
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    };

    const handleRememberPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberPassword(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lakukan validasi atau pengiriman data login ke server di sini
    console.log('Username:', username);
    console.log('Password:', password);
    };
    return(
        <LoginWrapper>
            <PaddingContainer>
                <LoginCard>
                    <InputLoginCard>
                        <InputLoginContainer>
                            <TitleText>
                                <h1>
                                    Login
                                </h1>
                            </TitleText>
                            <Input>
                                <input
                                    placeholder="Username"
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    className="Input"
                                />
                            </Input>
                            <Input>
                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="Input"
                            />
                            </Input>
                            <OptionRemember>
                                <CheckBox>
                                    <input
                                        type="checkbox"
                                        id="rememberPassword"
                                        checked={rememberPassword}
                                        onChange={handleRememberPasswordChange}
                                    />
                                    <label htmlFor="rememberPassword">Remember Password</label>
                                </CheckBox>
                                <ForgotPassword>
                                    <Link href={""}>
                                        <p>
                                            Forgot Password?
                                        </p>
                                    </Link>
                                </ForgotPassword>
                            </OptionRemember>
                            <LoginButton>
                                <button type="submit"><p>Login</p></button>
                            </LoginButton>
                            <Register>
                                <p className="p-text">
                                    Don't have an account?
                                </p>
                                <Link href={""}>
                                    <p className="register-text">
                                        Register
                                    </p>
                                </Link>
                            </Register>
                        </InputLoginContainer>
                    </InputLoginCard>
                </LoginCard>
            </PaddingContainer>
        </LoginWrapper>
    );
}