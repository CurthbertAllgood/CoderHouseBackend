const express = require('express')
const productosRouter = require('./routes/productos')
const morgan = require('morgan');
const app=express()

const server = app.listen(8080,()=> console.log('server up'))


app.use(morgan('dev'))
app.use(express.json())

app.use('/', express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use('/api/productos', productosRouter )