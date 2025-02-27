import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import {
  SafeContainer,
  CardContainer,
  Title,
  SubTitle,
  DontHaveAccount,
  RegisterText,
} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => console.log("Login pressionado");
  const handleBack = () => navigation.goBack();
  const handleRegisterNavigate = () => navigation.navigate("Register");

  return (
    <SafeContainer>
      <TouchableOpacity
        onPress={handleBack}
        style={{ position: "absolute", top: 60, left: 20, zIndex: 10 }}
      >
        <ArrowLeftIcon size={30} color="#fff" />
      </TouchableOpacity>

      <CardContainer>
        <Title>Faça Login</Title>
        <SubTitle>Preencha as informações abaixo</SubTitle>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Entrar" onPress={handleLogin} />
        <DontHaveAccount>
          Não possui uma conta?{" "}
          <RegisterText onPress={handleRegisterNavigate}>
            Cadastrar-se
          </RegisterText>
        </DontHaveAccount>
      </CardContainer>
    </SafeContainer>
  );
};

export default Login;
