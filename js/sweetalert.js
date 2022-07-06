var boton = document.getElementById("Pruebas");
boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
});