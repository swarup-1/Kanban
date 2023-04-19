import { error } from "../Authentication/user.actiontype"
import { getBoardsApi } from "../api"
import { getboard,loading } from "./kanban.actiontype"



export const getBoardfun=()=>async(dispatch)=>{
    dispatch({type:loading})
    try{
        let main = await getBoardsApi()
        dispatch({type:getboard,payload:main.data})
    }
    catch(err){
        console.log('err:', err)
    }
}

// export const xxxxxx=(data)=>async(dispatch)=>{
//     try{
//         let main = await regApi(data)
//         dispatch({type:register})
//     }
//     catch(err){
//         console.log('err:', err)
//         dispatch({type:error})
//     }
// }