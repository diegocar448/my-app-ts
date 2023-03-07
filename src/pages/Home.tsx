import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { DButton } from "../components/DButton";
import { useState } from "react";
import { login } from "../services/login";

const Home = () => {
    const [ email, setEmail ] = useState<string>('');

    return (
        <Box padding='25px'>
            <Card>
                <Center>
                    <h1>Faça o Login</h1>          
                </Center>        
                <Input placeholder="email" value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
                <Input placeholder="password"></Input>
                <Center>
                    <DButton onClick={ () => login(email)} />
                </Center>
            </Card>
        </Box>
    )
}

export default Home;