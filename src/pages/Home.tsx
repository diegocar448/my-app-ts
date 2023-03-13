import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { DButton } from "../components/DButton";
import { login } from "../services/login";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string) => {
        const loggedIn = await login(email);

        if(!loggedIn){
            return alert("Email inválido")            
        }
        

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate("/conta/1")
        
        
    }

    return (
        <Box padding='25px'>
            <Card>
                <Center>
                    <h1>Faça o Login</h1>          
                </Center>
                <Input placeholder="email" value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
                <Input placeholder="password"></Input>
                <Center>
                    <DButton onClick={ () => validateUser(email)} />
                </Center>
            </Card>
        </Box>
    )
}

export default Home;