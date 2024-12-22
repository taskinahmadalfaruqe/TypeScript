{
  // Block Scoping

//  Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.
  // Define the Book interface
  interface Book {
    title: string;
    author: string;
    pages: number;
  }

  // Define the Magazine interface
  interface Magazine {
    title: string;
    editor: string;
    issueNumber: number;
  }

  // Union type: can be either a Book or a Magazine
  type BookOrMagazine = Book | Magazine;

  // Intersection type: must be both a Book and a Magazine
  type BookAndMagazine = Book & Magazine;

  // Block Scoping
}
