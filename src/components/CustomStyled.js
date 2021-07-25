import styled from "styled-components";
import React from "react";

export const Container = styled.View`
  background-color: ${props => props.theme.body};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const OpacityAM = styled.TouchableOpacity`
  padding: 2%;
  background-color: ${props => props.theme.button.body};
  border-radius: 20px;
`;

export const TextAM = styled.Text`
  color: ${props => props.theme.text};
`

export const ButtonTextAM = styled.Text`
  color: ${props => props.theme.button.text};
`

export const ButtonAM = ({onPress, text}) =>(
  <OpacityAM onPress={onPress}>
    <ButtonTextAM>
      {text}
    </ButtonTextAM>
  </OpacityAM>
);
