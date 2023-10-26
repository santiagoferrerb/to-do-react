import React from "react";
import { ToDoContext } from "../ToDoContext";

function ToDoCounter() {
  const {
    completedToDos,
    totalToDos,
  } = React.useContext(ToDoContext);

  return (
      <h1 style={{
          fontSize: '24px',
          textAlign: 'center',
          margin: 0,
          padding: '48px',
      }}>
        {totalToDos !== completedToDos ? `Has Completado ${completedToDos} de ${totalToDos} To Do's` : '🎉Felicidades Has Completado Todas Tus Tareas🎉'}
      </h1>
  );
};

export {ToDoCounter};