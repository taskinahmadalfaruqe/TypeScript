interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
  department: string;
}

type FilterCriteria = Partial<Employee>; // Filter can have any subset of the Employee properties

function filterEmployees(employees: Employee[], filter: FilterCriteria): Employee[] {
  return employees.filter(employee => {
    return Object.keys(filter).every(key => {
      if (key in employee) {
        return employee[key as keyof Employee] === filter[key as keyof FilterCriteria];
      }
      return false;
    });
  });
}

// Example usage:
const employees: Employee[] = [
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