const Contenedor=require("./Contenedor")
const express=require("express")
const productosTxt=require("./productos.txt")
const { response } = require("express")
const app= express()
const server = app.listen(8080, ()=> console.log("server up"))

const contenedor= new Contenedor();
app.get('/productos', (request, response)=>{
    contenedor.getAll().then(resolve=>response.send(resolve))

})



app.get('/productosRandom',(request, response)=>{
    contenedor.getById(/*funcion random*/2).then(resolve=>response.send(resolve))
    
})

