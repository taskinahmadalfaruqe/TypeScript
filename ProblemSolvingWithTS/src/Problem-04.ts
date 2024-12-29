{
  // Block Socping
  // Define the Book interface
  interface Book {
    title: string;
    author: string;
    pages: number;
  }

  // Define the Magazine interface
  interface Magazine {
    title: string;
    publisher: string;
    issue: number;
  }

  // Create a union type
  type BookOrMagazine = Book | Magazine;

  // Create an intersection type
  type BookAndMagazine = Book & Magazine;

  // Example usage of the union type
  const item1: BookOrMagazine = {
    title: "Great Stories",
    author: "Jane Doe",
    pages: 300,
  };

  const item2: BookOrMagazine = {
    title: "Tech Monthly",
    publisher: "Tech Media",
    issue: 45,
  };

  // Example usage of the intersection type
  const item3: BookAndMagazine = {
    title: "Science Today",
    author: "Dr. Smith",
    pages: 120,
    publisher: "Knowledge Hub",
    issue: 12,
  };

  console.log("Union type example:", item1, item2);
  console.log("Intersection type example:", item3);

  // Block Socping
}
