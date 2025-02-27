import styled from "@emotion/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.texto};
  font-size: 14px;
  margin-bottom: 5px;
`;

interface StyledTextInputProps {
  isFocused: boolean;
}

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.inputFundo};
  border-radius: 8px;
  padding: 10px;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.texto};
`;
