import { Button, Checkbox, Flex, Input} from '@chakra-ui/react'
import React, { useState } from 'react'

const SubtaskInput = ({subtaskArr,setSubtaskArr}) => {
    const [status,setStatus] = useState(false)
    const [text,setText] = useState("")
    const handleClick=()=>{
        if(text!=""){
            let arr = [...subtaskArr]
            arr.push({title:text,isCompleted:status})
            setSubtaskArr(arr)
            setText("")
        }
    }

    const handleStatus=(e)=>{
      setStatus(e.target.checked)
    }
  return (
    <Flex margin="auto" justifyContent="start" width="100%" backgroundColor="white">
      <Checkbox onChange={(e)=>handleStatus(e)} isChecked={status} padding="0px 10px" size='lg' colorScheme='purple' />
      <Input value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Create a new todo...' variant='unstyled' padding="8px" />
      <Button onClick={handleClick}  >Add</Button>
    </Flex>
  )
}

export default SubtaskInput