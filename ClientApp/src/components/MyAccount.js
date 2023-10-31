import React from 'react'
import { DeleteData } from '../server'
import { LogUserOut } from '../global functions/global_functions';
import { userState } from '../state/GlobalState';
import { useRecoilState } from 'recoil';

export default function MyAccount() {

    const [user, setUser] = useRecoilState(userState);
    const logUserOut = LogUserOut();

    const deleteAccount = async () => {
        await DeleteData('api/user', { Username: user.username })
            .then(logUserOut);
    }

    return (
        <div className='mt-[5rem]'>
            <div className='text-center'>
                <div className='text-3xl font-bold'>My Account</div>
            </div>

            <button className="btn-primary" onClick={deleteAccount}>DELETE ACCOUNT</button>
            <button className="btn-primary" onClick={logUserOut}>LOG OUT</button>

        </div>

        //TODO: 
        // Display all account info and allow user to change each aspect 
        // Data send to back and and updated in databases
    );
}