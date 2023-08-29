// const chanchos = require ('./importExport')

import chanchos, {chanchosTristes} from './importExport.mjs'

// Si no usas el modulo de ES6 tenes que poner el module.export y el require, pero eso lo podes sacar, yendo al package.json, en el "type: "module", o bien cambiando el nombre de la extencion de js a mjs para que se pueda empezar a utilizar el import export del ES6

// Si se exporta algo por defecto, podemos importarlo directamente (y con otro nombre, aunque no conviene porque nos podemos perder), pero si se exportan constantes, las tenemos que traer con el destruccturing (parentesis de llaves), y escribir el nombre de la constante.
