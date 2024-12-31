{
  // Block Scoping
  // Type alias for User data
  type User = {
    name: string;
    age: number;
  };

  // Asynchronous function to simulate fetching user data
  async function fetchUserData(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John Doe", age: 30 });
      }, 1000); // Simulate a 1-second delay
    });
  }

  // Example usage:
  (async () => {
    console.log("Fetching user data...");
    const user = await fetchUserData();
    console.log("User data fetched:", user);
  })();
  // Block Scoping
}
