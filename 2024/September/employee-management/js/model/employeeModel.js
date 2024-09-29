// employeeModel.js

export let employeesData =  [
    {
        "firstName": "Alice",
        "lastName": "Smith",
        "age": 28,
        "startDate": "2020-06-15",
        "department": "Marketing",
        "salary": 50000
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 35,
        "startDate": "2018-01-25",
        "department": "Sales",
        "salary": 60000
    },
    {
        "firstName": "Emma",
        "lastName": "Johnson",
        "age": 42,
        "startDate": "2015-03-12",
        "department": "IT",
        "salary": 70000
    },
    {
        "firstName": "Michael",
        "lastName": "Brown",
        "age": 30,
        "startDate": "2019-07-01",
        "department": "Finance",
        "salary": 55000
    },
    {
        "firstName": "Sophia",
        "lastName": "Williams",
        "age": 26,
        "startDate": "2021-05-20",
        "department": "HR",
        "salary": 45000
    },
    {
        "firstName": "David",
        "lastName": "Taylor",
        "age": 39,
        "startDate": "2017-09-14",
        "department": "Operations",
        "salary": 64000
    },
    {
        "firstName": "Laura",
        "lastName": "White",
        "age": 32,
        "startDate": "2016-11-03",
        "department": "Logistics",
        "salary": 50000
    }
];


export function getEmployees() {
    return employeesData;
}

export function addEmployee(employee) {
    employeesData.push(employee);
}

export function editEmployee(updatedEmployee) {
    const index = employeesData.findIndex(emp => emp.firstName === updatedEmployee.firstName);
    if (index !== -1) {
        employeesData[index] = updatedEmployee;
    }
}

export function deleteEmployee(firstName) {
    employeesData = employeesData.filter(emp => emp.firstName !== firstName);
}

export function loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem("employeesData");
    if (storedEmployees) {
        employeesData = JSON.parse(storedEmployees);
    }
}

export function saveEmployeesToLocalStorage() {
    localStorage.setItem("employeesData", JSON.stringify(employeesData));
}
