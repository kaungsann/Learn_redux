import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreater } from "./store/ActionCreater";
import React, { useRef } from "react";
import Zcompo from "./components/Zcompo";
function App() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const storeData = useSelector((state) => state.account);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { add, remove, insert, drop } = bindActionCreators(
    actionCreater,
    dispatch
  );
  const adduser = (e) => {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };
    insert(user);
    nameRef.current.value = "";
    phoneRef.current.value = "";
  };
  return (
    <>
      <h1>{storeData}</h1>
      <button onClick={() => add(30)}>add</button>
      <button onClick={() => remove(30)}>remove</button>
      <hr />
      {users.map((user) => (
        <p onClick={() => drop(user)}>
          {user.name} : {user.phone}
        </p>
      ))}
      <form onSubmit={adduser}>
        <input type="name" ref={nameRef} />
        <input type="tel" ref={phoneRef} />
        <button type="submit">add user</button>
      </form>
      <Zcompo />
    </>
  );
}

export default App;
