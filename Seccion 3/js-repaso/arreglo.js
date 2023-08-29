//METODO FILTER

const arr = [5, 1, 2, 3, 4]

const r = arr.filter((el, i) => {
    console.log(i)

    return el > 2
})
console.log(r)

// i es el indice

//METODO MAP 

//const mapped = arr.map((el) => el * 2)

const users = [
    { id: 1, name: 'Chanchito feliz' },
    { id: 2, name: 'Chanchito triste' },
    { id: 3, name: 'Chanchito emocionado' },
    { id: 4, name: 'Felipe' },
]

const mapped = users.map((user) =>  `<h1> ${user.name}</h1>`)
console.log(mapped)
// METODO REDUCER

// const r1= arr.reduce((acc, el) =>  acc + el, 0  )

// const getMax = (a, b) => Math.max(a, b)
// const r1= arr.reduce(getMax)

// const r1 = users.reduce((acc, el) => 
// `${acc === '' ? '' : `${acc}, `} ${el.name}`)

const r1 = users.reduce((acc, el)=> {
    if(el.id < 2){
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r1)


