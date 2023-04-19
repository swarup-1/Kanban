import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logFun } from "../Redux/Authentication/user.actions";

const Login = () => {
  const obj = {
    email: "",
    password: "",
  };
  const [log, setLog] = useState(obj);
  const store = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (store.isAuth) {
      navigate("/");
    }
  }, [store.isAuth, navigate]);

  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(logFun(log));
    e.preventDefault();
  };
  return (
    <Box padding="50px">
      <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
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
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
