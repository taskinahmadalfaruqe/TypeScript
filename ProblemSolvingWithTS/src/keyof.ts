{
  // Block Scoping
  
  // Define a simple Book type
  type BookCategory = {
    title: string;
    author: string;
    yearPublished: number;
  };

  // Use `keyof` to get the keys of the Book type
  type BookKeys = keyof BookCategory; 

  // Function that takes a Book and a key, and returns the value of that key
  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key];
  }

  const myBook: BookCategory = {
    title: "The Programming World",
    author: "Programming Hero",
    yearPublished: 2024,
  };

  // We can only pass valid keys of `Book`
  console.log(getBookProperty(myBook, "title")); 

  // Block Scoping
}
