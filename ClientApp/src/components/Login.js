import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Login extends Component {
  static displayName = Login.name;

  constructor(props) {
    super(props);
    
    this.state = { user: [], loading: true };
  }

  componentDidMount() {
    this.populateUserData();
  }

  static renderUser(user) {
    return (
      <div className='flex column'>
        <div>Username:</div>
        <input className='mb1' value={user.username} type='text'></input>
        <div>Password:</div>
        <input className='mb1' value={user.password} type='password'></input>
        <button className='btn-primary'>Login</button>
        <div className='navbar-nav'>
          <div className='flex justifyevenly mt1 '>
            <NavItem>
              <NavLink tag={Link} to="/create-account">Create Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/forgotten-password">Forgotten Password</NavLink>
            </NavItem>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let contents = Login.renderUser(this.state.user);

    return (
      <div className='mt10'>
        <div className='text-center'>
          <h1 id="tabelLabel">Login</h1>
          <p>Please sign in to your account or create a new account if you have not yet registered</p>
        </div>
        {contents}
      </div>
    );
  }

  async populateUserData() {
    const response = await fetch('user');
    const data = await response.json();
    this.setState({ user: data, loading: false });
  }
}
