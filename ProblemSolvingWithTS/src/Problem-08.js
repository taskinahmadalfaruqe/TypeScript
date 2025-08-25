"use strict";
{
    // Function to describe the admin user
    function describeAdmin(user) {
        return `${user.name} (Email: ${user.email}) is an admin with level ${user.adminLevel}.`;
    }
    // Example usage:
    const admin = {
        name: "Alice",
        email: "alice@example.com",
        adminLevel: 5,
    };
    console.log(describeAdmin(admin)); // Output: Alice (Email: alice@example.com) is an admin with level 5.
    // Block Scoping
}
