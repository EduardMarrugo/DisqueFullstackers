$("#pokeAPI").on("click", function () {
  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/ditto",
  }).done(function (data) {
    $.ajax({
      method: "GET",
      url: data.forms[0].url,
    }).done(function (data) {
      console.log(data.sprites.front_default);
    });
  });
});

var array_pokemon = [
  "ivysaur",
  "bulbasaur",
  "lucario",
  "pikachu",
  "butterfree",
  "weedle",
  "beedrill",
];

for (let x = 0; x < array_pokemon.length; x++) {
  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + array_pokemon[x] + "",
  }).done(function (data) {
    var abilities = "";
    for (let index = 0; index < data.abilities.length; index++) {
      abilities =
        abilities +
        '<li class="list-group-item">' +
        data.abilities[index].ability.name +
        "</li>";
    }
    var card = `
    <div class="col-4">
        <div class="card mb-2" style="width: 100%" id="${data.name}">
            <img
                src=""
                class="card-img-top"
                id="${data.name}_img"
                alt="Foto de ${data.name}"
                width="100"
            />
            <div class="card-body">
                <h5 class="card-title" style = "text-transform:capitalize;" >                
                    ${data.name}  
                </h5>
                <ul class="list-group">
                    ${abilities}
                </ul>
            </div>
        </div>
    </div>
  `;

    //Aqui añadimos los col con las cartas al DOM
    $("#lista").append(card);

    $.ajax({
      method: "GET",
      url: data.forms[0].url,
    }).done(function (data) {
      var pokemon_photo = data.sprites.front_default;
      //Aqui las fotos a las cartas
      $(`#${data.name}_img`).attr("src", pokemon_photo);
    });
  });
}
