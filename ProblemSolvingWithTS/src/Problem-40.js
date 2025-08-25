"use strict";
{
    // Function that takes a Book and a key, and returns the value of that key
    function getBookProperty(book, key) {
        return book[key];
    }
    const myBook = {
        title: "The Programming World",
        author: "Programming Hero",
        yearPublished: 2024,
    };
    // We can only pass valid keys of `Book`
    console.log(getBookProperty(myBook, "title"));
    // Block Scoping
}
