const fs=require('fs')
const { userInfo } = require('os')


const rutaArchivo='../Desafio3/productos.txt'

class Contenedor{

    save = async(producto)=>{
        if(!producto.titulo || !producto.precio || !producto.detalle) return {status: "error", message:"no existe o no se encuentra el archivo"}
        try{
            if(fs.existsSync(rutaArchivo)){
                
                fs.appendFile
                let dato= await fs.promises.readFile(rutaArchivo, 'utf-8')
                let productos= JSON.parse(dato)
                let id= productos[productos.length-1].id+1;
                producto.id=id;
                productos.push(producto)
                await fs.promises.writeFile(rutaArchivo, JSON.stringify(productos, null, 2))
                return {status: "exitoso", message: "producto creado"};
            
            }   
            else{
                producto.id=1;
                await fs.promises.writeFile(rutaArchivo, JSON.stringify ([producto], null, 2))
                return { status:'exitoso', message:'producto creado'};
            }
        }catch(error){
            return {status:'fallido', message: error.message}
        }
    }

    getAll = async ()=>{
        try{
        if(fs.existsSync(rutaArchivo)){
            let datos= await fs.promises.readFile(rutaArchivo, 'utf-8')
            let productos=JSON.parse(datos)
            return {status: "lista de todos los productos", message: productos}
        
        }else{
            return {status: "error", message: "no existe la lista"}
        }
        }catch(error){
            return {status: "error", message: error.message}
        }
    }

    getById = async(id)=>{
        try{
        if(fs.existsSync(rutaArchivo)){
            let datos= await fs.promises.readFile(rutaArchivo, 'utf-8')
            let productos=JSON.parse(datos)
            let prod = productos.find(prod=>prod.id===id)
            if(prod)
            return {status: "id encontrado", message: prod};
            else
            return {status: "error", message:"no existe el producto"} 
        }else{
            return {status:'fallido', message:"no existe el archivo y/o lista"}
        }
    }catch(error){
        return {status:'fallido', message: error.message}
    }
    }

    deleteById= async(id)=>{
        try{
        if(fs.existsSync(rutaArchivo)){
            let datos= await fs.promises.readFile(rutaArchivo, 'utf-8')
            let productos=JSON.parse(datos)
            let productosFiltrados= productos.filter(producto=>producto.id!==id)
            await fs.promises.writeFile(rutaArchivo, JSON.stringify ([], null, 2))
            await fs.promises.writeFile(rutaArchivo, JSON.stringify(productosFiltrados, null, 2))
            return {status:"producto id eliminado", message:productosFiltrados};
        }else{
            
            return {status:'fallido', message:"no existe el archivo y/o lista"}
        }}catch(error){
            return {status: "error", message:error.message}
        }
    }

    deleteAll = async ()=>{
        try{
        if(fs.existsSync(rutaArchivo)){
            await fs.promises.writeFile(rutaArchivo, JSON.stringify ([], null, 2))
            return {status: "lista de todos los productos", message: productos}
        }else{
            return {status:'fallido', message:"no existe el archivo y/o lista"}
        }
    }catch(error){
        return {status: "error", message:error.message}
    }
    }

    read(archivo){
        let productos=[];
        productos=fs.readFileSync(archivo, 'utf8');
        console.log(productos)
        productos=JSON.parse(productos);
        return productos;
    }


    }




module.exports= Contenedor