const techDictionary = [
{ id: 1, term: "API" },
{ id: 2, term: "Algorithm" },
{ id: 3, term: "Array" },
{ id: 4, term: "Backend" },
{ id: 5, term: "Binary" },
{ id: 6, term: "Boolean" },
{ id: 7, term: "Cache" },
{ id: 8, term: "Cloud" },
{ id: 9, term: "CSS" },
{ id: 10, term: "Database" },
{ id: 11, term: "Debugging" },
{ id: 12, term: "DOM" },
{ id: 13, term: "Frontend" },
{ id: 14, term: "Function" },
{ id: 15, term: "Git" },
{ id: 16, term: "HTML" },
{ id: 17, term: "HTTP" },
{ id: 18, term: "IDE" },
{ id: 19, term: "JavaScript" },
{ id: 20, term: "JSON" },
{ id: 21, term: "Kernel" },
{ id: 22, term: "Library" },
{ id: 23, term: "Linux" },
{ id: 24, term: "Loop" },
{ id: 25, term: "Machine Learning" },
{ id: 26, term: "Memory" },
{ id: 27, term: "Module" },
{ id: 28, term: "Network" },
{ id: 29, term: "Node" },
{ id: 30, term: "NoSQL" },
{ id: 31, term: "Object" },
{ id: 32, term: "OOP" },
{ id: 33, term: "Package" },
{ id: 34, term: "Parser" },
{ id: 35, term: "Protocol" },
{ id: 36, term: "Python" },
{ id: 37, term: "Query" },
{ id: 38, term: "React" },
{ id: 39, term: "Recursion" },
{ id: 40, term: "REST" },
{ id: 41, term: "Router" },
{ id: 42, term: "Runtime" },
{ id: 43, term: "SQL" },
{ id: 44, term: "Stack" },
{ id: 45, term: "Terminal" },
{ id: 46, term: "Thread" },
{ id: 47, term: "TypeScript" },
{ id: 48, term: "Variable" },
{ id: 49, term: "Virtual Machine" },
{ id: 50, term: "Webpack" }
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
        row.insertCell(1).innerHTML = highlightText(item.term, searchValue);    });

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