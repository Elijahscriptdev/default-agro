import { useQuery } from "react-query"
import axios, { AxiosResponse } from "axios"
import config from "../../../config"
import { User } from "../../users/types/user.types"



const fetchProfile = (token: string) => {
    return axios.get(`${config.baseUrl}/user`, { headers: { "Authorization": `Bearer ${token}` } })
}


export const useProfile = (token: string, setData: (apiKey: string, webhook: string) => void) => {
    return useQuery('profile', () => fetchProfile(token), {
        onSuccess: (data: AxiosResponse<User>) => {
            const apiKey = data?.data?.secret_key ?? ''
            const webhook = data?.data?.webhook ?? ''
            setData(apiKey, webhook)
        }
    })
}



export const useProfileAuth = (token: string, setUser: (user: User) => void) => {
    return useQuery('profile-auth', () => fetchProfile(token!), {
        enabled: token !== "",
        onSuccess: (data: AxiosResponse<User>) => {
            const user = data?.data
            setUser(user)
        }
    })
}
