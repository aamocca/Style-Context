import { createContext, useState } from "react";

export const DarkContext = createContext();

export const DarkContextComponent = ({ children }) => {
  const [DarkContexts, setDarkContext] = useState("Estos ES DARK");
  const [DarkLigth, setDarkLigth] = useState({
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  });

  return (
    <DarkContext.Provider
      value={{ DarkContexts, setDarkContext, DarkLigth, setDarkLigth }}
    >
      {children}
    </DarkContext.Provider>
  );
};
