import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-3xl">Tut mir Leid, da bist du falsch abgebogen 😁</h3>

      <Link
        className="w-fit px-2 py-1 bg-blue-500 hover:text-white font-bold rounded-2xl"
        to="/"
      >
        Zurück zur Hauptseite
      </Link>
    </div>
  );
};

export default NotFound;
