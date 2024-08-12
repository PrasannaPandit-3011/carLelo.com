import { useState } from "react";
import DarkModeContext from "./DarkModeContext";

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};

export default DarkModeContextProvider;
