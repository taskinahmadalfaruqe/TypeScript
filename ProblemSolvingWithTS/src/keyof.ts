{
  // Block Scoping
  // Define a simple Book type
  type Book = {
    title: string;
    author: string;
    yearPublished: number;
  };

  // Use `keyof` to get the keys of the Book type
  type BookKeys = keyof Book; // "title" | "author" | "yearPublished"

  // Function that takes a Book and a key, and returns the value of that key
  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key];
  }

  const myBook: Book = {
    title: "The Great Typescript",
    author: "Mezbaul Abedin Persian",
    yearPublished: 2025,
  };

  // We can only pass valid keys of `Book`
  console.log(getBookProperty(myBook, "title")); // "The Great Gatsby"
  // console.log(getBookProperty(myBook, "pages")); // Error: Argument of type '"pages"' is not assignable to parameter of type '"title" | "author" | "yearPublished"'
  // Block Scoping
}
