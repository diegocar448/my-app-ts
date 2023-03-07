const conta = {
    email: 'diegocar448@hotmail.com',
    password: '123456',
    name:"Digo"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000);
})