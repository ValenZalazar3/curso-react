const fn = (a, b, c) => console.log(a + b + c)

const arr = [1, 2, 3, 4]

fn(arr[0], arr[1], arr[2])
fn(...arr)
// lo que hace el spread operator, es que los elementos los mapea con cada parametro que tiene la funcion, aunque el array tenga mas elementos, sigue mapeando los eleementos con los elementos de los parametros. Si tuviera menos, el console.log, daria NaN

const arr1= [5, 6]

// Si nosotros quisieramos una mezcla, 

// const arr2 = arr.concat(arr1)
const arr2 = [...arr, ...arr1]
// con eso logramos el mismo efecto que con el arr.concat, o el metodo contact de los arreglos y tambien podriamos sumar otros elementos que no perteneces a los arrays arr y arr1. El spread operator hace una copia de los otros arreglos, esto quiere decir que si modificas los arregos originales, las copia no se ven modificiadas.


// AHORA CON LOS OBJETOS

const obj1 = { a: 1, b: 2}
const obj2 = {a: 5, b: 'chanchito feliz'}

const obj3 = {...obj1}
obj1.a= 10
console.log(obj3)

// El spread operaator hace lo mismo con los objetos y los arrays, genera una copia

const obj4 = {...obj1, ... obj2}