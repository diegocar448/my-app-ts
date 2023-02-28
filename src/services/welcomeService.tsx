import Swal from "sweetalert2";

export const welcome = (): void => {
  Swal.fire({
    confirmButtonColor: "#E4105D",
    title: "Seja bem vindo!",
    position: "top",
  });
};
