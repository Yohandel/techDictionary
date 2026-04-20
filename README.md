# 📘 Diccionario Tecnológico

Aplicación web sencilla desarrollada con **JavaScript vanilla, HTML y Bootstrap**, que permite visualizar, buscar y paginar términos tecnológicos.

## 🚀 Características

- 🔎 Búsqueda en tiempo real de términos
- 📄 Paginación dinámica
- 🔢 Selección de cantidad de elementos por página
- ✨ Resaltado del texto buscado
- 💻 Interfaz responsiva con Bootstrap

## 🛠️ Tecnologías utilizadas

- HTML5  
- JavaScript (Vanilla JS)  
- Bootstrap 5  

## 📂 Estructura del proyecto
📁 proyecto
├── index.html
└── index.js

## 📊 Funcionamiento

El sistema utiliza un arreglo de objetos que representa el diccionario tecnológico:

```js
const techDictionary = [
  { id: 1, term: "API" },
  { id: 2, term: "Algorithm" },
  { id: 3, term: "Array" },
  ...
];

🔍 Búsqueda
Filtra los términos en tiempo real mientras el usuario escribe
Resalta las coincidencias usando <mark>

📄 Paginación
Permite navegar entre páginas
Se adapta automáticamente al número de resultados

📌 Control de visualización
Opciones: 1, 5, 10, 20 o todos los elementos

⚙️ Cómo ejecutar el proyecto
Clona el repositorio:
git clone https://github.com/Yohandel/techDictionary.git

Abre el proyecto:
cd techDictionary

Ejecuta el proyecto:
Simplemente abre el archivo index.html en tu navegador

⚠️ No requiere instalación de dependencias ni servidor

🧠 Lógica principal
displayTermsInTable() → Renderiza la tabla
setupPagination() → Genera los botones de paginación
highlightText() → Resalta coincidencias en la búsqueda
Eventos:
input → búsqueda en tiempo real
change → cambio de cantidad por página

👨‍💻 Autores
Yohandel Cuevas
Oneal Rubio
Angel Sanchez
Hianny Marte