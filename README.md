# 🎨 Mashup Visual Interactivo con p5.js y Processing.js - EEST N°1

Este proyecto es una mini aplicación web que permite **dibujar en un canvas interactivo** y **generar animaciones automáticas**, utilizando las bibliotecas **p5.js** y **Processing.js**. 

---

## 🚀 Tecnologías Utilizadas

- **HTML**: Estructura de la página web y elementos de control.
- **CSS**: Estilos modernos, diseño responsivo y separación visual de secciones.
- **JavaScript**: Lógica de dibujo, interacción del usuario, animaciones automáticas y eventos.
- **[p5.js](https://p5js.org/)**: Biblioteca para dibujo interactivo.
- **[Processing.js](http://processingjs.org/)**: Biblioteca para animaciones visuales y efectos dinámicos.

---

## ⚙️ Funcionalidades

- 🎨 Canvas p5.js interactivo para dibujar:
  - Dibujo con el mouse.
  - Cambio de color con clic izquierdo.
  - Cambio de forma con cualquier tecla.
  - Tecla `B` para borrar como goma.
  - Tecla `E` para borrar todo el dibujo.
  - Guardado de imagen en formato PNG.
  - Iniciar/Detener animación con botón.

- ⚡ Canvas Processing.js con animaciones:
  - Generación de figuras al hacer clic.
  - Movimiento, rotación y cambio de color automático.
  - Autodestrucción de figuras tras un tiempo.
  - Reinicio de canvas con botón.

---

## 🧪 Instrucciones para Probar el Proyecto del Mashup Visual

Para probar la aplicación de dibujo y animaciones interactivas, seguí estos pasos:

---

1. **Descargar el proyecto desde GitHub:**
   * Ve a esta página: [https://github.com/Elmaciiiii/actividad12_SotodelaColina.git](https://github.com/Elmaciiiii/actividad12_SotodelaColina.git)
   * Haz clic en el botón verde que dice **"Code"**.
   * Elegí la opción **"Download ZIP"** y guardá el archivo en tu computadora.

---

2. **Extraer el archivo ZIP:**
   * Buscá el archivo ZIP descargado y hacé clic derecho para **extraer su contenido**.
   * Se creará una carpeta llamada `actividad12_SotodelaColina-main` o similar.

---

3. **Abrir la carpeta del proyecto en Visual Studio Code:**
   * Abrí **Visual Studio Code**.
   * En la barra de menú, andá a **"Archivo" (File)** y seleccioná **"Abrir Carpeta" (Open Folder)**.
   * Navegá hasta la carpeta que se creó al extraer el ZIP y seleccioná **"Abrir"**.

---

4. **Abrir `index.html` con Live Server:**
   * 📦 **Asegurate de tener instalada la extensión "Live Server" en Visual Studio Code.**
     - Podés buscarla en la sección de extensiones y hacer clic en **"Instalar"**.
   * En el panel de archivos, **abrí el archivo `index.html`**.
   * Hacé clic derecho dentro del archivo abierto y seleccioná **"Open with Live Server"**.
   * La página se abrirá automáticamente en tu navegador.

---

5. **Interactuar con el mashup visual:**
   * Dibujá en el canvas superior usando el mouse y el teclado para cambiar color o forma.
   * Presioná `B` para borrar con goma o `E` para limpiar todo.
   * Hacé clic en “Guardar imagen” para descargar tu dibujo en PNG.
   * En el segundo canvas, hacé clic para generar figuras que se animan solas.
   * Usá el botón “Reiniciar Processing” para limpiar las animaciones.

---

✅ La página incluye:
- Interacción con teclado y mouse.
- Canvas independientes con experiencias visuales distintas.
- Controles para iniciar/detener animaciones.
- Opción para guardar el dibujo como imagen.

---

## 🗂️ Estructura del Proyecto
```plaintext
.
├── index.html      // Página principal con estructura de secciones y botones
├── styles.css      // Estilos visuales del sitio
└── script.js       // Lógica JS para interacción, dibujo y animaciones
