import styled from "@emotion/native";
import theme from "../../styles/theme";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.verdePrincipal};
  padding: 15px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 18px;
  color: ${theme.colors.textoBranco};
`;
