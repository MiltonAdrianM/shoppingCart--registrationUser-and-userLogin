let productos = [];
productos[0] = ["img/samsung.jpg", "Samsung galaxy S22Ultra", 4500000, 5];
productos[1] = ["img/xiaomi.jpg", "Xiaomi 12pro", 3600000, 3];
productos[2] = ["img/iphone12Pro.jpg", "Iphone 12pro Max", 6800000, 2];
productos[3] = ["img/Iphone10.jpg", "Iphone X", 3200000, 2];

let div = document.getElementById("art"),
  titulo = div.getElementsByTagName("h6"),
  img = div.getElementsByTagName("img"),
  precio = div.getElementsByTagName("p");

let salida = "";

function multiple(valor, multiplo) {
  resto = valor % multiplo;
  if (resto == 0) return true;
  else return false;
}

for (i = 0; i < productos.length; i++) {
  if (i == 0) {
    salida += "<div class='row'>";
  } else if (i != 0 && multiple(i, 4)) {
    salida += "</div>\n<div class='row'>";
  }

  salida +=
    "<div class='col-md-3 producto col-xs-12 col-sm-6'> <img alt='' src='" +
    productos[i][0] +
    " ' class='img-rounded' style='width:50%'><h6>" +
    productos[i][1] +
    "</h6><p class='precios'>" +
    "$" +
    productos[i][2] +
    "</p>" +
    "" +
    "</div>";
}

if (i != 0) {
  salida += "</div>";
}

div.innerHTML = salida;

let cantSamsung = 0;
let cantXiaomi = 0;
let cantIphone12 = 0;
let cantIphone10 = 0;
let carro = 0;
let envio = 0;

let stockSams = 5;
let stockXiao = 3;
let stockIp12 = 2;
let stockIp10 = 2;

let precioSamsung = 4500000;
let precioXiaomi = 3600000;
let precioIphone12 = 6800000;
let precioIphone10 = 3200000;

let botonComprar = document.querySelector("#btnComprar");
botonComprar.disabled = true;

let stockSamsungs = document.createElement("p");
let stockXiom = document.createElement("p");
let stockIp12o = document.createElement("p");
let stockIp10as = document.createElement("p");

let comprarSamsung = document.getElementById("btnSamn");
comprarSamsung.addEventListener("click", sumarCelSamsung);

function sumarCelSamsung() {
  carro += 4500000;
  envio += 1500;
  stockSams -= 1;
  let nombres = document.createElement("p");
  let nombre = document.createElement("p");
  let precioart = document.createElement("p");
  let final = document.createElement("p");
  let finalconEnvio = document.createElement("p");
  let finalenvio = document.createElement("p");

  let buttonSamsu = document.querySelector("#btnSamn");

  cantSamsung++;
  if (cantSamsung <= 1) {
    nombre.innerHTML = `<p>${cantSamsung} celular Samsung añadido al carro</p>`;
    nombres.innerHTML = `<p>${cantSamsung} celular Samsung</p>`;
    precioart.innerHTML = `<p>$${precioSamsung}</p>`;
  } else {
    precioDosMasCelSamsung = cantSamsung * precioSamsung;
    nombre.innerHTML = `<p>${cantSamsung} celular Samsung añadido al carro</p>`;
    nombres.innerHTML = `<p>${cantSamsung} celular Samsung</p>`;
    precioart.innerHTML = `<p>$${precioDosMasCelSamsung}</p>`;
  }

  precioDosMasCelSamsung = cantSamsung * precioSamsung;

  localStorage.nombres = `<p>${cantSamsung} celular Samsung</p>`;
  localStorage.precioart = `<p>$${precioSamsung}</p>`;
  localStorage.precioart = `<p>$${precioDosMasCelSamsung}</p>`;

  if (stockSams < 1) {
    buttonSamsu.disabled = true;
  }

  TotalEnvio = carro + envio;

  final.innerHTML = `Sub-total: $${carro}`;
  finalenvio.innerHTML = `Valor envio: $${envio}`;
  finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;

  localStorage.final = `Sub-total: $${carro}`;
  localStorage.finalenvio = `Valor envio: $${envio}`;
  localStorage.finalconEnvio = `Valor final : $${TotalEnvio}`;

  stockSamsungs.innerHTML = `Stock: ${stockSams} de ${productos[0][3]}`;
  localStorage.stockSamsungs = `Stock: ${stockSams} de ${productos[0][3]}`;

  document.getElementById("stock").innerHTML = "";
  document.getElementById("stock").appendChild(stockSamsungs);
  document.getElementById("contenedorart").innerHTML = "";
  document.getElementById("contenedorart").appendChild(nombre);
  document.getElementById("carrito").innerHTML = "";
  document.getElementById("carrito").appendChild(nombres);
  document.getElementById("precio").innerHTML = "";
  document.getElementById("precio").appendChild(precioart);
  document.getElementById("tablaPrecios").innerHTML = "";
  document.getElementById("tablaPrecios").appendChild(final);
  document.getElementById("envio").innerHTML = "";
  document.getElementById("envio").appendChild(finalenvio);
  document.getElementById("totalfinal").innerHTML = "";
  document.getElementById("totalfinal").appendChild(finalconEnvio);
}

let comprarXiaomi = document.getElementById("btnXiaom");
comprarXiaomi.addEventListener("click", sumarXiaom);
function sumarXiaom() {
  carro += 3600000;
  envio += 1500;
  stockXiao -= 1;
  let nombreXiaomi = document.createElement("p");
  let nombresXiaomi = document.createElement("p");
  let precioartXiaom = document.createElement("p");
  let final = document.createElement("p");
  let finalconEnvio = document.createElement("p");
  let finalenvio = document.createElement("p");

  let buttonsXiaomi = document.querySelector("#btnXiaom");

  cantXiaomi++;
  if (cantXiaomi <= 1) {
    nombreXiaomi.innerHTML = `<p>${cantXiaomi} celular Xiaomi añadido al carro</p>`;
    nombresXiaomi.innerHTML = `<p>${cantXiaomi} celular Xiaomi</p>`;
    precioartXiaom.innerHTML = `<p>$${precioXiaomi}</p>`;
  } else {
    precioDosMasXiaom = cantXiaomi * precioXiaomi;
    nombreXiaomi.innerHTML = `<p>${cantXiaomi} celular Xiaomi añadido al carro</p>`;
    nombresXiaomi.innerHTML = `<p>${cantXiaomi} celular Samsung</p>`;
    precioartXiaom.innerHTML = `<p>$${precioDosMasXiaom}</p>`;
  }

  precioDosMasXiaom = cantXiaomi * precioXiaomi;
  localStorage.nombreXiaomi = `<p>${cantXiaomi} celular Xiaomi añadido al carro</p>`;
  localStorage.nombresXiaomi = `<p>${cantXiaomi} celular Samsung</p>`;
  localStorage.precioartXiaom = `<p>$${precioXiaomi}</p>`;
  localStorage.precioartXiaom = `<p>$${precioDosMasXiaom}</p>`;

  if (stockXiao == 0) {
    buttonsXiaomi.disabled = true;
  }

  TotalEnvio = carro + envio;

  final.innerHTML = `Sub-total: $${carro}`;
  finalenvio.innerHTML = `Valor envio: $${envio}`;
  finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;

  localStorage.final = `Sub-total: $${carro}`;
  localStorage.finalenvio = `Valor envio: $${envio}`;
  localStorage.finalconEnvio = `Valor final : $${TotalEnvio}`;

  stockXiom.innerHTML = `Stock: ${stockXiao} de ${productos[1][3]}`;

  localStorage.stockXiom = `Stock: ${stockXiao} de ${productos[1][3]}`;

  document.getElementById("stock2").innerHTML = "";
  document.getElementById("stock2").appendChild(stockXiom);
  document.getElementById("contenedorart").innerHTML = "";
  document.getElementById("contenedorart").appendChild(nombreXiaomi);
  document.getElementById("carrito2").innerHTML = ""; //id item 2
  document.getElementById("carrito2").appendChild(nombresXiaomi);
  document.getElementById("precio2").innerHTML = "";
  document.getElementById("precio2").appendChild(precioartXiaom);
  document.getElementById("tablaPrecios").innerHTML = "";
  document.getElementById("tablaPrecios").appendChild(final);
  document.getElementById("envio").innerHTML = "";
  document.getElementById("envio").appendChild(finalenvio);
  document.getElementById("totalfinal").innerHTML = "";
  document.getElementById("totalfinal").appendChild(finalconEnvio);
}

let comprarIphone12Pro = document.getElementById("btnIp12");
comprarIphone12Pro.addEventListener("click", sumarIp12);
function sumarIp12() {
  carro += 6800000;
  envio += 1500;
  stockIp12 -= 1;
  let nombreIp12 = document.createElement("p");
  let nombresIp12 = document.createElement("p");
  let precioartIp12 = document.createElement("p");
  let final = document.createElement("p");
  let finalconEnvio = document.createElement("p");
  let finalenvio = document.createElement("p");

  let buttonsIp12 = document.querySelector("#btnIp12");

  cantIphone12++;
  if (cantIphone12 <= 1) {
    nombreIp12.innerHTML = `<p>${cantIphone12} celular Iphone 12pro añadido al carro</p>`;
    nombresIp12.innerHTML = `<p>${cantIphone12} celular Iphone 12pro</p>`;
    precioartIp12.innerHTML = `<p>$${precioIphone12}</p>`;
  } else {
    precioDosMasIp12 = cantIphone12 * precioIphone12;
    nombreIp12.innerHTML = `<p>${cantIphone12} celular Iphone 12pro añadido al carro</p>`;
    nombresIp12.innerHTML = `<p>${cantIphone12} celular Iphone 12pro</p>`;
    precioartIp12.innerHTML = `<p>$${precioDosMasIp12}</p>`;
  }

  precioDosMasIp12 = cantIphone12 * precioIphone12;

  localStorage.nombresIp12 = `<p>${cantIphone12} celular Iphone 12pro</p>`;
  localStorage.precioartIp12 = `<p>$${precioIphone12}</p>`;
  localStorage.precioartIp12 = `<p>$${precioDosMasIp12}</p>`;

  if (stockIp12 == 0) {
    buttonsIp12.disabled = true;
  }

  TotalEnvio = carro + envio;

  final.innerHTML = `Sub-total: $${carro}`;
  finalenvio.innerHTML = `Valor envio: $${envio}`;
  finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;

  localStorage.final = `Sub-total: $${carro}`;
  localStorage.finalenvio = `Valor envio: $${envio}`;
  localStorage.finalconEnvio = `Valor final : $${TotalEnvio}`;

  stockIp12o.innerHTML = `Stock: ${stockIp12} de ${productos[2][3]}`;
  localStorage.stockIp12o = `Stock: ${stockIp12} de ${productos[2][3]}`;

  document.getElementById("stock3").innerHTML = "";
  document.getElementById("stock3").appendChild(stockIp12o);
  document.getElementById("contenedorart").innerHTML = "";
  document.getElementById("contenedorart").appendChild(nombreIp12);
  document.getElementById("carrito3").innerHTML = ""; //id item 3
  document.getElementById("carrito3").appendChild(nombresIp12);
  document.getElementById("precio3").innerHTML = "";
  document.getElementById("precio3").appendChild(precioartIp12);
  document.getElementById("tablaPrecios").innerHTML = "";
  document.getElementById("tablaPrecios").appendChild(final);
  document.getElementById("envio").innerHTML = "";
  document.getElementById("envio").appendChild(finalenvio);
  document.getElementById("totalfinal").innerHTML = "";
  document.getElementById("totalfinal").appendChild(finalconEnvio);
}

let comprarIp10 = document.getElementById("btnIp10");
comprarIp10.addEventListener("click", sumarIp10);
function sumarIp10() {
  carro += 3200000;
  envio += 1500;
  stockIp10 -= 1;
  let nombreIp10 = document.createElement("p");
  let nombresIp10 = document.createElement("p");
  let precioartIp10 = document.createElement("p");
  let final = document.createElement("p");
  let finalconEnvio = document.createElement("p");
  let finalenvio = document.createElement("p");

  let buttonsIp10 = document.querySelector("#btnIp10");
  cantIphone10++;
  if (cantIphone10 <= 1) {
    nombreIp10.innerHTML = `<p>${cantIphone10} celular Iphone 10 añadido al carro</p>`;
    nombresIp10.innerHTML = `<p>${cantIphone10} celular Iphone 10</p>`;
    precioartIp10.innerHTML = `<p>$${precioIphone10}</p>`;
  } else {
    precioDosMasIphone10 = cantIphone10 * precioIphone10;
    nombreIp10.innerHTML = `<p>${cantIphone10} celular Iphone 10 añadido al carro</p>`;
    nombresIp10.innerHTML = `<p>${cantIphone10} celular Iphone 10</p>`;
    precioartIp10.innerHTML = `<p>$${precioDosMasIphone10}</p>`;
  }

  //guarda el valor en localstorage
  precioDosMasIphone10 = cantIphone10 * precioIphone10;
  localStorage.nombresIp10 = `<p>${cantIphone10} celular Iphone 10</p>`;
  localStorage.precioarIphone10 = `<p>$${precioIphone10}</p>`;
  localStorage.precioartIp10 = `<p>$${precioDosMasIphone10}</p>`;

  if (stockIp10 == 0) {
    buttonsIp10.disabled = true;
  }

  TotalEnvio = carro + envio;

  final.innerHTML = `Sub-total: $${carro}`;
  finalenvio.innerHTML = `Valor envio: $${envio}`;
  finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;
  stockIp10as.innerHTML = `Stock: ${stockIp10} de ${productos[3][3]}`;
  localStorage.stockIp10as = `Stock: ${stockIp10} de ${productos[3][3]}`;

  localStorage.final = `Sub-total: $${carro}`;
  localStorage.finalenvio = `Valor envio: $${envio}`;
  localStorage.finalconEnvio = `Valor final : $${TotalEnvio}`;

  document.getElementById("stock4").innerHTML = "";
  document.getElementById("stock4").appendChild(stockIp10as);
  document.getElementById("contenedorart").innerHTML = "";
  document.getElementById("contenedorart").appendChild(nombreIp10);
  document.getElementById("carrito4").innerHTML = ""; //id item 3
  document.getElementById("carrito4").appendChild(nombresIp10);
  document.getElementById("precio4").innerHTML = "";
  document.getElementById("precio4").appendChild(precioartIp10);
  document.getElementById("tablaPrecios").innerHTML = "";
  document.getElementById("tablaPrecios").appendChild(final);
  document.getElementById("envio").innerHTML = "";
  document.getElementById("envio").appendChild(finalenvio);
  document.getElementById("totalfinal").innerHTML = "";
  document.getElementById("totalfinal").appendChild(finalconEnvio);
}

let restaurarProductos = document.getElementById("vaciar-carrito");
restaurarProductos.addEventListener("click", reestablecer);
function reestablecer() {
  document.getElementById("carrito").innerHTML = "";
  document.getElementById("carrito2").innerHTML = "";
  document.getElementById("carrito3").innerHTML = "";
  document.getElementById("carrito4").innerHTML = "";
  document.getElementById("precio").innerHTML = "";
  document.getElementById("precio2").innerHTML = "";
  document.getElementById("precio3").innerHTML = "";
  document.getElementById("precio4").innerHTML = "";
  document.getElementById("tablaPrecios").innerHTML = "";
  document.getElementById("envio").innerHTML = "";
  document.getElementById("totalfinal").innerHTML = "";
  document.getElementById("contenedorart").innerHTML = "";

  carro = 0;
  envio = 0;
  cantSamsung = 0;
  cantXiaomi = 0;
  cantIphone12 = 0;
  cantIphone10 = 0;

  stockSams = 5;
  stockXiao = 3;
  stockIp12 = 2;
  stockIp10 = 2;

  stockSamsungs.innerHTML = `Stock: ${stockSams} de ${productos[0][3]}`;
  stockXiom.innerHTML = `Stock: ${stockXiao} de ${productos[1][3]}`;
  stockIp12o.innerHTML = `Stock: ${stockIp12} de ${productos[2][3]}`;
  stockIp10as.innerHTML = `Stock: ${stockIp10} de ${productos[3][3]}`;
  let buttonSamsu = document.querySelector("#btnSamn");
  let buttonsXiaomi = document.querySelector("#btnXiaom");
  let buttonsIp12 = document.querySelector("#btnIp12");
  let buttonsIp10 = document.querySelector("#btnIp10");

  buttonsIp10.disabled = false;
  buttonsXiaomi.disabled = false;
  buttonsIp12.disabled = false;
  buttonSamsu.disabled = false;
  localStorage.clear();
}

let ComprarProductos = document.getElementById("btnComprar");
ComprarProductos.addEventListener("click", confirmEnviar);
function confirmEnviar() {
  alert("Compra ejecutándose  por favor espere...");
  btnSamn.disabled = true;
  btnXiaom.disabled = true;
  btnIp12.disabled = true;
  btnIp10.disabled = true;
  btnComprar.disabled = true;
  document.getElementById("btnComprar").innerHTML = "Comprando...";
  setTimeout(function () {
    btnSamn.disabled = false;
    btnXiaom.disabled = false;
    btnIp12.disabled = false;
    btnIp10.disabled = false;
    btnComprar.disabled = false;
    alert("¡Compra efectuada!");

    document.getElementById("carrito").innerHTML = "";
    document.getElementById("carrito2").innerHTML = "";
    document.getElementById("carrito3").innerHTML = "";
    document.getElementById("carrito4").innerHTML = "";
    document.getElementById("precio").innerHTML = "";
    document.getElementById("precio2").innerHTML = "";
    document.getElementById("precio3").innerHTML = "";
    document.getElementById("precio4").innerHTML = "";
    document.getElementById("tablaPrecios").innerHTML = "";
    document.getElementById("envio").innerHTML = "";
    document.getElementById("totalfinal").innerHTML = "";
    document.getElementById("contenedorart").innerHTML = "";
    document.getElementById("btnComprar").innerHTML = "Comprar";
    localStorage.removeItem("nombres");
    localStorage.removeItem("precioart");
    localStorage.removeItem("nombresXiaomi");
    localStorage.removeItem("precioartXiaom");
    localStorage.removeItem("nombresIp12");
    localStorage.removeItem("precioartIp12");
    localStorage.removeItem("nombresIp10");
    localStorage.removeItem("precioartIp10");
    localStorage.removeItem("final");
    localStorage.removeItem("finalenvio");
    localStorage.removeItem("finalconEnvio");
  }, 3000);
  return false;
}

function manejarError() {
  const vacio = "Vacío";
  const sinDatos = "Sin datos";
  let stockSams = 5;
  let stockXiao = 3;
  let stockIp12 = 2;
  let stockIp10 = 2;

  if (typeof localStorage.nombres === "undefined") {
    localStorage.nombres = vacio;
  }

  if (typeof localStorage.precioart === "undefined") {
    localStorage.precioart = 0;
  }

  if (typeof localStorage.nombresXiaomi === "undefined") {
    localStorage.nombresXiaomi = vacio;
  }

  if (typeof localStorage.precioartXiaom === "undefined") {
    localStorage.precioartXiaom = 0;
  }

  if (typeof localStorage.nombresIp12 === "undefined") {
    localStorage.nombresIp12 = vacio;
  }

  if (typeof localStorage.precioartIp12 === "undefined") {
    localStorage.precioartIp12 = 0;
  }

  if (typeof localStorage.nombresIp10 === "undefined") {
    localStorage.nombresIp10 = vacio;
  }

  if (typeof localStorage.precioartIp10 === "undefined") {
    localStorage.precioartIp10 = 0;
  }

  if (typeof localStorage.final === "undefined") {
    localStorage.final = sinDatos;
  }

  if (typeof localStorage.finalenvio === "undefined") {
    localStorage.finalenvio = sinDatos;
  }

  if (typeof localStorage.finalconEnvio === "undefined") {
    localStorage.finalconEnvio = sinDatos;
  }

  if (typeof localStorage.stockSamsungs === "undefined") {
    localStorage.stockSamsungs =
      stockSamsungs.innerHTML = `Stock: ${stockSams} de ${productos[0][3]}`;
  }

  if (typeof localStorage.stockXiom === "undefined") {
    localStorage.stockXiom = `Stock: ${stockXiao} de ${productos[1][3]}`;
  }

  if (typeof localStorage.stockIp12o === "undefined") {
    localStorage.stockIp12o = `Stock: ${stockIp12} de ${productos[2][3]}`;
  }

  if (typeof localStorage.stockIp10as === "undefined") {
    localStorage.stockIp10as = `Stock: ${stockIp10} de ${productos[3][3]}`;
  }
}
manejarError();

function obtenerDatosGrabados() {
  document.getElementById("carrito").innerHTML = localStorage.nombres;
  document.getElementById("precio").innerHTML = localStorage.precioart;
  document.getElementById("precio").innerHTML = localStorage.precioart;
  document.getElementById("stock").innerHTML = localStorage.stockSamsungs;

  document.getElementById("carrito2").innerHTML = localStorage.nombresXiaomi;
  document.getElementById("precio2").innerHTML = localStorage.precioartXiaom;
  document.getElementById("precio2").innerHTML = localStorage.precioartXiaom;
  document.getElementById("stock2").innerHTML = localStorage.stockXiom;

  document.getElementById("carrito3").innerHTML = localStorage.nombresIp12;
  document.getElementById("precio3").innerHTML = localStorage.precioartIp12;
  document.getElementById("precio3").innerHTML = localStorage.precioartIp12;
  document.getElementById("stock3").innerHTML = localStorage.stockIp12o;

  document.getElementById("carrito4").innerHTML = localStorage.nombresIp10;
  document.getElementById("precio4").innerHTML = localStorage.precioartIp10;
  document.getElementById("precio4").innerHTML = localStorage.precioartIp10;
  document.getElementById("stock4").innerHTML = localStorage.stockIp10as;

  document.getElementById("tablaPrecios").innerHTML = localStorage.final;
  document.getElementById("envio").innerHTML = localStorage.finalenvio;
  document.getElementById("totalfinal").innerHTML = localStorage.finalconEnvio;
}
obtenerDatosGrabados();
