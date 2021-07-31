import request from "@/api/request";


export default {
    postLogin(params) {
        return request.post('/passport/login', params)
    }
}
