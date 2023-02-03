window.onload = function() {      // Regista los eventos
var btnEncriptar = document.getElementById("encrp");
  btnEncriptar.onclick = encriptar;
let btnDecriptar = document.getElementById("dcrp");
  btnDecriptar.addEventListener("click",desencriptar)
var btnCopiar = document.getElementById("copiar");
  btnCopiar.onclick = portapapeles;
var oculto = document.getElementById("oculto")
  oculto.onclick = mostrarCto;
};

function encriptar(evnt) {
var txt = "";
txt = document.getElementById("txtEncrp").value;
var txtDcrp = document.getElementById("txtDcrp");
  if (txt == "" || txt == null) {       // Nada que encriptar
  } else {                              // Encripta
    let traductor = new Interprete (txt);
    txtDcrp.value = traductor.encriptar;
    var msj = document.getElementById("msj")
    msj.style.display = "none";
  }
  focusDefault();
};

function desencriptar () {
var txt = "";
txt = document.getElementById("txtDcrp").value;
var txtEncrp = document.getElementById("txtEncrp");
  if (txt == "" || txt == null) {       // Nada que desencriptar
  } else {                              // Desencripta
    let traductor = new Interprete (txt);
    txtEncrp.value = traductor.desencriptar;
  }
  var msj = document.getElementById("msj")
  txtDcrp.value = "";
  msj.style.display = "block";
  focusDefault();
};

function portapapeles () {
var txtCopiado = document.getElementById("txtDcrp");
  if (txtCopiado.value == "" || txtCopiado.value == null) {     // Nada que copiar
    focusDefault();
  } else {
    txtCopiado.select();                      // Selecciona el textArea
    txtCopiado.setSelectionRange(0, 99999);   // Selecciona el contenido
    navigator.clipboard.writeText(txtCopiado.value);  //Copia el contenido al portapapeles
    focusDefault();
    alert("\n\nTexto copiado al Portapapeles:\n\" " + txtCopiado.value+" \""); // Mensaje de confirmación
  }
};

function mostrarCto (){
var datos = document.getElementById("cont")
  if (datos.style.display === "block") {
    datos.style.display = "none";
  } else {
    datos.style.display = "block";
  }
  focusDefault();
};

function focusDefault() {                     // Entrega el foco al área de texto a Encriptar
var elm = document.getElementById("txtEncrp");
  elm.focus();
  elm.select();
};