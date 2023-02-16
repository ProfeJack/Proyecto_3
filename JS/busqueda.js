$(document).ready(function() {
  $("#boton3").click(function() {
    $("#contenidopri").hide();
    $("#especies").hide();
    $("#personajes2").hide();
    $("#origen").show()
  })

  $("#buscar").click(function(e) {
    e.preventDefault();
    var place = $("#lugar").val();

    if (place) {
      buscar_lugar(place);
    }
  });

  $("#borrar").click(function(e) {
    e.preventDefault();
    $("#contenedor_p").empty();
    $('#lugar').val('');
  });



  function buscar_lugar(place) {
    $.ajax({
      type: 'GET',
      url: `https://rickandmortyapi.com/api/location/${place}`,
      dataType: "json",
      async: true,
      success: function(dato) { manejar_lugares(dato) },
    })
  }

  function manejar_lugares(dato) {
    let div = $("<div></div>");
    div.addClass("tarjeta");

    let nombre = $("<h3></h3>");
    nombre.addClass("titulo");
    nombre.append(dato.name);
    div.append(nombre);

    let div2 = $("<div></div>");
    div2.addClass("personajes");

    for (var i = 0; i < dato.residents.length; i++) {
      $.ajax({
        type: 'GET',
        url: dato.residents[i],
        dataType: "json",
        async: true,
        success: function(personaje) {
          let div3 = $("<div></div>");
          div3.addClass("tarjeta");

          let nombre2 = $("<h3></h3>");
          nombre2.addClass("titulo");
          nombre2.append(personaje.name);
          div3.append(nombre2);

          let img = $("<img></img>");
          img.attr("src", personaje.image);
          img.addClass("fotos");
          div3.append(img);

          div2.append(div3)
        },
      })

    }
    $('#contenedor_p').append(div);
    $('#contenedor_p').append(div2);
  }

  $("#logo").click(function() {
    $("#contenidopri").show();
    $("#especies").hide();
    $("#personajes2").hide();
    $("#origen").hide()
  })
})

