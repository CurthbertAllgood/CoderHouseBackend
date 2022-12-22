const {Router} = require('express');
const router = Router();
const Contenedor = require('../Contenedor')
const file = '../productos.txt';
const contenedor = new Contenedor();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/files');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })


router.use(multer({storage}).single('thumbnail'));

router.get('/', (req, res) => {
  const productos = contenedor.getAll(file)
  res.render('index.ejs', { productos });
}
);

// router.get('/:id', (req, res) => {  
//     const { id } = req.params;
//     const product = contenedor.getById(parseInt(id), file);
//     product ? res.json({product_id: id, producto: product}) 
//             : res.json({message: 'Producto no encontrado. Id: '+ id});
// });

router.post('/', (req, res) => {
  console.log('req.body', req.body);
  const  body  = req.body;
  const photo = req.file;
  console.log(photo);
  //  antes de guardar el objeto le añado la propiedad para que se pueda acceder a la foto.
  body.thumbnail =  '/files/'+photo.filename;
  contenedor.saveProduct(body, file);
  res.redirect('/api/products');
}
);

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { body } = req;
//     const product = contenedor.getById(parseInt(id), file);
//     product ? contenedor.updateProduct(id,body, file) : res.json({message: 'Producto no encontrado. Id: '+ id});
//     res.json({message: 'Producto actualizado', producto: body});
// }
// );

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     const product = contenedor.deleteById(parseInt(id), file);
//     product ? res.json({message: 'Producto eliminado', id: id}) : res.json({message: 'Producto no encontrado. Id: '+ id});
// }
// );


module.exports = router;