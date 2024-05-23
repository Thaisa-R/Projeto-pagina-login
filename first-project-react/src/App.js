import React, {useState, useRef} from "react";

import axios from 'axios';

import Register from "./assets/img-register.png";

import Arrow from "./assets/arrow.png";

import {Container, H1, Image, ContainerItens, InputLabel, Input, Button, User} from "./styles";


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users", 
  {
    name: inputName.current.value, 
    age: inputAge.current.value,
  });

    console.log(data)
   // setUsers([...users, 
   //   { id: Math.random(), 
   //     name: inputName.current.value, 
    //    age: inputAge.current.value, 
    //  },
    // ]);
 // }
  }
  function deleteUser(userId) {
   const addNewUsers = users.filter((user) => user.id !== userId);
   
   setUsers(addNewUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Register}/>

      <ContainerItens> 
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img class="arrow" alt="Seta" src={Arrow} />
        </Button>

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
      </ContainerItens>
    </Container>
  );
}
export default App;