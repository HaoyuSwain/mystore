import axios from "axios";

const ins = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/'
})

ins.interceptors.request.use((config) => {
    return config

}, err => Promise.reject(err))

ins.interceptors.response.use((response) => {
    console.log(response)
    if (response.data.status === 'fail') {
        return Promise.reject(response.data.msg)

    }
    return response.data.data
}, error => {
    return Promise.reject(error)
})

export default ins
