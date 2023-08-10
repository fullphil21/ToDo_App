import React, { useState } from "react";

const AboutToDo = () => {
  const [headline, setHeadline] = useState("Organisiere endlich dein Leben 😃");

  const [underline, setUnderline] = useState(
    "Werde organisiert und ausgeglichen mit Todo App. Die Nr. 1 unter den Apps für To-do-Listen.",
  );

  return (
    <div className="pt-4 flex flex-col space-y-4">
      <h1 className="text-5xl mb-5">{headline}</h1>
      <p className="text-2xl">{underline}</p>
      <div className="text-l px-10 flex flex-col space-y-2">
        <p>
          Willkommen zur ToDo App! Unsere App wurde entwickelt, um dir bei der
          Organisation deiner Aufgaben zu helfen.
        </p>
        <p>
          Unsere Mission ist es, dir ein einfaches und effizientes Werkzeug zur
          Verfügung zu stellen, mit dem du deine Aufgaben verfolgen und
          verwalten kannst.
        </p>
        <p>
          Die ToDo App ermöglicht es dir, Aufgaben hinzuzufügen, zu bearbeiten
          und als erledigt zu markieren. Du kannst deine Aufgabenliste immer im
          Blick behalten und sicherstellen, dass du nichts vergisst.
        </p>
        <p>
          Wir haben die App so gestaltet, dass sie benutzerfreundlich und
          intuitiv ist, damit du dich auf das Wesentliche konzentrieren kannst -
          deine Aufgaben zu erledigen!
        </p>
        <p>Vielen Dank, dass du unsere ToDo App verwendest.</p>
        <p>Das ToDo App Team</p>
      </div>
    </div>
  );
};

export default AboutToDo;
