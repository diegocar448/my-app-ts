import {  
  Box,  
  Text,
  Center,  
} from "@chakra-ui/react";
import { useContext } from 'react';
import { AppContext } from "../AppContext";


export const Header = () => {
  const context = useContext(AppContext)
  //console.log('retorno do header', context)

  return (    
      <Box backgroundColor='orange'>        
        <Center>
          <Text fontSize='3xl'>
            Dio Bank
          </Text>
        </Center>        
      </Box>    
  );
};
