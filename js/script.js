$(document).ready(function () {
  $("#login").click(function () {
    col("#login", "#register");
    $("#msg-error").text(" ");
    sh_hd("#pg-register", "#pg-login");
    cl("#email", "#password");
  });

  $("#register").click(function () {
    col("#register", "#login");
    sh_hd("#pg-login", "#pg-register");
    cl("#email1", "#password1");
    cl("#msg-error", "#nombre1");
    $("#msg-error1").text(" ");
    $("#msg-error").text(" ");
  });

  var user = ["admin", "angela@gmail.com"];
  var pass = ["admin", "Ang.2021"];
  var nom = ["Admin", "Angela"];

  $("#ir-b").click(function () {
    var us = $("#email").val();
    var ps = $("#password").val();
    for (var i = 0; i < user.length; i++) {
      if (us == user[i]) {
        if (ps == pass[i]) {
          sh_hd("#home", "#welcome");
          $("#Nombre").text(nom[i]);
          i = user.length;
        } else {
          $("#msg-error").text("El usuario o contraseña es incorrecto.");
          cl("#email", "#password");
          i = user.length;
        }
      } else {
        $("#msg-error").text("El usuario no existe en nuestra base de datos.");
        cl("#email", "#password");
      }
    }
  });

  $("#ir-re").click(function () {
    var no = $("#nombre1").val();
    var us = $("#email1").val();
    var ps = $("#password1").val();
    registro(no, us, ps);
  });

  $("#cerrar").click(function () {
    sh_hd("#welcome", "#home");
    $("#msg-error").html("Vuelve cuando quieras<br> te estaremos esperando.");
    cl("#email", "#password");
  });

  $("#ir-is").click(function () {
    sh_hd("#pg-register-cp", "#home");
    $("#msg-error").text(" ");
    sh_hd("#pg-register", "#pg-login");    
  });

  function registro(no, us, ps) {
    var boo = false;
    for (var i = 0; i < user.length; i++) {
      if (us == "" || no == "" || ps == "") {
        return $("#msg-error1").text("Ingrese todos los campos");
      }
      if (us == user[i]) {
        cl("#email1", "#password1");
        $("#nombre1").val("");
        return $("#msg-error1").text(
          "El usuario '" + us + "' ya esta registrado."
        );
      } else {
        boo = true;
      }
    }
    if (boo == true) {
      nom.push(no);
      user.push(us);
      pass.push(ps);
      cl("#email1", "#password1");
      $("#nombre1").val("");
      sh_hd("#home", "#pg-register-cp");
    }
  }

  function sh_hd(sh, hd) {
    $(sh).css("display", "none");
    $(hd).css("display", "inline");
  }

  function cl(pf, ps) {
    $(pf).val("");
    $(ps).val("");
  }

  function col(cf, cs) {
    $(cf).css("background-color", "rgb(185, 74, 74)");
    $(cs).css("background-color", "rgb(73, 75, 73)");
  }
});
