$(document).ready(function() {
  $("#boton2").click(function() {
    $("#contenidopri").hide();
    $("#origen").hide();
    $("#personajes2").hide();
    $("#informacion").hide();
    $("#especies").show();
  })

  var personajes_humanos = []
  var personajes_h_imagen = []
  var personajes_h_genero = []

  $("#humanos").click(function() {
    $("#informacion").show();
    $("#especies").hide();
    for (var i = 0; i < datos_rickmorty.results.length; i++) {
      if (datos_rickmorty.results[i].species == "Human") {
        personajes_humanos.push(datos_rickmorty.results[i].name)
        personajes_h_imagen.push(datos_rickmorty.results[i].image)
        personajes_h_genero.push(datos_rickmorty.results[i].gender)

        let div = $("<div></div>");
        div.addClass("tarjeta");

        let nombre = $("<h1></h1>");
        nombre.addClass("titulo");
        nombre.append(datos_rickmorty.results[i].name);
        div.append(nombre);

        let img = $("<img></img>");
        img.attr("src", datos_rickmorty.results[i].image);
        img.addClass("fotos");
        div.append(img);

        let genero = $("<h2></h2>");
        genero.addClass("titulo");
        genero.append(datos_rickmorty.results[i].gender);
        div.append(genero);


        $('#informacion').append(div);
      }
    }
  })
})

$(document).ready(function() {
  $("#boton2").click(function() {
    $("#contenidopri").hide();
    $("#origen").hide();
    $("#personajes2").hide();
    $("#informacion").hide();
    $("#especies").show();
  })

  var personajes_vampiros = []
  var personajes_v_imagen = []
  var personajes_v_genero = []

  $("#vampiros").click(function() {
    $('#informacion').empty();
    $("#informacion").show();
    $("#especies").hide();
    for (var i = 0; i < datos_rickmorty.results.length; i++) {
      if (datos_rickmorty.results[i].species == "Vampire") {
        personajes_vampiros.push(datos_rickmorty.results[i].name)
        personajes_v_imagen.push(datos_rickmorty.results[i].image)
        personajes_v_genero.push(datos_rickmorty.results[i].gender)

        let div = $("<div></div>");
        div.addClass("tarjeta");

        let nombre = $("<h1></h1>");
        nombre.addClass("titulo");
        nombre.append(datos_rickmorty.results[i].name);
        div.append(nombre);

        let img = $("<img></img>");
        img.attr("src", datos_rickmorty.results[i].image);
        img.addClass("fotos");
        div.append(img);

        let genero = $("<h2></h2>");
        genero.addClass("titulo");
        genero.append(datos_rickmorty.results[i].gender);
        div.append(genero);


        $('#informacion').append(div);
      }
    }
  })



})

var personajes_desconocido = []
var personajes_d_imagen = []
var personajes_d_genero = []

$("#desconocido").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "unknown") {
      personajes_desconocido.push(datos_rickmorty.results[i].name)
      personajes_d_imagen.push(datos_rickmorty.results[i].image)
      personajes_d_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }

})

var personajes_animal = []
var personajes_a_imagen = []
var personajes_a_genero = []

$("#animal").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Animal") {
      personajes_animal.push(datos_rickmorty.results[i].name)
      personajes_a_imagen.push(datos_rickmorty.results[i].image)
      personajes_a_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})

var personajes_cronenberg = []
var personajes_c_imagen = []
var personajes_c_genero = []

$("#cronenberg").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Cronenberg") {
      personajes_cronenberg.push(datos_rickmorty.results[i].name)
      personajes_c_imagen.push(datos_rickmorty.results[i].image)
      personajes_c_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})

var personajes_humanoides = []
var personajes_hu_imagen = []
var personajes_hu_genero = []

$("#humanoides").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Humanoid") {
      personajes_humanoides.push(datos_rickmorty.results[i].name)
      personajes_hu_imagen.push(datos_rickmorty.results[i].image)
      personajes_hu_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})

var personajes_aliens = []
var personajes_al_imagen = []
var personajes_al_genero = []

$("#aliens").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Alien") {
      personajes_aliens.push(datos_rickmorty.results[i].name)
      personajes_al_imagen.push(datos_rickmorty.results[i].image)
      personajes_al_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})

var personajes_mitologico = []
var personajes_m_imagen = []
var personajes_m_genero = []

$("#mitologico").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Mytholog") {
      personajes_mitologico.push(datos_rickmorty.results[i].name)
      personajes_m_imagen.push(datos_rickmorty.results[i].image)
      personajes_m_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})


var personajes_robot = []
var personajes_r_imagen = []
var personajes_r_genero = []

$("#robot").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Robot") {
      personajes_robot.push(datos_rickmorty.results[i].name)
      personajes_r_imagen.push(datos_rickmorty.results[i].image)
      personajes_r_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})



var personajes_enfermedad = []
var personajes_e_imagen = []
var personajes_e_genero = []

$("#enfermedad").click(function() {
  $('#informacion').empty();
  $("#informacion").show();
  $("#especies").hide();
  for (var i = 0; i < datos_rickmorty.results.length; i++) {
    if (datos_rickmorty.results[i].species == "Disease") {
      personajes_enfermedad.push(datos_rickmorty.results[i].name)
      personajes_e_imagen.push(datos_rickmorty.results[i].image)
      personajes_e_genero.push(datos_rickmorty.results[i].gender)

      let div = $("<div></div>");
      div.addClass("tarjeta");

      let nombre = $("<h1></h1>");
      nombre.addClass("titulo");
      nombre.append(datos_rickmorty.results[i].name);
      div.append(nombre);

      let img = $("<img></img>");
      img.attr("src", datos_rickmorty.results[i].image);
      img.addClass("fotos");
      div.append(img);

      let genero = $("<h2></h2>");
      genero.addClass("titulo");
      genero.append(datos_rickmorty.results[i].gender);
      div.append(genero);


      $('#informacion').append(div);
    }
  }
})
