const techDictionary = [
{ id: 1, term: "API", definition: "Interfaz que permite la comunicación entre aplicaciones." },
{ id: 2, term: "Algorithm", definition: "Conjunto de pasos para resolver un problema." },
{ id: 3, term: "Array", definition: "Estructura de datos que almacena múltiples valores en una lista." },
{ id: 4, term: "Backend", definition: "Parte del sistema que maneja la lógica y la base de datos." },
{ id: 5, term: "Binary", definition: "Sistema numérico basado en 0 y 1 usado por las computadoras." },
{ id: 6, term: "Boolean", definition: "Tipo de dato que solo puede ser verdadero o falso." },
{ id: 7, term: "Cache", definition: "Almacenamiento temporal para acelerar el acceso a datos." },
{ id: 8, term: "Cloud", definition: "Servicios y almacenamiento accesibles a través de internet." },
{ id: 9, term: "CSS", definition: "Lenguaje usado para dar estilo a páginas web." },
{ id: 10, term: "Database", definition: "Sistema para almacenar y organizar datos." },
{ id: 11, term: "Debugging", definition: "Proceso de encontrar y corregir errores en el código." },
{ id: 12, term: "DOM", definition: "Estructura que representa el contenido de una página web." },
{ id: 13, term: "Frontend", definition: "Parte visual de una aplicación con la que interactúa el usuario." },
{ id: 14, term: "Function", definition: "Bloque de código que realiza una tarea específica." },
{ id: 15, term: "Git", definition: "Sistema de control de versiones para gestionar código." },
{ id: 16, term: "HTML", definition: "Lenguaje de marcado para estructurar páginas web." },
{ id: 17, term: "HTTP", definition: "Protocolo para la transferencia de información en la web." },
{ id: 18, term: "IDE", definition: "Entorno de desarrollo que facilita la programación." },
{ id: 19, term: "JavaScript", definition: "Lenguaje de programación usado para crear interactividad en la web." },
{ id: 20, term: "JSON", definition: "Formato ligero para intercambiar datos." },
{ id: 21, term: "Kernel", definition: "Núcleo del sistema operativo que gestiona recursos." },
{ id: 22, term: "Library", definition: "Conjunto de funciones reutilizables." },
{ id: 23, term: "Linux", definition: "Sistema operativo de código abierto." },
{ id: 24, term: "Loop", definition: "Estructura que repite un bloque de código." },
{ id: 25, term: "Machine Learning", definition: "Área de la IA que permite a las máquinas aprender de datos." },
{ id: 26, term: "Memory", definition: "Espacio donde se almacenan datos temporalmente." },
{ id: 27, term: "Module", definition: "Archivo o bloque de código reutilizable." },
{ id: 28, term: "Network", definition: "Conjunto de dispositivos conectados entre sí." },
{ id: 29, term: "Node", definition: "Entorno para ejecutar JavaScript fuera del navegador." },
{ id: 30, term: "NoSQL", definition: "Tipo de base de datos no relacional." },
{ id: 31, term: "Object", definition: "Estructura que agrupa datos y funciones." },
{ id: 32, term: "OOP", definition: "Paradigma basado en objetos y clases." },
{ id: 33, term: "Package", definition: "Conjunto de archivos distribuidos como una unidad." },
{ id: 34, term: "Parser", definition: "Herramienta que analiza y procesa texto o código." },
{ id: 35, term: "Protocol", definition: "Reglas para la comunicación entre sistemas." },
{ id: 36, term: "Python", definition: "Lenguaje de programación fácil de aprender y versátil." },
{ id: 37, term: "Query", definition: "Consulta para obtener datos de una base de datos." },
{ id: 38, term: "React", definition: "Librería de JavaScript para construir interfaces." },
{ id: 39, term: "Recursion", definition: "Función que se llama a sí misma." },
{ id: 40, term: "REST", definition: "Estilo de arquitectura para servicios web." },
{ id: 41, term: "Router", definition: "Dispositivo que dirige el tráfico en una red." },
{ id: 42, term: "Runtime", definition: "Entorno donde se ejecuta un programa." },
{ id: 43, term: "SQL", definition: "Lenguaje para gestionar bases de datos relacionales." },
{ id: 44, term: "Stack", definition: "Estructura de datos tipo pila (LIFO)." },
{ id: 45, term: "Terminal", definition: "Interfaz de línea de comandos." },
{ id: 46, term: "Thread", definition: "Unidad de ejecución dentro de un proceso." },
{ id: 47, term: "TypeScript", definition: "Superset de JavaScript con tipado estático." },
{ id: 48, term: "Variable", definition: "Espacio que almacena un valor." },
{ id: 49, term: "Virtual Machine", definition: "Software que simula un sistema operativo." },
{ id: 50, term: "Webpack", definition: "Herramienta para empaquetar archivos web." }
];

// Estado de la paginación
let currentPage = 1;
let rowsPerPage = 5;
let filteredData = [...techDictionary];

const searchInput = document.getElementById('searchInput');
const itemsPerPageSelect = document.getElementById('itemsPerPage');
const paginationContainer = document.getElementById('paginationControls');

// Función para resaltar texto
function highlightText(text, search) {
    if (!search) return text; // si no hay búsqueda, no resaltar

    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
}

function displayTermsInTable() {
    const tableBody = document.querySelector('#termTable tbody');
    tableBody.innerHTML = "";

    // Calcular límites
    let dataToShow = filteredData;
    
    if (rowsPerPage !== "all") {
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + parseInt(rowsPerPage);
        dataToShow = filteredData.slice(start, end);
    }

    dataToShow.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.id;
        const searchValue = searchInput.value.toLowerCase();
        row.insertCell(1).innerHTML = highlightText(item.term, searchValue );
        row.insertCell(2).innerHTML = highlightText(item.definition, searchValue );
    });

    setupPagination();
}

function setupPagination() {
    paginationContainer.innerHTML = "";
    if (rowsPerPage === "all") return;

    const pageCount = Math.ceil(filteredData.length / rowsPerPage);
    
    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPage) li.classList.add('active');

        const btn = document.createElement('button');
        btn.classList.add('page-link');
        btn.innerText = i;
        
        btn.addEventListener('click', () => {
            currentPage = i;
            displayTermsInTable();
        });

        li.appendChild(btn);
        paginationContainer.appendChild(li);
    }
}

// Evento de búsqueda
searchInput.addEventListener('input', () => {
    const text = searchInput.value.toLowerCase();
    filteredData = techDictionary.filter(item => 
        item.term.toLowerCase().includes(text)
        || item.definition.toLowerCase().includes(text)
    );
    currentPage = 1; // Reiniciar a la primera página al buscar
    displayTermsInTable();
});

// Evento de cambio de cantidad por página
itemsPerPageSelect.addEventListener('change', (e) => {
    rowsPerPage = e.target.value === "all" ? "all" : parseInt(e.target.value);
    currentPage = 1; // Reiniciar a la primera página
    displayTermsInTable();
});

// Inicialización
displayTermsInTable();