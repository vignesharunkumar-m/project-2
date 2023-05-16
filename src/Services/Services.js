import axios from './Axios'


export const loginService = (data) => {
    return axios.post('login/access-token',data)
}

