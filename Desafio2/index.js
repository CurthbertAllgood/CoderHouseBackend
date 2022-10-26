const Contenedor= require("./Contenedor");
const contenedor= new Contenedor();


let producto={
    titulo: 'play 6',
    precio: 500,
    detalle:'maybe besto consola ever', 
}

p=contenedor.save(producto).then(result=>console.log(result));
