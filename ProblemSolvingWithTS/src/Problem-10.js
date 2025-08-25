"use strict";
{
    // Block Scoping
    class DisplayNameHandler {
        getDisplayName(name) {
            return name !== null && name !== void 0 ? name : "Anonymous";
        }
    }
    // Example Usage
    const handler = new DisplayNameHandler();
    console.log(handler.getDisplayName(null)); // Output: "Anonymous"
    console.log(handler.getDisplayName(undefined)); // Output: "Anonymous"
    console.log(handler.getDisplayName("John")); // Output: "John"
    // Block Scoping
}
