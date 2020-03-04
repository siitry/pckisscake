import axios from "axios"
export function getDetailsById(id){
    return new Promise(
        (resolve,reject)=>{
            axios.get("/Details",{
                params:{
                    id //id:id
                }
            }).then(result=>{
                resolve(result.data);
            })
        }
    )
}