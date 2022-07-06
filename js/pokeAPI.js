
$.ajax({
  method: "GET",
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
})
  .done(function (data) {
    alert(data);
    console.log(data) // imprimimos la respuesta
  })
  .fail(function () {
    Swal.fire({
      title: "Error!",
      text: "Request Error",
      icon: "error"
    });
  })
  .always(function () {
    Swal.fire({
        title: "Succes",
        text: "Request Succes",
        icon: "info"
      });
  });
