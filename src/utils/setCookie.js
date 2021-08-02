import Cookie from 'js-cookie';


export function setCookie(info) {
    const arr = Object.entries(info)
    for (let i = 0; i < arr.length; i++) {
        Cookie.set(arr[i][0], arr[i][1])
    }
    return true


}


export function getCookie() {
    return {
        username: Cookie.get('username'),
        role: Cookie.get('role'),
        appkey: Cookie.get('appkey'),
        email: Cookie.get('email'),
    }

}


export function removeCookie() {
    Cookie.remove('username');
    Cookie.remove('role');
    Cookie.remove('appkey');
    Cookie.remove('email');
    return true
}
