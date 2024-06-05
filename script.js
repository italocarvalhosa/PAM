// criar promises 

const myPromise = new Promise((resolve, reject) =>{
    const nome = 'Itinho'

     if (nome === 'Itinho') { 
         resolve ("usuario encontrado")
     } else {
        reject ('usuario nao encontrado')
    }
 })

 myPromise.then((data) =>{
     console.log(data)
 }) .catch((error)=> {
     console.log("algo aconteceu:" + error)
 })

 //Encadeamento de then´s


const myPromise2 = new Promise((resolve, reject) =>{
    const nome = 'Itinho'

    if (nome === 'Itinho') { 
        resolve("usuario encontrado")
    } else {
        reject('usuario nao encontrado')
    }
}) 

myPromise2.then((data)=>{
    return data.toUpperCase();
}).then((stringModified) => {
    console.log(stringModified)
})


// resolver varias promises com all - vai levar em consideração o tempo da maior promise para ser resolvido

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("p1 ok")
    }, 2000)
})

const p2 = new Promise((resolve, reject) =>{
    console.log("P2 ok!")
})

const p3 = new Promise((resolve, reject) =>{
    console.log("P3 ok!")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) =>{
        console.log(data)
})

// Resolvendo varias promises com Race - respeita o tempo de cada promise indepedente


const p4 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("p4 ok")
    }, 2000)
})

const p5 = new Promise((resolve, reject) =>{
    console.log("P5 ok!")
})

const p6 = new Promise((resolve, reject) =>{
    console.log("P6 ok!")
})

const resolveRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data)
})


// Fetch API  - API gitHub

const userName = "italocarvalhosa"

fetch('hhtps://api.github.com/users/'+userName, {
    method: 'GET',
    headers: {
        accept: 'aplication/vnd.github.v3+json'
    },
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.name)
}).catch((error) => {
    console.log(error)
})