let productos = [
    {nombre: "Base MAC", precio: 800, cantidaddisp: 30},
    {nombre: "Corrector de ojeras", precio: 500, cantidaddisp: 20},
    {nombre: "Labial", precio: 350, cantidaddisp: 4},
    {nombre: "Macara de pestañas", precio: 700, cantidaddisp: 10},
]
console.log(productos.length)

productos.push({nombre: "contorno de cara", precio: 300, cantidaddisp: 2 })
console.log(productos);

for(let producto of productos)
console.log(producto.nombre);