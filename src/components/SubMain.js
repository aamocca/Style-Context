import React, { useContext, useEffect } from "react";

import { DarkContext } from "../contexts/DarkModeContext";

const SubMain1 = () => {
  const titulo = useContext(DarkContext);

  useEffect(() => console.log(titulo), []);

  return (
    <div>
      <h1 style={titulo.DarkLigth}>
        El nombre recibido es: {titulo.DarkContexts}
      </h1>
      <button onClick={() => titulo.setDarkContext("ligth")}>
        Cambiar titulo
      </button>
      <button
        onClick={() =>
          titulo.setDarkLigth({
            color: "black",
            fontSize: 50,
            fontWeight: "bold",
          })
        }
      ></button>
    </div>
  );
};

export default SubMain1;
