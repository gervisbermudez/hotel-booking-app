# README - Aplicación de Booking de Hotel

Este es el README para la aplicación de Booking de Hotel. A continuación, se detallan los puntos relevantes sobre la aplicación y cómo utilizarla.

## Características de la Aplicación

- Búsqueda de hoteles: Los usuarios pueden buscar hoteles según su tipo de usuario y un rango de fechas especificado.
- Interfaz intuitiva: La aplicación cuenta con una interfaz de usuario amigable y fácil de usar.
- Uso de Vue.js: La aplicación ha sido desarrollada utilizando el framework Vue.js, lo cual facilita el desarrollo y la interactividad de la interfaz de usuario.
- Gestión de estado con Pinia: Para el manejo del estado de la aplicación, se ha utilizado Pinia, una biblioteca de gestión de estado basada en Vue 3 que facilita el almacenamiento y la recuperación de datos en la aplicación.
- Pruebas con ViteTest: Las pruebas unitarias y de integración se han realizado utilizando ViteTest, una biblioteca de pruebas optimizada para proyectos Vite.
- Estilos con SCSS: Para la estilización de la aplicación, se ha utilizado SCSS (Sass), un preprocesador de CSS que permite escribir estilos más eficientes y reutilizables.

## Instalación y Configuración

Sigue los siguientes pasos para instalar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina:
   ```
   git clone https://github.com/gervisbermudez/hotel-booking-app
   ```

2. Navega a la carpeta del proyecto:
   ```
   cd nombre-repositorio
   ```

3. Instala las dependencias utilizando npm o yarn:
   ```
   npm install
   ```
   o
   ```
   yarn install
   ```

4. Inicia la aplicación en modo de desarrollo:
   ```
   npm run dev
   ```
   o
   ```
   yarn dev
   ```

5. Abre tu navegador web y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

El proyecto sigue una estructura común utilizada en aplicaciones Vue.js:

- `public/`: Contiene los archivos estáticos de la aplicación.
- `src/`: Contiene el código fuente de la aplicación.
  - `assets/`: Archivos de recursos como imágenes, iconos, etc.
  - `components/`: Componentes reutilizables de la aplicación.
  - `store/`: Configuración y módulos de Pinia para la gestión del estado.
  - `utils/`: Utilidades y funciones auxiliares.
  - `App.vue`: Componente principal de la aplicación.
  - `main.ts`: Punto de entrada de la aplicación.

## Pruebas

El proyecto incluye pruebas unitarias y de integración para garantizar el correcto funcionamiento de la aplicación. Las pruebas se encuentran en la carpeta `tests/` y se pueden ejecutar utilizando el siguiente comando:

```
npm run test
```
o
```
yarn test
```

## Diseño

El diseño de la aplicación de Booking de Hotel se encuentra disponible en Figma. Puedes acceder al diseño completo haciendo clic en el siguiente enlace: [Diseño en Figma](https://www.figma.com/file/GUIAyDNZFzeP1pILyqUfgg/Hotel-Booking?type=design&node-id=4%3A6&t=GsKHwV025CFBD3vF-1)


## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Realiza un fork de este repositorio.
2. Crea una rama con una descripción clara de la nueva funcionalidad o corrección