import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreater } from "../store/ActionCreater";
import { bindActionCreators } from "redux";
export default function Zcompo() {
  const storeindata = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(actionCreater, dispatch);
  return (
    <>
      <h1>{storeindata}</h1>
      <button onClick={() => add(10)}>add</button>
      <button onClick={() => remove(10)}>remove</button>
    </>
  );
}
