import React, {useContext, useState} from "react";
import {darkTheme} from "../Themes";
import english from "../Language/English";

const SettingsContext = React.createContext({});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [lang, setLang] = useState(english);

  const settings = {
    theme,
    setTheme,
    lang,
    setLang
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
};
