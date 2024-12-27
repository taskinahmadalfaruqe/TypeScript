{
  // Block Scoping
  // Define types for the employee and address structure
  interface Address {
    city?: string;
    zipCode?: string;
  }

  interface Employee {
    name: string;
    address?: Address;
  }

  // Define the function to retrieve the city safely using optional chaining
  function getEmployeeCity(employee: Employee): string {
    return employee?.address?.city ?? "City not available";
  }

  // Example usage:

  // Employee with address and city
  const employee1: Employee = {
    name: "John Doe",
    address: {
      city: "New York",
      zipCode: "10001",
    },
  };

  console.log(getEmployeeCity(employee1)); // Output: New York

  // Employee without address or city
  const employee2: Employee = {
    name: "Jane Smith",
  };

  console.log(getEmployeeCity(employee2)); // Output: City not available

  // Employee with address but no city
  const employee3: Employee = {
    name: "Alice Johnson",
    address: {
      zipCode: "90210",
    },
  };
  console.log(getEmployeeCity(employee3)); // Output: City not available
  // Block Scoping
}