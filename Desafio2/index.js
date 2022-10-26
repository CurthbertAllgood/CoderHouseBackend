const Contenedor= require("./Contenedor");
const contenedor= new Contenedor();


let producto={
    titulo: 'play 6',
    precio: 500,
    detalle:'maybe besto consola ever', 
}
contenedor.save(producto).then(result=>console.log(result));

contenedor.getAll().then(result=>console.log(result));

//contenedor.getById(1).then(result=>console.log(result));

//contenedor.deleteById(2).then(result=>console.log(result));

contenedor.deleteAll().then(result=>console.log(result));