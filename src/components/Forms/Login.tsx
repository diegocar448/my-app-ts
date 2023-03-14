import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Text,
  InputGroup,
  InputLeftElement  
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons"


import { AcceptButton } from "../Buttons/AcceptButton";
import { welcome } from "../../services/welcomeService";

export const LoginForm = () => {   
  
  return (
    <ChakraProvider>
      <Box
        minHeight="100vh"
        backgroundColor="#cdcdcd"
        padding="25px"
        fontFamily={"sans-serif"}
      >        
        <Center>
          <Box
            backgroundColor="#262d2a4d"
            borderRadius="15px"
            padding="15px"
            width={"100%"}
            marginTop={"40px"}
          >
            <Text textAlign={"center"} fontSize={"2xl"}>
              Acesso
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>                
                <EmailIcon color='gray.500' />
              </InputLeftElement>
              <Input placeholder="email" backgroundColor={'white'} />
            </InputGroup>
            <br />
            <InputGroup>
              <InputLeftElement pointerEvents='none'>                
                <LockIcon color='gray.500' />
              </InputLeftElement>
              <Input placeholder="password" backgroundColor={'white'} />
            </InputGroup>
            <br />
            
            <AcceptButton click={welcome} />
            
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};
