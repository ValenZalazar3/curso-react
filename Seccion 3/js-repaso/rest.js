const rest = (a,b, c,  ...argumentos) => {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(argumentos)
    
}

 rest(1, 2, 3)
// en este caso con el spred rest, lo que hacemos es que todos los argumentos que le pasamos a los parametros de una funcion los transforma en un array, si le paso a y despues el rest operator, me toma el primer elemento y el resto, ahora si lo pongo al principio me dara error, porque siempre debe ir al final, para el resto de los parametros.
// Si no tiene valor me da un array vacio.

const obj = {
    a: 1, b: 2, c: 3, d:4
}
// const {a, ...restobj}= obj

// con eso puedo obtener todas las propiedades del objeto.

const arr = [1, 2, 3, 4, 5]

const [a, b] = arr