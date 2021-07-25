import React from 'react';
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from "./src/Themes";
import {ButtonAM, Container, TextAM} from "./src/components/CustomStyled";
import english from "./src/Language/English";
import spanish from "./src/Language/Spanish";
import {SettingsProvider, useSettings} from "./src/Context/SettingsProvider";

export default function App() {
  return (
    <SettingsProvider>
      <MainComponent />
    </SettingsProvider>
  );
}

const MainComponent = () => {
  const { lang, setLang, theme, setTheme } = useSettings();
  const swapTheme = () => {
    setTheme(theme.name === 'Dark' ? lightTheme : darkTheme)
  };
  const swapLang = () => {
    setLang(lang === english ? spanish : english);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextAM>{lang.pressButton}</TextAM>
        <ButtonAM text={`Current Theme: ${theme.name}`} onPress={swapTheme} />
        <ButtonAM text={`Current Language: ${lang.name}`} onPress={swapLang} />
      </Container>
    </ThemeProvider>
  );
}


