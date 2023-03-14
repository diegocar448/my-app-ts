const conta = {
    email: 'diegocar448@hotmail.com',
    password: '123456',
    name:"Diego",
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000);
})