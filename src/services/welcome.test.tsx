
import { welcome } from "./welcomeService";

describe('login', () => {

   // const mockAlert = jest.fn()
    // Swal.fire = mockAlert
    jest.mock("sweetalert2", () => ({
        fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
     }));

    it('Deve exibir um alert com boas vindas', () => {
        welcome()
        // expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo!')
        jest.mock("sweetalert2", () => ({
            fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
         }));
    })
})