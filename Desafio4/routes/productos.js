const express=require('express')
const router= express.Router()
const fs=require('fs')

let productos=[

{
    "name":"carlos",
    "lastname":"ortiz",
    "age":23

}
]


//let productos= JSON.parse(dato)
//let id= productos[productos.length-1].id+1;
//producto.id=id;
//productos.push(producto)



router.get('/', (req, res)=>{
    res.send({productos})
})
router.get('/:id', (req, res)=>{
    let parametro= req.params.id
    res.send(parametro)
})

router.post('/',(req,res)=>{
    let producto= req.body
    productos.push(producto)
    res.send({productos})
})


module.exports = router