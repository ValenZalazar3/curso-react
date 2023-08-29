// const Rectangulo = class R {

//} esto es una expresion de clase, donde estamos asignando una clase a una costante, tambien pueden ser anonimas, (en este caso se llama R, pero podria no tenerlo)

class Rectangulo {

} // esto es una declaracion de clase, esa es la diferencia entre una y la anterior

function Cuadrado() {

}// en la terminal, si ponemos un console.log, vemos una funcion, que es la de cuadrado, y una clase que es la de Rectangulo (recordemos el azucar sintactica que vimos en una clase previa). 
const r = new Rectangulo()



// Hoisting, es cuando tomamos variables definidas con var y funciones definidas con fuction, las lleva al comienzo del archivo

// A diferencia de class y otras variables, que esto no pasa.


class Chancho {
    propiedad = ' mi propiedad'
    
    constructor(estado = 'feliz'){
        this.estado = estado

    }
    hablar(){
        console.log(`soy un chancho ${this.estado}`)
    }
}



const feliz = new Chancho('feliz')
feliz.hablar()

const triste = new Chancho('triste')
//triste.hablar()

const nose = new Chancho()
//nose.hablar()


// constructor es el metodo que se va a ejecutar siempre que nosotros instanciemos una clase, Si la llamamos con la palabra reservada de 'new', si no lo hicieramos apareceria un error. 
// a los constructors le podemos pasar un estado, el cual se puede usar dentro del mismo, (y ese estado se le pasa cuando instanciamos la class). Se le puede poner un valor por defecto, inicializando un valor por defecto, esto tambien se aplica a las funciones.
// Tambien se puede inicializar el estado por afuera del constructor. y para tomarlo dentro del constructor, accedo con el this.estado.
// El metodo que en este caso es hablar(), y quedamos con lo que ya tenemos, el estado se pasa al metodo. Recordemos que el metodo tambien hay que llamarlo, como el ejemplo de feliz.hablar()
// En la consola, el metodo de feliz, es una instancia de la clase chancho, que tiene una propiedad, que se llama 'mi propiedad' y un estado que es feliz, pero el metodo hablar no se muestra, y esto es porque esta en el prototipo, y se muestra si le sumamos el __propto__, pero no se muestra, porque los desarrolladores de node, decidieron no mostrarlo, porque si nos vamos al navegador, y ponemos el codigo, si tenemos el metodo y lo podemos ver.