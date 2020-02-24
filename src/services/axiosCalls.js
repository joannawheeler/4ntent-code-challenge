import axios from "axios";

let apiBaseUrl = "http://localhost:8080/api/";

export const getPlan =(url)=> {
    return new Promise((reslove,reject) => {
        axios.get(`${apiBaseUrl}${url}`)
        .then(ret=>{
            reslove(ret)
        })
        .catch(err=>{
            reject(err)
        })
    })
    
}