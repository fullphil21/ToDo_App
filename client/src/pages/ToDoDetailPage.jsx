import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const ToDoDetailPage = () => {
  const { id } = useParams();
  const [toDo, setToDo] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/todos/${id}`);
        setToDo(data);
      } catch (err) {
        console.log(err);
        toast.error("Es ist etwas schief gelaufen!");
      }
    };
    getData();
  }, [id]);

  if (!toDo) {
    return null;
  }

  return (
    <div>
      <h1 className="mb-5 text-5xl">ToDo bearbeiten</h1>
      <EditForm toDo={toDo} />
    </div>
  );
};

export default ToDoDetailPage;
