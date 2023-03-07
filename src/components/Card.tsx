// import { LoginForm } from "./Forms/Login";
// import { Header } from "./Header/Header";
import { useState } from 'react';
import {
  Box,
  Center,
  Input,
} from "@chakra-ui/react";
import { login } from "../services/login";
import { DButton } from './DButton';


export const Card = () => {

  const [ email, setEmail ] = useState<string>('');

  return (
    <Box background="FFFFFF" borderRadius="25px">        
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
