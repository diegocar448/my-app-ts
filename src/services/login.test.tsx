import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({        
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))

//mockar navigate do react-router-dom
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {
  
    const mockEmail = 'diegocar448@hotmail.com';

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail)        
        expect(response).toBeTruthy()        
    })    

    it('Deve exibir um erro caso o email seja inválido', async () =>  {
        const response = await login('invalido@invalido.com')        
        expect(response).toBeFalsy();
        
    })
})