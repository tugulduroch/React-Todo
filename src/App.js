import './App.css';
import TextField from '@material-ui/core/TextField';
import {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from "./Todo";

function App() {
  const [todos , setTodos] = useState([]);
  const [todoInput , setTodo] = useState("");

  useEffect(() => {
    getTodos();
  }, []) // blank to run only first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapShot){
      setTodos (
        querySnapShot.docs.map((doc) => ({
          id : doc.id,
          todo: doc.data().Todo,
          inprogress: doc.data().inprogress
        }))
      );
    })
  }
  

  function addToDo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress : true,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      Todo : todoInput,
    });

    setTodo("");

  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>Хийх зүйлсийн жагсаалт 😃</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Хийх зүйлээ бичнэ үү"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addToDo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>

        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
