import React, {useEffect} from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginInfoState, userState } from '../state/GlobalState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { GetData, PostData } from '../server'
export function Login() {

  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState)
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {
    
  })

  useEffect(() => {
    console.log(user);
  }, [user]);

  const submitLogin = async () => {
    var data = await GetData('user', loginInfo);
    setUser({data});
  }

  return (
    <div className='mt10'>
      <div className='text-center'>
        <h1 id="tabelLabel">Login</h1>
        <p>Please sign in to your account or create a new account if you have not yet registered</p>
      </div>
      <div className='flex column'>
        <div>Username:</div>
        <input className='mb1' autoComplete='username' onChange={event => setLoginInfo({ ...loginInfo, username: event.target.value })} type='text'></input>
        <div>Password:</div>
        <input className='mb1' autoComplete='current-password' onChange={event => setLoginInfo({ ...loginInfo, password: event.target.value })} type='password'></input>
        <button className='btn-primary' onClick={submitLogin}>Login</button>
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
      {user.forname}
    </div>
  );
}


