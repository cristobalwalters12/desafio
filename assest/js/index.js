function toggle() {
  //EJERCICIO 1
  const imagen = document.getElementById("miImagen");
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "";
  } else {
    imagen.style.border = "2px solid red";
  }
}

const stickers = 10;
function suma() {
  //EJERCICIO 2
  let suma =
    Number(document.getElementById("input1").value) +
    Number(document.getElementById("input2").value) +
    Number(document.getElementById("input3").value);
  console.log(suma);
  if (suma <= stickers) {
    document.getElementById("p").innerHTML = "llevas " + suma + " stickers";
  } else {
    document.getElementById("p").innerHTML = "Llevas muchos stickers";
  }
}

function ingresarPassword() {
  //EJERCICIO 3
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
