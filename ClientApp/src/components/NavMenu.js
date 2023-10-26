import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useRecoilValue } from 'recoil';
import { isUserLoggedInState, userState } from '../state/GlobalState';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';

export function NavMenu() {

  const isUserLoggedIn = useRecoilValue(isUserLoggedInState);
  const user = useRecoilValue(userState);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-[3rem]" container light>
        <NavbarBrand tag={Link} className='font-semibold' to="/">IndividualProject</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isNavbarOpen} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem className={`ml-auto ${isNavbarOpen ? '' : 'flex'}`}>
              {!isUserLoggedIn ?
                <NavLink tag={Link} className="text-dark font-semibold" to="/login">Login <LockOpenSharpIcon fontSize='small'  className='my-auto'/></NavLink>
                :
                <NavLink tag={Link} className='text-dark font-semibold' to={`/account/${user.username}`}>Account <AccountCircleSharpIcon fontSize='small' className='my-auto' /></NavLink>
              }
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
}
