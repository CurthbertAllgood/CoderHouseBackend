const Contenedor=require("./Contenedor")
const fs=require('fs')
const express=require("express")
const productosTxt=require("./productos.txt")
const { response, json } = require("express")
const { Container } = require("@mui/system")
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
    const container= new Contenedor()
    const archivo='./productos.txt';
    const allProdu= container.read(archivo);
    console.log(allProdu);
    const random=Math.floor(Math.random()* allProdu.length);
    console.log(random);
    return allProdu[random];
}

