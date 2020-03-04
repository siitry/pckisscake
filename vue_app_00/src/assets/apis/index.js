import axios from "axios"

export function getGoods(){
    return new Promise((resolve,reject)=>{
        axios.get("/goods").then(result=>{
            resolve(result.data)
        })
    })
}