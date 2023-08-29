class Chancho {
    propiedad = ' mi propiedad'
    #hambre
    
    constructor(estado = 'feliz', hambre = false){
        this.estado = estado
        this.#hambre = hambre

    }
    hablar(){
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho!'}`)
    }

    static comer() {
        console.log('estoy comiendo!')
    }
}



const feliz = new Chancho('feliz')
feliz.hablar()

const triste = new Chancho('triste')
//triste.hablar()

const nose = new Chancho()
//nose.hablar()


// una propiedad nueva, es la de propiedad privada, la cual se asigna con el numeral #. En el metodo de hablar se usa, y preguntamos si es true o false, tambien se puede inicializar dentro de los () del constructor, y no tenenemos que sacarla de arriba, aunque no tenemos que ponerle un valor, pero si inicializarla por afuera porque sino da error. Una de las caracteristicas de la propiedad privada no se puede ver, en una instancia, aunque se quiera acceder a la fuerza. Solo se puede acceder por las instancias de la clase.

// Otra, es los metodos estaticos, es un metodo que solo se puede acceder desde las clases y no es necesario generar una nueva instania de clase, para generarlo necesario usar la palabra reservada static, seguido del metodo, en este caso comer, los metodos estaticos, no pueden acceder a las propiedades, y esto es porque las propiedades solo perteneces a los metodos publicos o privados, si nosotros quisieramos acceder a una propiedad tenemos que poner delante de la propiedad static