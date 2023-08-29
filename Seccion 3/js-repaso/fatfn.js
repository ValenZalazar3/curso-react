
//la gracia que tienen las funciones que declaremos con Fn, es que la podemos utilizar como una especie de clase en JavaScript al ser un lenguaje multiparadigma este tambien implementa la herencia basada en prototipos y en ECMA script 6 es azucar sintactitca

// function Fn () {
//     return 'chanchito feliz'
// }

// const r = Fn()
// Este tipo de funciones tiene un contexto de 'this'

function Fn () {
    
    this.prop = 'propiedad'
    return 'chanchito feliz'
}
Fn.prototype.lala = function FuncionDePrototipo () {}

const r1 = new Fn()
console.log(r1.__proto__)

// la palabra reservada de class es azucar sintactica, lo que hace por detras es crearnos una funcion con esas caracteristicas, cuando nosotros creamos los metodos y propiedades las hace de esa manera y en el caso de las funciones o metedotos los hace de la manera de prototipos, esta es la principal funcionalidad.
// las funciones creadas con las palabras reservada 'function', pueden ser funciones normales, o clases y tienen contexto de this.

const fatFn = () => {
    return 'chanchito feliz'
}

const r2 = fatFn()

// Si uso la palabra new en fatFn apareceria un error. Y no tienen contxto de this. 