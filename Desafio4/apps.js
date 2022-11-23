const express = require('express')
const productosRouter = require('./routes/productos')

const app=express()

const server = app.listen(8080,()=> console.log('server up'))


app.use(express.json())
app.use(express.static('public'))
app.use('/api/productos', productosRouter )
