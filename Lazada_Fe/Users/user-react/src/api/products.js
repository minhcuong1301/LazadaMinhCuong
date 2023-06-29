import backendLazadaAxios from "../plugin/axos";
const baseRoute = 'products'
const prodApis={
    index:()=>{
        return backendLazadaAxios.get(baseRoute)
    },
    show:(id)=>{
        return backendLazadaAxios.get(baseRoute +"/"+id)
    }
}
export default prodApis