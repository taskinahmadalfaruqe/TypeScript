{
  // Block Scoping
  // Define the User type with name and email
  type User = {
    name: string;
    email: string;
  };

  // Define the Admin type with an adminLevel property
  type Admin = {
    adminLevel: number;
  };

  // Create an intersection type AdminUser, combining User and Admin
  type AdminUser = User & Admin;

  // Function to describe the admin user
  function describeAdmin(user: AdminUser): string {
    return `${user.name} (Email: ${user.email}) is an admin with level ${user.adminLevel}.`;
  }

  // Example usage:
  const admin: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    adminLevel: 5,
  };

  console.log(describeAdmin(admin)); // Output: Alice (Email: alice@example.com) is an admin with level 5.

  // Block Scoping
}
