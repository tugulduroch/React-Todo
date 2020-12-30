import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "Үргэлжилж байна 🚧" : "Дууссан ✅"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "Дуусав" : "Үргэлжлүүлэх"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}