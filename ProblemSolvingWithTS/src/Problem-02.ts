{
  // Block scope
  // Define a type for the role
type Role = 'admin' | 'user' | 'guest';

// Define a User class
class User {
  name: string;
  age: number;
  role?: Role;

  constructor(name: string, age: number, role?: Role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  // Method to log user details
  logDetails(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Role: ${this.role ?? 'No role specified'}`);
  }
}

// Example usage:

// Create instances of the User class
const user1 = new User('Alice', 25, 'admin');
const user2 = new User('Bob', 30);
const user3 = new User('Charlie', 22, 'guest');

// Log details for each user
user1.logDetails();
// Output:
// Name: Alice
// Age: 25
// Role: admin

user2.logDetails();
// Output:
// Name: Bob
// Age: 30
// Role: No role specified

user3.logDetails();
// Output:
// Name: Charlie
// Age: 22
// Role: guest

  // Block scope
}