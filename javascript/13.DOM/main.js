var primeraCaja = document.getElementById('primeraCaja');

var cajas = document.getElementsByTagName('div');

// var cajas = document.getElementsByClassName('.caja');

//primeraCaja.textContent = 'Hola Mundo';

primeraCaja.innerHTML = <u>Hola Mundo</u>;
 
// caja[0].innerHTML = '<u>Hola Mundo</u>';

// caja[0].textContent = 'Hola Mundo';

// ------ Creando Nodos
// 1.- Crear el elemento
var caja = document.createElement('div');
// 2.- Crear un nodo de texto
var contenido = document.createTextNode('Hola Mundo');
// 3.- Añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4.- Agregar atributos a las cajas
// caja.setAttribute('class', 'caja naranja');
//5.- Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

// ------ Modificando la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

// ----- Conociendo el elemento padre
var padre = cajas[0].parentNode; //<-- Con esto accedemos al primer elemento y nos devuelve el elemento padre 
// padre.insertBefore(caja, primeraCaja); // (El elemento que queremos añadir, antes de que elemento lo queremos poner )
// padre.insertBefore(caja, cajas[2]);

// ----- Remplazando y eliminando nodos del DOM
padre.replaceChild(caja, cajas[2]);

padre.removeChild(cajas[3]);