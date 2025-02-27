import React from "react";
import {
  SafeContainer,
  HeaderImage,
  ContentContainer,
  Title,
  Description,
  AlreadyAccount,
  LoginText,
} from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleRegisterNavigate = () => {
    navigation.navigate("Register");
  };

  const handleLoginNavigate = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeContainer>
      <HeaderImage source={require("../../../assets/images/header.jpg")} />

      <ContentContainer>
        <Title>Bem-vindo ao SafeRoutes</Title>
        <Description>
          Garanta uma viagem segura e tranquila, com alertas em tempo real e
          monitoramento constante.
        </Description>

        <Button title="Começar Agora" onPress={handleRegisterNavigate} />

        <AlreadyAccount>
          Já possui uma conta?{" "}
          <LoginText onPress={handleLoginNavigate}>Faça Login</LoginText>
        </AlreadyAccount>
      </ContentContainer>
    </SafeContainer>
  );
};

export default Home;
