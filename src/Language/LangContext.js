import React, { useContext, useState } from "react";
import english from "./English";

const LangContext = React.createContext({ lang: english, setLang: () => null });

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(english);

  const value = {
    lang,
    setLang
  };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
};
