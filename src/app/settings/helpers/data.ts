import { useQuery } from "react-query"
import axios from "axios"
import config from "../../../config"
import useStore from "../../auth/store/authStore"



const fetchConfigurations = (token: string) => {
    return axios.get(`${config.baseUrl}/configuration`, { headers: { "Authorization": `Bearer ${token}` } })
}


export const useConfigurations = () => {
    const authToken = useStore(state => state.token)
    return useQuery('configuration', () => fetchConfigurations(authToken), {
        select: (data) => {
            return data?.data;
        },
    })
}


