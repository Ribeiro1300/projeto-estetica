/* eslint-disable no-undef */
import { Container, MainTitle, FormWrapper, Inputs, Buttons } from "../styles/Styles";
import { useNavigate } from "react-router";
import React, { useState } from "react";
//import axios from "axios";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // async function userLogin(event) {
  //   event.preventDefault();
  //   try {
  //     const body = { email: email, password: password };

  //     const result = await axios.post(process.env.REACT_APP_BASE_URL + "/userLogin", body);

  //     if (result.status == 201) {
  //       localStorage.setItem("token", result.data);
  //       navigate("/records");
  //     }
  //   } catch (error) {
  //     alert("Senha errada");
  //   }
  // }

  return (
    <Container>
      <MainTitle />
      <FormWrapper onSubmit={() => navigate("/records")}>
        <Inputs
          onChange={(elem) => {
            setPassword(elem.target.value);
          }}
          placeholder="Senha"
          type="password"
          value={password}
          required
        ></Inputs>
        <Buttons type="submit">Entrar</Buttons>
      </FormWrapper>
    </Container>
  );
}
