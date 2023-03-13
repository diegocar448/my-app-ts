import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}


describe('storage', () => {
    //olha e procura uma função para ver se ela esta sendo chamada
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no localStorage com a chave diobank', () => {    
        getAllLocalStorage()
        //verificamos apenas para ver se ela foi chamada
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)        
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})