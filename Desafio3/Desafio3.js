const Contenedor=require("./Contenedor")
const fs=require('fs')
const express=require("express")
const productosTxt=require("./productos.txt")
const { response, json } = require("express")
const app= express()
const server = app.listen(8080, ()=> console.log("server up"))

const contenedor= new Contenedor();
app.get('/productos', (request, response)=>{
    contenedor.getAll().then(resolve=>response.send(resolve))

})



app.get('/productosRandom',(request, response)=>{   
response.send(random());
    
})


function random(){
    let allProdu=[]
    const archivo='./productos.txt';
    allProdu= contenedor.read(archivo);
    JSON.parse(allProdu);
    const random=Math.floor(Math.random()* allProdu.length);
    console.log(random);
    return allProdu[random];
}

