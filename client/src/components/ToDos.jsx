import React from "react";
import ToDoItem from "./ToDoItem";

const ToDos = ({ toDos }) => {
  return (
    <div className="flex flex-col space-y-3 mt-5 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 md:space-y-0">
      {toDos.map((toDo) => (
        <ToDoItem key={toDo._id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDos;
