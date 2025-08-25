"use strict";
{
    // Define the function to retrieve the city safely using optional chaining
    function getEmployeeCity(employee) {
        var _a, _b;
        return (_b = (_a = employee === null || employee === void 0 ? void 0 : employee.address) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : "City not available";
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
