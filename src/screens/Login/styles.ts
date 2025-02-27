import styled from "@emotion/native";
import theme from "../../styles/theme";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.verdePrincipal};
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.View`
  width: 90%;
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 30px 30px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.extrabold};
  font-size: 30px;
  color: ${theme.colors.verdePrincipal};
  text-align: center;
  margin-bottom: 10px;
`;

export const DontHaveAccount = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 13px;
  color: ${theme.colors.texto};
  margin-top: 20px;
  text-align: center;
`;

export const RegisterText = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.verdePrincipal};
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.texto};
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
`;
