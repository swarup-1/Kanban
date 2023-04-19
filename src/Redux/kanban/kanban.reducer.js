import { addboard, addsubtask, addtask, deleteboard, deletesubtask, deletetask, getboard, getsubtask, gettask, loading, updateboard, updatesubtask, updatetask } from "./kanban.actiontype"


let initial={
    boards: [],
    loading:false
}
export const kanbanReducer=(state=initial,action)=>{
    const {payload,type}=action
    switch(type){
        case getboard :{
            return {...state,boards:[...payload],loading:false}
        }
        case loading :{
            return {...state,loading:true}
        }
        case addboard :{
            return {...state,boards:[...state.boards,payload]}
        }
        case updateboard :{
            return {...state}
        }
        case deleteboard :{
            return {...state}
        }
        case gettask :{
            return {...state}
        }
        case addtask :{
            return {...state}
        }
        case updatetask :{
            return {...state}
        }
        case deletetask :{
            return {...state}
        }
        case getsubtask :{
            return {...state}
        }
        case addsubtask :{
            return {...state}
        }
        case updatesubtask :{
            return {...state}
        }
        case deletesubtask :{
            return {...state}
        }
        default:{
            return state
        }
    }
}

/*
boards: [
      {
        name: "Todo",
        tasks: [
          {
            title: "Build UI for onboarding flow",
            description: "",
            status: "Todo",
            subtasks: [
                {
                    title: "Sign up page",
                    isCompleted: true
                },
            ]
          }
        ]
      }
    ]

*/