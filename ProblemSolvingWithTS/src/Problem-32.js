"use strict";
{
    // Verifying the result
    const readonlyObject = {
        a: 42,
        b: {
            c: "hello",
            d: {
                e: true,
            },
        },
        f: [1, 2, 3],
    };
    // readonlyObject.a = 10; // Error: Cannot assign to 'a' because it is a read-only property.
    // readonlyObject.b.c = "world"; // Error: Cannot assign to 'c' because it is a read-only property.
    // readonlyObject.f.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
    // Block Scoping
}
