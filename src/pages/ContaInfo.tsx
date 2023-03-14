import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { useContext } from "react"

interface UserInformation {
  name: string;
  email: string;
  balance: string;
  // outras propriedades que o objeto "informationsUser" deve ter
}

const ContaInfo = () => {

  const user = useContext(AppContext) as any; // especifica o tipo como UserInformation
  console.log(user.informationsUser.name);

  return (
    <>
      <Text fontSize='3xl' fontWeight='bold'>
        Informações da conta         
      </Text>
      <p>Nome: {user.informationsUser.name}</p>
      <p>Email: {user.informationsUser.email}</p>
      <p>Valor: {user.informationsUser.balance}</p>
      <Link to='/conta/1'>
        <Text fontSize='xl'>
          Pagina da conta
        </Text>
      </Link>
    </>
  )
}

export default ContaInfo;