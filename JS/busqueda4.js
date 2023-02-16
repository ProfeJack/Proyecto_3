$(document).ready(function() {
  $("#boton4").click(function() {
    $("#contenidopri").hide();
    $("#origen").hide();
    $("#especies").hide();
    $("#personajes2").show()
  })

  $("#buscar_perso").click(function(e) {
    e.preventDefault();
    var persona = $("#character").val()

    if (persona) {
      buscar_personaje(persona);
    }
  });

  $("#borrar_perso").click(function(e) {
    e.preventDefault();
    $("#contenedor_p4").empty();
    $('#character').val('');
  });



  function buscar_personaje(persona) {
    $.ajax({
      type: 'GET',
      url: `https://rickandmortyapi.com/api/character/${persona}`,
      dataType: "json",
      async: true,
      success: function(dato4) { manejar_personajes(dato4) },
    })
  }

  function manejar_personajes(dato4) {
    let div = $("<div></div>");
    div.addClass("tarjeta");

    let number = $("<h2></h2>");
    number.addClass("titulo");
    number.append(dato4.id);
    div.append(number);

    let nombre4 = $("<h1></h1>");
    nombre4.addClass("titulo");
    nombre4.append(dato4.name);
    div.append(nombre4);

    let img = $("<img></img>");
    img.attr("src", dato4.image);
    img.addClass("fotos");
    div.append(img);

    let estado = $("<h2></h2>");
    estado.addClass("titulo");
    estado.append(dato4.status);
    div.append(estado);

    let episodios = $("<h3></h3>");
    episodios.addClass("titulo");
    episodios.append("Este personaje aparece en " + dato4.episode.length + " episodios");
    div.append(episodios);


    $('#contenedor_p4').append(div);
  }


})