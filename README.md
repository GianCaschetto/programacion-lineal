# Documentación de la Aplicación de Resolución de Problema de Programación Lineal
Esta documentación describe una aplicación desarrollada en React que resuelve un problema de programación lineal simple. La aplicación permite al usuario ingresar datos relacionados con la producción de productos y encuentra la asignación óptima de materias primas para minimizar el costo total de producción.

## Requisitos
Para ejecutar esta aplicación, asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema.
Una vez instalada

## ¿Qué debe evitar?
1. Las restricciones como disponibilidad de materia prima debe ser mayor o igual a la suma de disponibilidades de productos
2. Si su problema no sale con solucion, en consola puede ver las especificaciones del resultado si es factible, encerrado y resultado final (Desarrollador)
3. Evitar mutar algun objeto o array en el codigo para que no se rompa el codigo

## Libreria utilziada
Se utilizo la libreria javascript-lp-solver para resolver el problema de programacion entera lineal con restricciones
https://www.npmjs.com/package/javascript-lp-solver

## Instalación
Clona el repositorio de la aplicación desde GitHub o crea un nuevo proyecto React utilizando create-react-app o vite.

> npm install
> npm run dev

### Uso de la Aplicación
La aplicación te permite ingresar datos sobre la producción de productos y encontrar la asignación óptima de materias primas para minimizar el costo total de producción. Sigue estos pasos:

Número de Productos: Ingresa el número de productos que deseas producir.

Costos de Producción: Una vez que hayas ingresado el número de productos, se mostrarán campos para ingresar los costos de producción de cada producto. Ingresa los costos respectivos para cada producto.

Disponibilidad de Materias Primas: Ingresa la disponibilidad de materias primas que tienes para la producción.

Resolver: Haz clic en el botón "Resolver" para que la aplicación encuentre la asignación óptima de materias primas y el costo total de producción.

### Resultados
Después de hacer clic en "Resolver", la aplicación mostrará los resultados en la misma pantalla. Los resultados incluirán:

Asignación Óptima de Materias Primas: Mostrará la cantidad de materias primas asignadas a cada producto.

Costo Total de Producción: Mostrará el costo total de producción.

Si no se encuentra una solución factible para los datos ingresados, se mostrará un mensaje indicando que no se encontró una solución factible.

#### Contribución
Si deseas contribuir a esta aplicación, siéntete libre de hacerlo. Puedes enviar solicitudes de extracción (pull requests) en el repositorio de GitHub.

# Diagrama de Flujo
![diagramaLinearProgramming](https://github.com/GianCaschetto/programacion-lineal/assets/83784934/8d63eea3-342e-4c3d-a500-dc8a018dcca2)

