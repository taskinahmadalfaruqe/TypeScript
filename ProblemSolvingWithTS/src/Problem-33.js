"use strict";
function filterEmployees(employees, filter) {
    return employees.filter(employee => {
        return Object.keys(filter).every(key => {
            if (key in employee) {
                return employee[key] === filter[key];
            }
            return false;
        });
    });
}
// Example usage:
const employees = [
    { id: 1, name: 'Alice', role: 'Developer', salary: 80000, department: 'Engineering' },
    { id: 2, name: 'Bob', role: 'Manager', salary: 90000, department: 'HR' },
    { id: 3, name: 'Charlie', role: 'Developer', salary: 75000, department: 'Engineering' },
    { id: 4, name: 'David', role: 'Designer', salary: 70000, department: 'Design' }
];
console.log(filterEmployees(employees, { role: 'Developer', department: 'Engineering' }));
// Output: [
//   { id: 1, name: 'Alice', role: 'Developer', salary: 80000, department: 'Engineering' },
//   { id: 3, name: 'Charlie', role: 'Developer', salary: 75000, department: 'Engineering' }
// ]
