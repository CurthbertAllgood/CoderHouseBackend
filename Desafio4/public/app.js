const { json } = require("express")

let productForm = document.getElementById('productoForm')

const handleSubmit =(evt, form, route)=>{
    evt.preventDefault()
    let formData = new formData(form)
    let obj={}
    formData.forEach((evt, key) => obj[key]=value);
    fetch(route, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'content-type': 'application/json'  
        }
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .then(err=>console.log(err))
}

productForm.addEventListener('submit', (e)=>handleSubmit(e, e.target, '/api/productos'))