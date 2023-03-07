// import { LoginForm } from "./Forms/Login";
// import { Header } from "./Header/Header";
import { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Input,
} from "@chakra-ui/react";
import { login } from "../services/login";
import { DButton } from './DButton';
import { api } from '../api';

interface UserData{
  email: string
  password: string
  name: string
}


export const Card = () => {

  const [ email, setEmail ] = useState<string>('');
  const [ userData, setUserData ] = useState<null | UserData>();

  
  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    }
    getData();
  }, [])

  console.log(userData)

  return (
    <Box background="FFFFFF" borderRadius="25px">
        {/* { 
          userData === null || 
          userData === undefined ?  
          <h1>Loading...</h1> :
          <h1>Informações carregadas</h1>
        } */}
        <Center>
          <h1>Faça o Login</h1>          
        </Center>        
        <Input placeholder="email" value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
        <Input placeholder="password"></Input>
        <Center>
           <DButton onClick={ () => login(email)} />
        </Center>
    </Box>
  );
};
