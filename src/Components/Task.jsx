import { Box, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import UpdateBox from './UpdateBox'

const Task = ({task}) => {
  
  const OverlayOne = () => (
    <ModalOverlay bg='blackAlpha.200' backdropFilter='blur(2px) hue-rotate(50deg)' />
)
const { isOpen, onOpen, onClose } = useDisclosure()
const [overlay, setOverlay] = React.useState(<OverlayOne />)
  let subtask = task.subtask
  return (
    <>
    <Box onClick={() => {
      setOverlay(<OverlayOne />)
      onOpen()
    }} backgroundColor="white" w="100%" height="100px" m="10px 0" p="10px" >
        <Text fontWeight="500" >{task.title}</Text>
        <Box>
            {subtask && subtask.map((el)=>(
                <Text fontSize="12px" color="gray" >{el.title}</Text>
                ))}
        </Box>
    </Box>
    <UpdateBox selectedTask={task} isOpen={isOpen} overlay={overlay} onClose={onClose} />
    </>
  )
}

export default Task