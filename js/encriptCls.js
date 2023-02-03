class Interprete {

  constructor (texto) {
    this.texto = texto;
  }

  get encriptar() { return this.encrp (this.texto); }
  get desencriptar() { return this.decrp (this.texto); }

  encrp (txt) {
    let encriptado="";
    for (var i=0; i<txt.length;i++) {                           // Recorre el texto una letra a la vez, de inicio a fin.
      if (txt[i]=="a") encriptado = encriptado+"ai";            //  Si encuentra una vocal, realiza el cambio.
      else if (txt[i]=="e") encriptado = encriptado+"enter";
      else if (txt[i]=="i") encriptado = encriptado+"imes";
      else if (txt[i]=="o") encriptado = encriptado+"ober";
      else if (txt[i]=="u") encriptado = encriptado+"ufat";
      else encriptado = encriptado+txt[i];                      // Otro, guarda la letra.
    }
  return encriptado;
  }

  decrp (txt) {
    var ptrna = /ai/;
    var ptrne = /enter/;
    var ptrni = /imes/;                 // Lista de patrones
    var ptrno = /ober/;
    var ptrnu = /ufat/;
    while (ptrna.test(txt)) {
      txt = txt.replace(ptrna,"a");
    }
    while (ptrne.test(txt)) {
      txt = txt.replace(ptrne,"e");
    }                                   // Mientras existan patrones en el texto, reemplaza la vocal correspondiente
    while (ptrni.test(txt)) {
      txt = txt.replace(ptrni,"i");
    }
    while (ptrno.test(txt)) {
      txt = txt.replace(ptrno,"o");
    }
    while (ptrnu.test(txt)) {
      txt = txt.replace(ptrnu,"u");
    }
  return txt;
  }

};