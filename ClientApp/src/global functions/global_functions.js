import { useSetRecoilState } from "recoil";
import { isUserLoggedInState, userState } from "../state/GlobalState";
import { useNavigate } from "react-router-dom";

export function LogUserOut() {
    const setUser = useSetRecoilState(userState);
    const setIsUserLoggedIn = useSetRecoilState(isUserLoggedInState);;
    const navigate = useNavigate();

    setUser(null);
    setIsUserLoggedIn(false);
    navigate('/');
}

function StringToColor(string) {
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

  export function StringAvatar(name) {
    return {
      sx: {
        bgcolor: StringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }