import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useRecoilState} from 'recoil';
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

export function NavMenu() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useRecoilState(isUserLoggedInState);
  const [user, setUser] = useRecoilState(userState);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const logUserOut = () => {
    setIsUserLoggedIn(false);
    setUser(null);
    setAnchorEl(null);
  }

  const goToSettings = () => {
    setAnchorEl(null);
    navigate(`/${user.username}/settings`);
  }

  const goToAccount = () => {
    setAnchorEl(null);
    navigate(`/${user.username}/account`);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
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
