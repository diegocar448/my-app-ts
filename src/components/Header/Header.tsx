import {  
  Box,  
  Text,
  Center,
  Flex,
  Spacer,
  Button,  
} from "@chakra-ui/react";
import { useContext } from 'react';
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";


export const Header = () => {  
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext)
  const {isLoggedIn} = useContext(AppContext)
  console.log(isLoggedIn)
  const logout = () => {
    setIsLoggedIn(false)
    navigate('/');
  }
  

  return (    
      <Flex backgroundColor='orange' padding="5px">
        <Box>        
          <Center>
            <Text fontSize='3xl'>
              Dio Bank
            </Text>
          </Center>
        </Box>
        
        {
          isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={ () => logout() }
            >
              Sair
            </Button>
          </> 
          )
        }
      </Flex>
  );
};
