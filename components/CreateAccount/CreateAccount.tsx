"use client";
import React, { useState } from "react";
import {
    CreateWrapper,
    CreateCard,
    InputCard,
    Input,
    InputForm,
    ButtonPosition,
    Button,
} from "./CreateAccount.styled"
import {
    PaddingContainer
} from '@/components/common/'
import Link from "next/link";

export default function CreateAccount() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lakukan validasi atau pengiriman data pembuatan akun ke server di sini
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };
    return(
        <CreateWrapper>
            <PaddingContainer>
                <CreateCard>
                <h2>Create Account</h2>
                    <InputCard>
                        <form onSubmit={handleSubmit}>
                            <Input>
                                <label htmlFor="email">Email:</label>
                                <InputForm>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                                </InputForm>
                                
                            </Input>
                            <Input>
                                <label htmlFor="email">User Name:</label>
                                <InputForm>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                </InputForm>
                                
                            </Input>
                            <Input>
                                <label htmlFor="email">Password</label>
                                <InputForm>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                </InputForm>
                                
                            </Input>
                            <Input>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <InputForm>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                </InputForm>
                            </Input>
                            <ButtonPosition>
                                <Link href={'/'}>
                                    <Button type="submit">
                                        Create Account
                                    </Button>   
                                </Link>
                                
                            </ButtonPosition>
                        </form>
                    </InputCard>
                </CreateCard>
            </PaddingContainer>
    </CreateWrapper>
    );
}