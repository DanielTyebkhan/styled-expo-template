import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from "./src/res/Themes";
import {ButtonAM, Container, TextAm} from "./src/components/CustomStyled";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);
  const swapTheme = () => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextAm>Press Button to Change Theme</TextAm>
        <ButtonAM text={`Current Theme: ${theme.name}`} onPress={swapTheme} />
      </Container>
    </ThemeProvider>
  );
}


