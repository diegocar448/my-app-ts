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
    const [ password, setPassword ] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password);        
        
        if(!loggedIn[0]){
            return alert("Email ou senha inválida")            
        }        

        setIsLoggedIn(true)
        changeLocalStorage(
            { 
                login: true,
                name: loggedIn[1].name,
                email: loggedIn[1].email,
                balance: loggedIn[1].balance,
            }
        )
        
        navigate("/conta/1")        
    }

    return (
        <Box padding='25px'>
            <Card>
                <Center>
                    <h1>Faça o Login</h1>          
                </Center>
                <Input placeholder="email" value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
                <Input placeholder="password" value={password} onChange={ (e) => setPassword(e.target.value) }></Input>
                <Center>
                    <DButton onClick={ () => validateUser(email, password)} />
                </Center>
            </Card>
        </Box>
    )
}

export default Home;