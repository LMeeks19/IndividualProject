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
        forname: "",
        surname: "",
        email: "",
        phoneNumber: "",
    }
});

