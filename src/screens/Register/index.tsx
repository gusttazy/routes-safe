import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRegister = () => console.log("Cadastro pressionado");
  const handleBack = () => navigation.goBack();

  return (
    <SafeContainer>
      <TouchableOpacity
        onPress={handleBack}
        style={{ position: "absolute", top: 60, left: 20, zIndex: 10 }}
      >
        <ArrowLeftIcon size={30} color="#fff" />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, width: "100%" }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <CardContainer>
            <Title>Cadastre-se</Title>
            <SubTitle>Preencha as informações abaixo</SubTitle>
            <View style={{ width: "100%" }}>
              <Input
                label="Nome"
                value={firstName}
                onChangeText={setFirstName}
              />
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
              <Input
                label="Confirmar Senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
            <Button title="Cadastrar" onPress={handleRegister} />
            <DontHaveAccount>
              Já possui uma conta?{" "}
              <RegisterText onPress={() => navigation.navigate("Login")}>
                Entrar
              </RegisterText>
            </DontHaveAccount>
          </CardContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeContainer>
  );
};

export default Register;