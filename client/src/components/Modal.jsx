import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToDos, setToDos } from "../../redux/slices/toDoSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

const Modal = ({ id, title, onClose }) => {
  const toDos = useSelector(selectToDos);
  const dispatch = useDispatch();

  const deleteToHandler = async () => {
    const newToDos = toDos.filter((toDo) => toDo._id !== id);
    const { data } = await axios.delete(`/todos/${id}`);

    if (data.status) {
      toast.success(data.message);
    }
    dispatch(setToDos(newToDos));
  };

  return (
    <div className="fixed bg-gray-800 bg-opacity-90 h-screen w-screen inset-0 z-20 flex items-center justify-center">
      <div className="px-5 py-3 rounded-xl flex flex-col space-y-3 bg-slate-900 font-extralight">
        <h1>Möchtest du "{title}" löschen?</h1>
        <div className="flex items-center gap-x-3">
          <button
            onClick={deleteToHandler}
            className="w-1/2 bg-red-500 hover:opacity-70 rounded-xl px-3 py-2"
          >
            Ja
          </button>
          <button
            onClick={onClose}
            className="w-1/2 bg-blue-500 hover:opacity-70 rounded-xl px-3 py-2"
          >
            Zurück
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
