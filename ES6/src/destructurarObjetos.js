const usuario = {
    nombre: 'Carlos',
    correo: 'correo@correo.com',
    edad: 22,
    pais: 'México',
    profesion: 'Desarrollador Web'
}

const {nombre, correo, genero =  'No especificado'} = usuario;

const mostrarInfo = ( { nombre, profesion = 'Estudiante' } ) => console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);