import {
  Box,  
} from "@chakra-ui/react";


export const Card = ({ children }: any) => {
  return (
    <Box background="FFFFFF" borderRadius="25px">
      { children }      
    </Box>
  );
};
