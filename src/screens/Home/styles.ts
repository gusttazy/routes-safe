import theme from "../../styles/theme";
import styled from "@emotion/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 55%;
  resize-mode: cover;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  margin-top: -30px; 
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 45px;
  color: ${theme.colors.verdePrincipal};
  text-align: center;
  margin-top: -60px; 
`;

export const Description = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: 13px;
  color: ${theme.colors.texto};
  text-align: center;
  width: 70%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const AlreadyAccount = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 13px;
  color: ${theme.colors.texto};
  margin-top: 20px; 
`;

export const LoginText = styled.Text`
  font-family: ${theme.fonts.semibold};
  color: ${theme.colors.verdePrincipal};
`;
