
$.ajax({
  method: "GET",
  url: "https://pokeapRi.co/api/v2/pokemon/ditto",
})
  .done(function (data) {
    console.log(data) // imprimimos la respuesta
  })
  .fail(function () {
    Swal.fire({
      title: "Error!",
      text: "Request Error",
      icon: "error",
      toast: true,
      position: "top-end"
    });
  });
