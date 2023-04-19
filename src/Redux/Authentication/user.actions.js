import { addboardApi, logApi, regApi } from "../api";
import { error, login, register } from "./user.actiontype";

export const regFun = (data) => async (dispatch) => {
  try {
    let main = await regApi(data);
    dispatch({ type: register });
  } catch (err) {
    console.log("err:", err);
    dispatch({ type: error });
  }
};
export const logFun = (data) => async (dispatch) => {
  console.log('data:', data)
  try {
    let res = await logApi(data);
    let token = res.data.token;
    console.log("token:", token);
    if (token) {
      localStorage.setItem("token", token);
      dispatch({ type: login });
    } else {
      alert("Wrong Credentials... \nLogin Again");
    }
  } catch (err) {
    console.log("err:", err);
    dispatch({ type: error });
  }
};
