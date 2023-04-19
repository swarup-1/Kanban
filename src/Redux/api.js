import axios from "axios"

// -----------------------Kanban-------------------------------------------------------------
const baseURL = `https://kanbanbackend.vercel.app`
// ------------------------GET----------------------------
export const getBoardsApi=async()=>{
    let res = await axios.get(`${baseURL}/getboard`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    }
    )
    return res
}
// ------------------------POST----------------------------
export const addboardApi=(payload)=>{
    console.log('payload:', payload)
    let res = axios.post(`${baseURL}/addboard`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}
export const addtaskApi=(boardid,payload)=>{
    let res = axios.post(`${baseURL}/addtask/${boardid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}
export const addsubtaskApi=(taskid,payload)=>{
    let res = axios.post(`${baseURL}/addsubtask/${taskid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}

// ------------------------PATCH----------------------------
export const updateboardApi=(boardid,payload)=>{
    let res = axios.patch(`${baseURL}/updateboard/${boardid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}
export const updatetaskApi=(taskid,payload)=>{
    let res = axios.patch(`${baseURL}/updatetask/${taskid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}
export const updatesubtaskApi=(subtaskid,payload)=>{
    let res = axios.patch(`${baseURL}/updatesubtask/${subtaskid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}

// ------------------------DELETE----------------------------
export const deleteboardApi=(boardid,payload)=>{
    let res = axios.delete(`${baseURL}/deleteboard/${boardid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}
export const deletetaskApi=(boardid,taskid,payload)=>{
    let res = axios.delete(`${baseURL}/deletetask/${boardid}/${taskid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}
export const deletesubtaskApi=(taskid,subtaskid,payload)=>{
    let res = axios.delete(`${baseURL}/deletesubtask/${taskid}/${subtaskid}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
    return res
}

// -----------------------Authentication-------------------------------------------------------------
export const regApi=(payload)=>{
    let res = axios.post(`${baseURL}/signup`,payload)
    return res
}
export const logApi=(payload)=>{
    let res = axios.post(`${baseURL}/signin`,payload)
    return res
}