interface IDIoBank{
    login: boolean,
    name: string,
    email: string,
    balance: string
}

const dioBank = {
    login: false,
    name: '',
    email: '',
    balance: '',
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank) => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
}