import { Login } from "./login"

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({        
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

//mockar navigate do react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {
  
    const mockEmail = 'diegocar448@hotmail.com';

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        await Login(mockEmail)        
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })    

    it('Deve exibir um erro caso o email seja inválido', async () =>  {
        await Login('invalido@invalido.com')
        //await login('diegocar448@hotmail.com')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled()
    })
})