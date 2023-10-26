import { atom } from 'recoil';

export const loginInfoState = atom({
    key: 'loginInfoState',
    default: {
        username: "",
        password: "",
    }
});

export const userState = atom({
    key: 'userState',
    default: {
        username: "",
        password: "",
        forename: "",
        surname: "",
        email: "",
        phoneNumber: "",
    }
});

export const isUserLoggedInState = atom ({
    key: 'isUserLoggedInState',
    default: false
});

