import create from 'zustand'
import { User } from '../../users/types/user.types';


type AuthState = {
    user: User,
    token: string,
    tokenExpiresIn: number,
    setUser: (user: User) => void,
    setToken: (token: string, tokenExpiresIn: number) => void,
    updateUser: (user: User) => void
}

const useStore = create<AuthState>((set) => ({
    token: getTokenLocalStorage('agroapitk'),
    tokenExpiresIn: 0,
    user: getUserLocalStorage('agroapiuser'),
    setUser: (user: User) => {
        set(() => {
            setLocalStorage("agroapiuser", user);
            return {
                user
            };
        })
    },
    setToken: (token: string, tokenExpiresIn: number) => {
        set(() => {
            setLocalStorage("agroapitk", token);
            return {
                token,
                tokenExpiresIn,
            };
        })
    },
    updateUser: (user: User) => {
        set(() => {
            setLocalStorage("agroapiuser", user);
            return {
                user
            };
        })
    }
}))


function getUserLocalStorage(key: string) {
    const localData = localStorage.getItem(key)
    return localData ? JSON.parse(localData) : {}
}


function getTokenLocalStorage(key: string) {
    const localData = localStorage.getItem(key)
    return localData ? JSON.parse(localData) : ''
}

function setLocalStorage(key: string, value: User | string) {
    window.localStorage.setItem(key, JSON.stringify(value));
}



export default useStore