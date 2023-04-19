import { error, login, register } from "./user.actiontype"


let initial={
    isAuth:false,
    error:false
}

export const userReducer=(state=initial,action)=>{
    const {payload,type}=action
    switch(type){
        case register: {
            return {...state,isAuth:false,error:false}
        }
        case login: {
            return {...state,isAuth:true,error:false}
        }
        case error: {
            return {...state,isAuth:false,error:true}
        }
        default:{
            return state
        }
    }
}