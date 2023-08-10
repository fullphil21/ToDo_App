import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { selectToDos } from "../../redux/slices/toDoSlice";
import Modal from "./Modal";
import axios from "axios";
import { useSelector } from "react-redux";

//Kommentar zum Zurückspringen

const ToDoItem = ({ _id, title, description, status }) => {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className={`w-full flex flex-col px-3 py-2 rounded-xl ${
        status ? "bg-lime-400 text-slate-800" : " bg-sky-700" // Hintergrundfarbe bei erledigten Aufgaben
      }`}
    >
      {openModal && (
        <Modal id={_id} title={title} onClose={() => setOpenModal(false)} />
      )}
      <div className="w-full flex items-center justify-between">
        <h3 className="text-[20px]">
          {title}
          <span className="ml-4 text-[10px] align-middle">
            {status && "- erledigt -"}
          </span>
        </h3>
        <div className="flex items-center space-x-3">
          <AiFillEdit
            onClick={() => navigate(`/todo/${_id}`)}
            className={`h-5 w-5 cursor-pointer  ${
              status ? " text-slate-800" : " text-orange-400"
            }`}
          />
          <AiFillDelete
            onClick={() => setOpenModal(true)}
            className={`h-5 w-5 cursor-pointer text-red-400 ${
              status ? " text-slate-800" : " text-red-400"
            }`}
          />
        </div>
      </div>
      <p
        className={`text-[12px]  italic ${
          status ? " text-slate-800" : " text-gray-300"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default ToDoItem;
