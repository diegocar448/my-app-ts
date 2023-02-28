import {
  Center,
  Button,
} from "@chakra-ui/react";



interface props {
 click : () => void;
}

export const AcceptButton = ({click}: props) => {
  return (
    <Center>
      <Button
        onClick={click}
        backgroundColor={"#000000d1"}
        _hover={{
          background: "#00000087",
          color: "white",
        }}
        color={"#FFFFFF"}
        size="sm"
        width="100%"
        marginTop="5px"
        borderRadius="50px"
      >
        Entrar
      </Button>
    </Center>
  );
};
