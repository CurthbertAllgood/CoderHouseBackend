const Contenedor=require("./Contenedor")
const express=require("express")
const app= express()
const server = app.listen(8080, ()=> console.log("server up"))

const contenedor= new Contenedor();
app.get('/productos', (request, response)=>{
    resp=(contenedor.getAll().then(result=>console.log(result)))
    response.send(resp)

})

app.get('/alumnos',(request, response)=>{
})

