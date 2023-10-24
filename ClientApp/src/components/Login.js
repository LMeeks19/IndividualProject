import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginInfoState, userState } from '../state/GlobalState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { GetData } from '../server'
import { useNavigate } from 'react-router-dom';

export function Login() {

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
  const setUser = useSetRecoilState(userState);

  const submitLogin = async (event) => {
    event.preventDefault();
    var errorBox = document.getElementById("errorMessage");

    try {
      var data = await GetData('api/user', loginInfo);
      setUser({ data });
      navigate("/");
    }
    catch {
      errorBox.innerHTML = "The Username or Password is incorrect";
      errorBox.style.display = "block";
    }
  }

  return (
    <div className='mt10'>
      <div className='text-center'>
        <h1>Login</h1>
        <p>Please sign in to your account or create a new account if you have not yet registered</p>
      </div>
      <div className='flex column'>
        <div className='error-message text center red mb1' id='errorMessage' />

        <form className='flex column' onSubmit={submitLogin}>
          <h5>Username:</h5>
          <input className='mb1' onChange={event => setLoginInfo({ ...loginInfo, username: event.target.value })} type='text' required></input>

          <h5>Password:</h5>
          <input className='mb1' onChange={event => setLoginInfo({ ...loginInfo, password: event.target.value })} type='password' required></input>
          
          <button className='btn-primary' type='submit'>Login</button>
        </form>
        <div className='navbar-nav'>
          <div className='flex justifyevenly mt1'>
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


