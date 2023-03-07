import { login } from "./login"
import { api } from '../api';

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'diegocar448@hotmail.com';

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('Deve exibir um erro caso o email seja inválido', async () =>  {
        await login('invalido@invalido.com')
        //await login('diegocar448@hotmail.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
})