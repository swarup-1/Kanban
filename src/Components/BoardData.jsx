import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux';

const BoardData = ({id}) => { 
  const [todo,setTodo] = useState([])
  const [doing,setDoing] = useState([])
  const [done,setDone] = useState([])
  const store = useSelector((state) => state.kanbanReducer); 

  id = id || store.boards[0]._id
  let arr = store.boards.filter((el)=>{
    return el._id == id
  })
  let data = arr[0].tasks || []
  if(arr[0].tasks){
    data = arr[0].tasks
  }


  useEffect(()=>{
    if(data){
      let arr1 = data.filter((el)=>{
          return el.status == "Todo" 
      })
      setTodo(arr1)
      let arr2 = data.filter((el)=>{
        return el.status == "Doing" 
      })
      setDoing(arr2)
      let arr3 = data.filter((el)=>{
        return el.status == "Done" 
      })
      setDone(arr3)
    }
  },[store,store.boards,id])

  if(store.loading){
    return (
      <Text>Loading......</Text>
    )
  }

  return (
    <Box display="flex" backgroundColor="#d4d2ff" justifyContent="space-evenly" w="80%" >
      <Box border="1px solid green" w="30%" >
        <Text>Todo</Text>
        {todo && todo.map((el)=>(
          <Task task={el} />
        ))}
      </Box>
      <Box border="1px solid green" w="30%" >
        <Text>Doing</Text>
        {doing && doing.map((el)=>(
          <Task task={el} />
        ))}
        {}
      </Box>
      <Box border="1px solid green" w="30%" >
        <Text>Done</Text>
        {done && done.map((el)=>(
          <Task task={el} />
        ))}
        {}
      </Box>
    </Box>
  )
}

export default BoardData