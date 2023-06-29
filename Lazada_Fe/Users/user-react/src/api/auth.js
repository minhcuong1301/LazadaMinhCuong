import backendLazadaAxios from "../plugin/axos";
const baseRoute = 'auth/'
const authApis = {
    login: (data) => {
        return backendLazadaAxios.post(baseRoute + 'login', data)
    }
   
};

export default authApis;