import {
  ChakraProvider,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor={"#121212"}>
        <Heading textAlign={"center"} fontFamily={"sans-serif"}>
          <Text
            bgGradient="linear(to-l, #ffffff, #ffffff)"
            bgClip="text"
            fontSize="16xl"
            fontWeight="extrabold"
          >
            Dio Bank
          </Text>
        </Heading>
      </Box>
    </ChakraProvider>
  );
};
