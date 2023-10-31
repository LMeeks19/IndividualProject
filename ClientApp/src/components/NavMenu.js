import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useRecoilValue } from 'recoil';
import { isUserLoggedInState, userState } from '../state/GlobalState';
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
import { LogUserOut } from '../global functions/global_functions';
import { StringAvatar } from '../global functions/global_functions';

export function NavMenu() {

  const isUserLoggedIn = useRecoilValue(isUserLoggedInState);
  const user = useRecoilValue(userState);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const logUserOut = LogUserOut();
  const stringAvatar = () => { 
    return StringAvatar(`${user.forename} ${user.surname}`) 
  };

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
                <Avatar {...stringAvatar} />
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
