import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { regFun } from "../Redux/Authentication/user.actions";

const Register = () => {
  const store = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const obj = {
    name: "",
    email: "",
    password: "",
  };
  const [reg, setReg] = useState(obj);

  const handleChange = (e) => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(regFun(reg));
    e.preventDefault();
    navigate("/login");
  };
  return (
    <Box padding="50px">
      <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
        <Input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Full Name"
        />
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Register;
