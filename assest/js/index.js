function toggle() {
  const imagen = document.getElementById("miImagen");
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "";
  } else {
    imagen.style.border = "2px solid red";
  }
}

function ingresarPassword() {
  if (
    document.getElementById("select1").value == 9 &&
    document.getElementById("select2").value == 1 &&
    document.getElementById("select3").value == 1
  ) {
    document.getElementById("paragraph").innerHTML = "Password 1 correcto";
  } else if (
    document.getElementById("select1").value == 7 &&
    document.getElementById("select2").value == 1 &&
    document.getElementById("select3").value == 4
  ) {
    document.getElementById("paragraph").innerHTML = "Password 2 Correcta";
  } else {
    document.getElementById("paragraph").innerHTML = "Password Incorrecta";
  }
}
