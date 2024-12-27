{
  // Block Scoping
  // Define the function to retrieve the city safely using optional chaining
  function getEmployeeCity(employee) {
    return employee?.address?.city ?? "City not available";
  }

  // Example usage:

  // Employee with address and city
  const employee1 = {
    name: "John Doe",
    address: {
      city: "New York",
      zipCode: "10001",
    },
  };

  console.log(getEmployeeCity(employee1)); // Output: New York

  // Employee without address or city
  const employee2 = {
    name: "Jane Smith",
  };

  console.log(getEmployeeCity(employee2)); // Output: City not available

  // Employee with address but no city
  const employee3 = {
    name: "Alice Johnson",
    address: {
      zipCode: "90210",
    },
  };

  console.log(getEmployeeCity(employee3)); // Output: City not available

  // Block Scoping
}
