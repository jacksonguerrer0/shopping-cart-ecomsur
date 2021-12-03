# Bitacora 
### Por favor, empezar la prueba después de haber leído este documento completo.

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción](#descripción-del-proyecto)

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 ![Running app](/viewApp.png)


- El servidor se encuentra en:
  `http://localhost:5000/`

> Puede que al ejecutar ` npm run dev ` se tarde un poco, te recomiendo esperar o cerrar la terminal con ` ctr + c ` y volver a ejecutar ` npm run dev `
## Descripción del proyecto

Es un ejercicio que simula un carrito de compras. Se hace peticiones a una API de los productos, se pueden agregar productos, eliminar productos y limpiar el carrito de compras y se guardan en el localStorage. Se pueden observar los detalles del producto, los productos en el carrito y hacer busqueda de los productos.