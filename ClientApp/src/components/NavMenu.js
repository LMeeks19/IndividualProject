import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useRecoilState } from 'recoil';
import { isUserLoggedInState, userState } from '../State/GlobalState';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export function NavMenu() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useRecoilState(isUserLoggedInState);
  const [user, setUser] = useRecoilState(userState);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const logUserOut = () => {
    setUser(null);
    setIsUserLoggedIn(false);
    navigate('/');
  }

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const goToSettings = () => {
    setAnchorEl(null);
    navigate('/settings');
  }

  const goToAccount = () => {
    setAnchorEl(null);
    navigate('/myAccount');
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-[3rem]" container light>
        <NavbarBrand tag={Link} className='font-semibold' to="/">IndividualProject</NavbarBrand>
        <ul className="navbar-nav flex-grow">
          <NavItem className="ml-auto">
            {!isUserLoggedIn ?
              <NavLink tag={Link} className="text-dark font-semibold" to="/login">Login <LockOpenSharpIcon fontSize='small' className='my-auto' /></NavLink>
              :
              <IconButton
                onClick={handleClick}
                size='small'
              >
                <Avatar {...stringAvatar(`${user.forename} ${user.surname}`)} />
              </IconButton>
            }
          </NavItem>
        </ul>
      </Navbar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={goToAccount}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={goToSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logUserOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>


  );
}
