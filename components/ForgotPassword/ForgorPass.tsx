"use client";
import React, {useState} from "react";
import {
    Wrapper,
    Card,
    InputContainer,
    Input,
    InputForm,
    ButtonContainer,
} from "./FotgotPass.styled";
import { PaddingContainer } from "@/components/common";
import Link from "next/link";

export default function ForgotPass() {
    const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };

  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage('New password and confirm new password must match.');
      return;
    }

    // Lakukan logika untuk mengirim permintaan perubahan password
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);

    // Reset input setelah pengiriman
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setErrorMessage('');
  };

    return(
        <Wrapper>
            <PaddingContainer>
                <Card>
                    <h2>Change Password</h2>
                    <InputContainer>
                        <form onSubmit={handleSubmit}>
                            <Input>
                                <label htmlFor="currentPassword">Current Password:</label>
                                <InputForm>
                                    <input
                                    type="password"
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={handleChangeCurrentPassword}
                                    required
                                    />
                                </InputForm>
                                
                            </Input>
                            <Input>
                                <label htmlFor="newPassword">New Password:</label>
                                <InputForm>
                                    <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={handleChangeNewPassword}
                                    required
                                    />
                                </InputForm>
                                
                            </Input>
                            <Input>
                                <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                                <InputForm>
                                    <input
                                    type="password"
                                    id="confirmNewPassword"
                                    value={confirmNewPassword}
                                    onChange={handleChangeConfirmNewPassword}
                                    required
                                    />
                                </InputForm>  
                            </Input>
                            <ButtonContainer>
                                {errorMessage && <p className="error-text">{errorMessage}</p>}
                                    <button className="button" type="submit">
                                    <Link href='/'>
                                        <h3>
                                            Change Password
                                        </h3>
                                    </Link>
                                    </button>
                                    
                            </ButtonContainer>
                            
                        </form>
                    </InputContainer>
                </Card>
            </PaddingContainer>
        </Wrapper>
    );
}