import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectToDos } from "../../redux/slices/toDoSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditForm = ({ toDo }) => {
  const toDos = useSelector(selectToDos);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (form) => {
    try {
      const { data } = await axios.put(`/todos/${toDo._id}`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
      reset();
    } catch (err) {
      toast.error("Hoppla...da ist etwas schief gelaufen!");
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        defaultValue={toDo?.title}
        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 text-gray-200 placeholder:italic placeholder:text-sm outline-none"
        placeholder="Aufgabe eintragen ..."
        type="text"
        {...register("title", {
          required: true,
          value: toDo?.title,
        })}
      />

      <textarea
        defaultValue={toDo?.description}
        className="w-full h-20 px-3 py-2 text-xs rounded-xl bg-slate-800 text-gray-200 placeholder:italic placeholder:text-sm outline-none"
        placeholder="Beschreibung eintragen ..."
        type="text"
        {...register("description", {
          required: true,
          value: toDo?.description,
        })}
      />

      <div className="flex items-center space-x-3">
        <input
          className="block"
          type="checkbox"
          {...register("status", {
            value: toDo?.status,
          })}
          defaultChecked={toDo?.status}
        />
        <span className="text-xs">(Erledigt / Nicht erledigt)</span>
      </div>
      <button
        className="w-fit bg-blue-700 text-white text-sm px-3 py-2 rounded-xl"
        type="submit"
      >
        Speichern
      </button>
    </form>
  );
};

export default EditForm;
