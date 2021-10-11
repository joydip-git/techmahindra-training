import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Button, Label, Input } from "reactstrap";
import { addTodoOffline } from "../redux/actions/app";

function Home() {
  useSelector(
    state => {
      return {
        todoItem: state.todoState.todoItem,
        status: state.todoState.status
      };
    },
    shallowEqual);

  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addToDoFunc = e => {
    dispatch(addTodoOffline(todo));
  };

  return (
    <>
      <h1>Home Screen</h1>
      <Label for="text">Add an Item</Label>
      <Input
        type="text"
        name="text"
        id="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Enter item name"
      />
      <Button onClick={addToDoFunc}>Add</Button>
    </>
  );
}

export default Home;
