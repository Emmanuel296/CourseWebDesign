function registrarUsuario(nombre, pais = 'No especificado', correo, telefono = 'No especificado'){
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, telefono: ${telefono}`;
}

console.log(registrarUsuario('Carlos', undefined, 'correo@correo.com'));