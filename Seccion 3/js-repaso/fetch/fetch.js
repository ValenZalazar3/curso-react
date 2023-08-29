const url ='https://jsonplaceholder.typicode.com/users'

// fetch(url, {
//     method: 'POST', // indicamos que tipo de contenido vamos a enviar, PUT GET DELETE POST PATCH
//     headers: { //  indicamos quienes somos nosotros, y el tipo de contenido
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'   },
//         body: JSON.stringify({ // indicamos que es lo que vamos a enviar
//             name: 'Chanchito Feliz',
//             website: 'google.com'
//         })

// })
// .then((response) => response.json())
// .then(data => console.log(data))


// tambien podemos usar el async await

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', // indicamos que tipo de contenido vamos a enviar, PUT GET DELETE POST PATCH
        headers: { //  indicamos quienes somos nosotros, y el tipo de contenido
            'Content-Type': 'application/json',
            'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'   },
            body: JSON.stringify({ // indicamos que es lo que vamos a enviar
                name: 'Chanchito Feliz',
                website: 'google.com'
            })
    
    })
   const data = await response.json()
   console.log(data)
}

fn()

// la mayoria del tiempo se usa async await.