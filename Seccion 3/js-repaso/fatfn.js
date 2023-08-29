
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

const r1 = new Fn()