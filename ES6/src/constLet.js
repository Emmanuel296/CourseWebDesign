//Caracteristica #1
// Podemos re-declarar varaibles con var
// Esto puede causar problemas en donde re-declaremos sin darnos cuenta.
// var nombre = 'Carlos';
// var nombre = 'Arturo';


// let pais = 'México';
// let pais = 'España';

// const pais = 'México';
// const pais = 'España';

// console.log('Hola ' + pais);

//Característica #2
//let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro de una función.

// function saludo(){
//     var nombre = 'Carlos';
//     return 'Hola ' = nombre;
// }

// //console.log(saludo()); // = Hola Carlos
// console.log(nombre); //nombre is not defined

// Característica #3
// let y const tienen un scope de tipo bloque.

// let edad = 18;

// if(edad >= 18){
//      var esAdulto = true;
// }

// console.log(esAdulto);

//Característica #4
//const lo usamos cuando queremos que el valor de una variable nunca cambie.
// const nombre = 'Carlos';
// nombre = 'Arturo'

// const colores = ['Rojo', 'Verde'];
// colores.push('Azul');

// console.log(colores);