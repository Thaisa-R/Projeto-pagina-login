import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import Avatar from "../../assets/img-avatar.png";

import Arrow from "../../assets/arrow.png";

import { Container, H1, Image, ContainerItens, Button, User } from "./styles";


function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);
  
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <i class="bi bi-trash3" alt="lata-de-lixo"></i>
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
        <img class="arrow" alt="Seta" src={Arrow} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>
  );
}
export default Users;
