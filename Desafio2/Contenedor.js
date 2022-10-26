const fs=require('fs')


const rutaArchivo='./datos.json'

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
}




module.exports= Contenedor