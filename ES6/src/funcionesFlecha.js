const nombre = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];

// const numero_caracteres = nombres.map(function(nombre){
//     return `${nombre} tiene ${nombre.lenght} letras`;
// });

// const numero_caracteres = nombres.map((nombre) => { 
//     return `${nombre} tiene ${nombre.lenght} letras`;
// });

const numero_caracteres = nombres.map( nombre => `${nombre} tiene ${nombre.lenght} letras`);

console.log(numero_caracteres);

// (parametro) => {
//     return //codigo a ejecutar
// }