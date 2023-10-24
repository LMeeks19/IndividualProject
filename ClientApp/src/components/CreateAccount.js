import React, {useState} from 'react';
import { PostData } from '../server'

export function CreateAccount() {

    const [newAccount, setNewAccount] = useState({
        username: "",
        password: "",
        forename: "",
        surname: "",
        email: "",
        phoneNumber: ""
    })

    const createAccount = async () => {
        await PostData('api/user', newAccount);  
    }

    return (
        <div className='mt10'>
            <div className='text-center'>
                <h1>Create Account</h1>
                <p>Please fill in all required fields</p>
            </div>

            <div className='flex column'>
                <div>Username:*</div>
                <input className='mb1' onChange={e => setNewAccount({...newAccount, username: e.target.value})} type='text'></input>

                <div>Password:*</div>
                <input className='mb1' onChange={e => setNewAccount({...newAccount, password: e.target.value})} type='password'></input>

                <div>Forename:*</div>
                <input className='mb1' onChange={e => setNewAccount({...newAccount, forename: e.target.value})} type='text'></input>

                <div>Surname:*</div>
                <input className='mb1' onChange={e => setNewAccount({...newAccount, surname: e.target.value})} type='text'></input>

                <div>Email:*</div>
                <input className='mb1' onChange={e => setNewAccount({...newAccount, email: e.target.value})} type='text'></input>

                <div>Phone Number:</div>
                <input className='mb1' onChange={e => setNewAccount({...newAccount, phoneNumber: e.target.value})} type='text'></input>

                <button className='btn-primary mt1' onClick={createAccount}>
                    Create Account
                </button>
            </div>
        </div >
    );

}