import React, { useState, useRef } from "react";
import axios from 'axios';

import Register from "../../assets/img-register.png";

import Arrow from "../../assets/arrow.png";

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Register} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img class="arrow" alt="Seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}
export default App;