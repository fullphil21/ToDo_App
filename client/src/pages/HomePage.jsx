import React, { useEffect } from "react";
import ToDoForm from "../components/ToDoForm";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectToDos, setToDos } from "../../redux/slices/toDoSlice";
import ToDos from "../components/ToDos";

const HomePage = () => {
  const toDos = useSelector(selectToDos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/todos");
        dispatch(setToDos(data));
      } catch (err) {
        console.log(err);
        toast.error("Hoppla...da ist etwas schief gelaufen!");
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-8 mt-5">Aufgaben verwalten</h1>
      <ToDoForm />
      <ToDos toDos={toDos} />
    </div>
  );
};

export default HomePage;
