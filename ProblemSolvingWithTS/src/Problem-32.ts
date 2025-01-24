{
    // Block Scoping
    type DeepReadonly<T> = T extends Function
        ? T // Functions remain unchanged
        : T extends Array<infer U>
        ? ReadonlyArray<DeepReadonly<U>> // Handle arrays
        : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> } // Handle objects recursively
        : T; // Handle primitive types

    // Test cases
    type Original = {
        a: number;
        b: {
            c: string;
            d: {
                e: boolean;
            };
        };
        f: number[];
    };

    type Result = DeepReadonly<Original>;

    // Verifying the result
    const readonlyObject: Result = {
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