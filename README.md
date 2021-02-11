# Proyecto Final para la cursada de React en Coderhouse

Este proyecto fue desarrollado como ejercitación de los temas vistos en la cursada de React en CoderHouse.

## De qué se trata el proyecto
Este proyecto emula un ecommerce, en este caso, una página dedicada a la venta de periféricos gamer para pc.
## Qué funcionalidades tiene el proyecto
La aplicación se extiende sólo del lado del cliente, por lo que no cuenta con Backend, sino que solamente posee desarollo Frontend.

### Integración con Firestore
La aplicación está integrada a Cloud Firestore, un servicio de base de datos de Firebase (Google).
Este servicio permite almacenar datos, como por ejemplo un listado de productos, características, etc. y pedir esos datos desde la app.

### React-router-dom
React-dom es instalado en la aplicación para crear rutas de navegación dinámicas.

### General
El usuario recibe un landing (pagina de inicio) con productos, cada uno lleva consigo un enlace para ver su página de detalles. Además tiene la capacidad de navegar entre las distintas categorías desde la navbar, las cuales dividen los productos por su categoría correspondiente.
En la página de detalle de cada producto, el usuario tiene la capacidad de seleccionar que cantidad de ese producto desea añadir al carrito, limitado por el stock de dicho producto. Luego de agregar los productos al carrito, podrá seguir su compra o terminarla haciendo uso de 2 simples botones.
Si el usuario clickea "seguir comprando" será redirigido al home y en caso contrario, al clickear "termianr mi compra" sera redirigido al carrito de compras.
En el carrito se pueden ver los productos agregados con su cantidad, subtotal y el monto total de la compra. También está la opción de quitar los productos 1 por 1 o vaciar completamente el carrito. Por último, estará la opción de comprar haciendo click en el botón "comprar".
En caso de clickear el botón de compra, se le pedirá al usuario que llene un formulario con sus datos y se le otorgará un código de orden de compra.

## Cómo descargar e instalar este proyecto:

### 1) Descargar el repositorio
Ir a "Code" (botón verde) -> "Descargar ZIP".

### 2) Descomprimir la carpeta en la ubicación deseada

### 3) Abrir la consola para instalar dependencias
Hacer click en la barra de dirección del repositorio, escribir "cmd" y presionar la tecla Enter.
La consola se abrirá ya ubicada en la ubicación correcta.
Escribir en la consola "npm i" y presionar nuevamente la tecla Enter. Esto hará que npm lea el archivo "package.json" del repositorio y descargue las dependencias utilizadas en el proyecto.

### 4) Correr el proyecto
Ahora el usuario ya puede acceder al entorno de trabajo. En la consola, situado en la ubicación del proyecto, escribir "npm start", Enter, y esperar a que npm abra la aplicación en el navegador. 
Recordar tener un editor de código instalado para trabajar sobre el proyecto (por ejemplo: Visual Studio Code).