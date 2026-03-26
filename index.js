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
     

function displayTermsInTable(terms) {
  const table = document.getElementById('termTable');
  const tbody = table.querySelector('tbody');
  
  terms.forEach(item => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = item.id;
    row.insertCell(1).textContent = item.term;
  });
}

displayTermsInTable(techDictionary);