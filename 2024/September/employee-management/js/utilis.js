// Function to save employees to localStorage
function saveEmployeesToLocalStorage() {
    localStorage.setItem("employeesData", JSON.stringify(employeesData));
}

// Function to load employees from localStorage
function loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem("employeesData");
    if (storedEmployees) {
        employeesData = JSON.parse(storedEmployees);
    }
}
// loadEmployeesFromLocalStorage();
