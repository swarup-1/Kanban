import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const store=useSelector((state)=>state.userReducer)
    // console.log('store:', store)
    if(store.isAuth==false){
       return (
        <Navigate to="/login" />
       )
    }
    return children
}

export default PrivateRoute