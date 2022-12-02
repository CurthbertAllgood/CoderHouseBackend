const fs=require('fs')

class Contenedor{

    save = async(producto, file)=>{
        let id= getId(file);
        producto.id= id;

        const productosTotal= read(file);
        productosTotal.push(producto);
        productosTotal.write(productosTotal,file);

    }

    actualizaProducto(id, produ, file){
        const productosTotal = this.read(file);
            let index = productosTotal.findIndex(produ => produ.id == id);
                if(index >= 0){
                    productosTotal[index] = produ;
                    this.write(productosTotal, file);
                    console.log('Actualizado');
                }else{
                    console.log('No se encontro el producto');
            }
    }

    read(file){
        let productosTotal = [];
        try{
            productosTotal = fs.readFileSync(file, 'utf8');
            productosTotal.length > 0 ? productosTotal = JSON.parse(productosTotal): productosTotal = [];
        }catch(err){
            console.log('Error en la lectura del archivo', err);
        }
        return productosTotal;
    }

    async write(productosTotal, file){
        let json = JSON.stringify(productosTotal);
        try{
        await fs.writeFileSync(file, json);
        }catch(err){
            console.log('Error en la escritura', err);
        }
    }

    getId(file){
        let id=0;
        let productosTotal = read(file);
        if(productosTotal.length>0){
            id=productosTotal[productosTotal.length -1].id; 
        }
        return id + 1;
    }


    getAll(file){
        try{
            let productosTotal = this.read(file);
            return {status: "lista de todos los productos", message: productosTotal}
        }catch(error){
            return {status: "error", message: error.message}
        }
    }

    getById(id, file){
        let productosTotal = read(file);
        let prod= productosTotal.find(prod=>prod.id==id);
        return prod ? prod : null;
    }

    deleteById(id, file){
        let productosTotal = this.read(file);
        let index = productosTotal.findIndex(product => product.id == id);
        if(index >= 0){
            productosTotal.splice(index, 1);
            let json = JSON.stringify(productosTotal);
            try{
                fs.writeFileSync(file, json);
                return id
            }
            catch(err){
                console.log('Error en la escritura', err);
            }
        }
    }

    deleteAll(file){
        let productosTotal = [];
        let json = JSON.stringify(productosTotal);
        try{
            fs.writeFileSync(file, json);
        }
        catch(err){
            console.log('Error en la escritura', err);
        }
    }

    read(archivo){
        let productos=[];
        productos=fs.readFileSync(archivo, 'utf8');
        console.log(productos)
        productos=JSON.parse(productos);
        return productos;
    }

    async createFile(file_path){
        try{
            if(fs.existsSync(file_path)){
                console.log('El archivo ya existe, entonces no hago nada');
                return false
            }else {
                console.log('El archivo no existe, entonces lo creo!');
                await fs.promises.writeFile(file_path, '', 'utf8');
                return true
            }
        }catch(err){
            console.log('Error en la creación del archivo', err);
            return false;
        }
    }

    }




module.exports= Contenedor