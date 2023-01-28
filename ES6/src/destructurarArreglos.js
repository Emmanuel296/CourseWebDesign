const persona = ['Carlos Arturo', 'México', 'Desarrollador Web'];

const [nombre, , pais, profesion = 'No especificado'] = persona;

// const mostrarInfo = (nombre, pais) => console.log(nombre, pais);
// mostrarInfo(nombre, pais);

const mostrarInfo = ([nombre, , pais, profesion = 'No especificado'] = persona) => console.log(nombre, pais);
mostrarInfo(persona);
