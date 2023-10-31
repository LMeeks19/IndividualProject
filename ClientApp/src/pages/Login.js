import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginInfoState, userState, isUserLoggedInState } from '../State/GlobalState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { GetData } from '../Server/requests'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
  const setIsUserLoggedIn = useSetRecoilState(isUserLoggedInState);
  const setUser = useSetRecoilState(userState);

  const submitLogin = async (event) => {
    event.preventDefault();
    var errorBox = document.getElementById("errorMessage");

    try {
      var data = await GetData('api/user', loginInfo);
      setUser(data);
      setIsUserLoggedIn(true);
      navigate("/");
    }
    catch {
      errorBox.innerHTML = "The Username or Password is incorrect";
      errorBox.style.display = "block";
    }
  }

  return (
    <div className='mt-[5rem]'>
      <div className='text-center'>
        <div className='text-3xl font-bold'>Login</div>
        <div>Please sign in to your account or create a new account if you have not yet registered</div>
      </div>
      <div className='flex-col mt-[2rem]'>
        <div className='error-message text center red mb-[1rem]' id='errorMessage' />

        <form className='flex flex-col justify-center' onSubmit={submitLogin}>
          <div className='font-semibold'>Username:</div>
          <input onChange={event => setLoginInfo({ ...loginInfo, username: event.target.value })} type='text' required />

          <div className='font-semibold'>Password:</div>
          <input onChange={event => setLoginInfo({ ...loginInfo, password: event.target.value })} type='password' required />

          <button className='btn-primary blue' type='submit'>Login</button>
        </form>

        <div className='navbar-nav'>
          <div className='flex justify-evenly mt-[1rem]'>
            <NavItem>
              <NavLink tag={Link} to="/create-account">Create Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/forgotten-password">Forgotten Password</NavLink>
            </NavItem>
          </div>
        </div>
      </div>
    </div>
  );
}


