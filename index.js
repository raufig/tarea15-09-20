function ejercicio01() {
  let nombres = prompt("ingresa los nombres de la lista");
  let arraynum = [];
  arraynum.push(nombres);
  let condicion = true;
  while (condicion) {
    let otroNombre = prompt("ingrese otro nombre");

    if (!otroNombre) {
      condicion = false;
    } else {
      arraynum.push(otroNombre);
    }
  }
  document.write(arraynum.sort());
}

function ejercicio02() {
    let palabra = prompt("ingrese una palabra para organizar");
    let arre = palabra.split('');
    let palabraInversa='';
    let caracteres=0;
    let espacios=0;
    for(let i=arre.length-1;i>=0;i--){
          palabraInversa+=arre[i];
    }
    arre.map(p=>p===' '?espacios++ :caracteres++);


    document.write(palabraInversa +'<br>')
    document.write('espacios'+espacios +'<br>')
    document.write('caracteres'+caracteres)


}

function ejercicio03() {
    let otraPalabra = prompt("ingrese una palabra para separar");
    document.write(otraPalabra.split('').join('-').split(' ').join(''))
}
