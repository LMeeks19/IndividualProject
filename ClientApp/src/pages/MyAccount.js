import React from 'react'
import { DeleteData } from '../Server/requests'
import { userState } from '../State/GlobalState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isUserLoggedInState } from '../State/GlobalState';
import { useNavigate } from 'react-router-dom';

export default function MyAccount() {

    const [user, setUser] = useRecoilState(userState);
    const setIsUserLoggedIn = useSetRecoilState(isUserLoggedInState);
    const navigate = useNavigate();

    const logUserOut = () => {
        setUser(null);
        setIsUserLoggedIn(false);
        navigate('/');
    }

    const deleteAccount = async () => {
        await DeleteData('api/user', { Username: user.username })
            .then(logUserOut);
    }

    return (
        <div className='mt-[5rem]'>
            <div className='text-center'>
                <div className='text-3xl font-bold'>My Account</div>
            </div>

            <div className='flex flex-col'>
                <button className="btn-primary my-1" onClick={logUserOut}>LOG OUT</button>
                <button className="btn-primary red my-1" onClick={deleteAccount}>DELETE ACCOUNT</button>
            </div>

        </div>

        //TODO: 
        // Display all account info and allow user to change each aspect 
        // Data send to back and and updated in databases
    );
}