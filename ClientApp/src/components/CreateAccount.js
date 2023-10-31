import React, { useState } from 'react';
import { PostData } from '../server'
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {

    const navigate = useNavigate();

    const [newAccount, setNewAccount] = useState({
        username: "",
        password: "",
        forename: "",
        surname: "",
        email: "",
        phoneNumber: ""
    })

    const createAccount = async (event) => {
        event.preventDefault();

        try {
            validate();
            await PostData('api/user', newAccount)
                .then(navigate("/login"));
        }
        catch
        {

        }
    }

    const validate = () => {
        var errorBox = document.getElementById("errorMessage");
        errorBox.innerHTML = "";
        errorBox.style.display = "none";

        var isEmailValid = validateEmail();
        var isPhoneNumberValid = validatePhoneNumber();

        if (!isEmailValid)
            errorBox.innerHTML += "The Email entered is not a valid email address </br>";
        if (!isPhoneNumberValid)
            errorBox.innerHTML += "The Phone Number entered is not a valid phone number </br>";

        if (!isEmailValid || !isPhoneNumberValid) {
            errorBox.style.display = 'block';
            throw new Error();
        }
    }

    const validateEmail = () => {
        var emailRegex = new RegExp("[\\w\.]+@[\\w]+(\.[\\w]+){1,3}");
        if (newAccount.email !== "" && !emailRegex.test(newAccount.email))
            return false;
        return true;
    }

    const validatePhoneNumber = () => {
        var phoneNumberRegex = new RegExp("[0-9]+");
        if (newAccount.phoneNumber !== "" && !phoneNumberRegex.test(newAccount.phoneNumber))
            return false;
        return true;
    }

    return (
        <div className='mt-[5rem]'>
            <div className='text-center'>
                <div className='text-3xl font-bold'>Create Account</div>
                <div>Please fill in all required fields</div>
            </div>

            <div className='error-message text center red mt-[1rem]' id='errorMessage' />

            <form className='flex flex-col mt-[1rem] font-semibold' onSubmit={createAccount}>
                <div>Username:*</div>
                <input onChange={e => setNewAccount({ ...newAccount, username: e.target.value })} type='text' required></input>

                <div>Password:*</div>
                <input onChange={e => setNewAccount({ ...newAccount, password: e.target.value })} type='password' required></input>

                <div>Forename:*</div>
                <input onChange={e => setNewAccount({ ...newAccount, forename: e.target.value })} type='text' required></input>

                <div>Surname:*</div>
                <input onChange={e => setNewAccount({ ...newAccount, surname: e.target.value })} type='text' required></input>

                <div>Email:*</div>
                <input onChange={e => setNewAccount({ ...newAccount, email: e.target.value })} type='text' required></input>

                <div>Phone Number:</div>
                <input onChange={e => setNewAccount({ ...newAccount, phoneNumber: e.target.value })} type='text' required></input>

                <button className='btn-primary mt-[1rem]'>
                    Create Account
                </button>
            </form>
        </div >
    );

}