import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000/',
    headers : {
        "API-KEY": "h1755bf2-e3t5-4080-9db2-94sfg00sg"
    }
});
const instance1 = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page[offset]=${currentPage}&page[limit]=${pageSize}`)
            .then(response => {
                return response.data[0];                
            });
    },
    /* getUsers(currentPage = 1, pageSize = 10) {
        return instance1.get(`users?`)
            .then(response => {
                debugger
                return response.data;                
            });
    }, */
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`status/` + userId);
    },
    updateStatus(userId, photoUrl, status) {
        return instance.put(`profile/` + userId, {id: userId, photoUrl: photoUrl, status: status});
    }
}
export const authAPI = {
    auth() {
        return instance.get(`auth`);
    },
    setAuth(resultCode = 0) {
        return instance.put(`auth/2`, {resultCode} );
    },
    login(email, password, rememberMe = false, resultCode = 0) {
        return instance.post(`login`, { email, password, rememberMe, resultCode});
    },
    logout() {
        return instance.delete(`login/1`);
    }
}