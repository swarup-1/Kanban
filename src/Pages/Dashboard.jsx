import { Box, Button, Checkbox, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addboardApi, addtaskApi } from "../Redux/api";
import { getBoardfun } from "../Redux/kanban/kanban.actions";
import BoardData from "../Components/BoardData";
import SubtaskInput from "../Components/SubtaskInput";
import Subtask from "../Components/Subtask";
import UpdateBox from "../Components/UpdateBox";

const Dashboard = () => {
  const store = useSelector((state) => state.kanbanReducer);
  let data = store.boards
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDiv, setSelectedDiv] = useState("");
  const [subtaskArr, setSubtaskArr] = useState([]);
  const [storeChanged, setStoreChanged] = useState(false);
  const [boardName, setBoardName] = useState("");
  const getBoards = () => {
    dispatch(getBoardfun());
    setStoreChanged(false);
  }
  
  
  // -----------------------------Add Board------------------------------------------
  const addboard = async (name) => {
    if(name !=""){
      let obj = {
        name: name,
        task: [],
        user: "",
      };
      setBoardName("")
      console.log('obj:', obj)
      let result = await addboardApi(obj);
      getBoards()
    }
  };
  // -----------------------------Selecte Board---------------------------------------------
  const handleDivClick = (divid) => setSelectedDiv(divid);
  // -----------------------------Add Task to Selected Board---------------------------------------------
  let initialTask = {
    title: "",
    description: "",
    status: "",
    subtask: []
  }
  const [task, setTask] = useState(initialTask);
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const addTask = async () => {
    if(task != initialTask){
      setTask({...task,subtask:subtaskArr})
      let x = selectedDiv || data[0]._id
      let result = await addtaskApi(x,task);
      setSubtaskArr([])
      getBoards()
    }
  };
  // -----------------------------Overlay---------------------------------------------
  const OverlayOne = () => (
    <ModalOverlay
    bg='blackAlpha.200'
    backdropFilter='blur(2px) hue-rotate(50deg)'
    />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    // ---------------------------------------------------------------------------
    useEffect(() => {
      if(!storeChanged){
        getBoards()
        setStoreChanged(true);
      } 
    }, [subtaskArr]);
    // --------------------------------------
  if(store.loading){
    return (
      <Text>Loading......</Text>
    )
  }
  return (
    <div>
      <Box align="end" padding="10px 50px" border="1px solid blue">
        <Button onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Create New Tasks</Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Add Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={(e) => { e.preventDefault(); addTask(); }}
              style={{ margin: "auto"}}> 
                <Input m="5px 0px" onChange={handleChange} name="title" type="text" placeholder="Title" /> 
                <Input m="5px 0px" onChange={handleChange} name="description" type="text" placeholder="Description" />
                <Box border="1px solid #e6e6e6">
                  {subtaskArr && subtaskArr.map((el)=>(
                    <Subtask {...el}/>
                  ))}
                </Box>
                <SubtaskInput subtaskArr={subtaskArr} setSubtaskArr={setSubtaskArr} /> {/* Subtask Input */}
                <Select m="5px 0px" onChange={handleChange} name="status">
                  <option value='Todo'>Todo</option>
                  <option value='Doing'>Doing</option>
                  <option value='Done'>Done</option>
                </Select>
                <Button m="5px 0px" onClick={onClose} w="100%" type="submit">Add Task...</Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    <Box display="flex" border="1px solid red">
      <Box w="20%" border="1px solid blue">
        {data &&
          data.map((el) => (
            <Button key={el._id} onClick={()=>handleDivClick(el._id)} backgroundColor="#d8d6ff" color="black" display="flex" alignItems="center" justifyContent="center" height="50px" margin="10px 10px 10px 0px" w="85%" borderRadius="0px 20px 20px 0px" >
              <Text>{el.name}</Text>
            </Button>
          ))}
            <form onSubmit={(e)=>{e.preventDefault(); addboard(boardName)}} style={{ width: "100%", margin: "auto" }}>
              <Input onChange={(e)=>setBoardName(e.target.value)} value={boardName} focusBorderColor="none" name="boardName" type="text" placeholder="Board Name"/>
              <Button type="submit" w="100%">Add New Board</Button>
            </form>
      </Box>
            {data.length!=0 && <BoardData id={selectedDiv} />}
    </Box>
    </div>
  );
};

export default Dashboard;

//   // ------------------Board----------
//   const handleBoardChange=(e)=>{
//     setLog({...log,[e.target.name]:e.target.value})
// }
// const handleBoardSubmit=(e)=>{
//     dispatch(logFun(log))
//     e.preventDefault()
// }
//   // ------------------Task----------
//   const handleTaskChange=(e)=>{
//     setLog({...log,[e.target.name]:e.target.value})
// }
// const handleTaskSubmit=(e)=>{
//     dispatch(logFun(log))
//     e.preventDefault()
// }
//   // ------------------subtask----------
//   const handlesubtaskChange=(e)=>{
//     setLog({...log,[e.target.name]:e.target.value})
// }
// const handlesubtaskSubmit=(e)=>{
//     dispatch(logFun(log))
//     e.preventDefault()
// }
