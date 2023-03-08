
import { useContext } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom";

export const Login = async (email: string): Promise<void> => {
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate()
    const data: any = await api;    
    
    if(email !== data.email){
        return alert('Email inválido')
    }
    setIsLoggedIn(true)
    navigate(`/${data.id}`)
    alert(`Bem vindo ${email}!`)
}
