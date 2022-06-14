# TALLER DE PROGRAMACION 2
## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo. 

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí)
> 5. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo tambien funciona. 
> El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_supplies** con una collection llamada **sales**, ahí se encuentran aprox. 500 ventas de nuestro cliente.
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/sales debería retornar un json con 500 ventas. Sí por algun motivo no llegase a funcionar, solicita asistencia. 

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
> 1. Necesitamos un endpoint que nos devuelva una venta particular por _id
> 2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store... 
> 3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customer** por email
> 4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)

> ### SI TE DA EL TIEMPO DAME UN MANO TAMBIEN EN...
> 5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
>
> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas fuera del estandar de APIREST, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega
Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo.
2. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio




## Listado de endpoint
- /api/sales
- /api/sales/:id
- /api/sales/purchase/:purchase
- /api/sales/customer/:customerEmail
- /api/sales/unsatisfied/unsatis



