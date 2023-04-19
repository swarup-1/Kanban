import { Box, Button, Checkbox, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Subtask from './Subtask'
import { updatetaskApi } from '../Redux/api';
import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { getBoardfun } from '../Redux/kanban/kanban.actions';
import { useDispatch, useSelector } from 'react-redux';

const UpdateBox = ({isOpen,overlay,onClose,selectedTask}) => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.kanbanReducer); 
    const [task, setTask] = useState({selectedTask});
    const [subtaskArr, setSubtaskArr] = useState(selectedTask.subtask);
    const [storeChanged, setStoreChanged] = useState(false);
    
    const handleChange = (e) => {
      setTask({ ...task, [e.target.name]: e.target.value });
    };
    const getBoards = () => {
      dispatch(getBoardfun());
      setStoreChanged(false)
    }
    useEffect(()=>{
      setTask(task)
    },[task])
    
    const updateTask=async()=>{
      if(!storeChanged){
        getBoards()
        setStoreChanged(true)
      }
      setTask({...task,subtask:subtaskArr})
      let result = await updatetaskApi(selectedTask._id,task);
    }

    const handleDelete=()=>{}
  return (
    <Box>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>{selectedTask.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e) => { e.preventDefault(); updateTask(); }}
              style={{ margin: "auto"}}>
                    {selectedTask.subtask && selectedTask.subtask.map((el,i)=>(
                    <Subtask subtaskArr={subtaskArr} setSubtaskArr={setSubtaskArr} index={i}  {...el} />
                    ))}
                <Select m="5px 0px" onChange={handleChange} value={task.status} name="status">
                  <option value='Todo'>Todo</option>
                  <option value='Doing'>Doing</option>
                  <option value='Done'>Done</option>
                </Select>
                <Flex justifyContent="space-between">
                  <Button m="5px 0px" onClick={()=>{onClose()}} w="45%" type="submit">Update Task</Button>
                  <Button m="5px 0px" onClick={()=>{onClose();handleDelete()}} w="45%">Delete Task</Button>
                </Flex>
            </form>
            </ModalBody>
          </ModalContent>
        </Modal>
    </Box>
  )
}

export default UpdateBox