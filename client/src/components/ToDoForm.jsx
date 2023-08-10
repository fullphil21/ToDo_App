import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToDo, selectToDos } from "../../redux/slices/toDoSlice";
import axios from "axios";
import toast from "react-hot-toast";

const ToDoForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const watchTitle = watch("title", "");

  const onSubmitHandler = async (form) => {
    try {
      //Zur Datenbank hinzufügen
      const { data } = await axios.post("/todos", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      //Zum globalen Zustandsmanagement hinzufügen
      dispatch(addToDo(data));
      //Benachrichtung für den Nutzer
      toast.success("Du hast eine neue Aufgabe hinzugefügt!");
      reset();
    } catch (err) {
      toast.error("Es ist etwas schief gelaufen!");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 text-gray-200 placeholder:italic placeholder:text-sm outline-none"
        placeholder="Aufgabe eintragen ..."
        type="text"
        {...register("title", {
          required: true,
        })}
      />
      {watchTitle && (
        <textarea
          className="w-full h-20 px-3 py-2 text-xs rounded-xl bg-slate-800 text-gray-200 placeholder:italic placeholder:text-sm outline-none"
          placeholder="Beschreibung eintragen ..."
          type="text"
          {...register("description", {
            required: true,
          })}
        />
      )}
      <input
        className="hidden"
        type="text"
        defaultValue={false}
        {...register("status", {
          value: false,
        })}
      />
      <button
        className="w-fit bg-blue-700 text-white text-sm px-3 py-2 rounded-xl"
        type="submit"
      >
        Hinzufügen
      </button>
    </form>
  );
};

export default ToDoForm;
