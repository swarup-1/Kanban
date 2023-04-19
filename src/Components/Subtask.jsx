import React, { useEffect, useState } from 'react'
import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
const Subtask = (props) => {
    const [status,setStatus] = useState(props.isCompleted)
    const dispatch = useDispatch()
    let arr = props.subtaskArr
    useEffect(()=>{
      arr[props.index].isCompleted = status
      props.setSubtaskArr(arr)
    },[status])
    
    const handleStatus=(e)=>{
      setStatus(e.target.checked)
    }
  return (
    <Flex border="1px solid #e6e6e6" justifyContent="space-between" margin="5px" width="95%" backgroundColor="white">
        <Checkbox padding="0px 10px" size='lg' colorScheme='purple' onChange={(e)=>handleStatus(e)} isChecked={status} />
        <Text  textAlign="start" padding="7px">{props.title}</Text>
        <Box>
            <EditIcon margin="10px" />
            <SmallCloseIcon margin="10px" 
            // onClick={dispatch(deleteTodo(props.id))} 
            />
        </Box>
    </Flex>
  )
}

export default Subtask