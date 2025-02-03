{
    // Block Scoping 
    type ValidateSchema<T, S> = S extends { type: "object" }
    ? T extends object
      ? {
          [K in keyof S["properties"]]-?: K extends keyof T
            ? ValidateSchema<T[K], S["properties"][K]>
            : S["properties"][K] extends { optional: true }
            ? undefined
            : never;
        }
      : never
    : S extends { type: "array" }
    ? T extends Array<any>
      ? T[number] extends infer U
        ? ValidateSchema<U, S["items"]>
        : never
      : never
    : S extends { type: infer Primitive }
    ? Primitive extends "string"
      ? T extends string
        ? T
        : never
      : Primitive extends "number"
      ? T extends number
        ? T
        : never
      : Primitive extends "boolean"
      ? T extends boolean
        ? T
        : never
      : Primitive extends "null"
      ? T extends null
        ? T
        : never
      : never
    : never;
  
  // Test Cases
  type Schema = {
    type: "object";
    properties: {
      name: { type: "string" };
      age: { type: "number"; optional: true };
      preferences: {
        type: "object";
        properties: {
          theme: { type: "string" };
          notifications: { type: "boolean" };
        };
      };
      tags: {
        type: "array";
        items: { type: "string" };
      };
    };
  };
  
  type ValidInput = {
    name: string;
    age?: number; // Optional
    preferences: {
      theme: string;
      notifications: boolean;
    };
    tags: string[];
  };
  
  type InvalidInput1 = {
    name: string;
    preferences: {
      theme: string;
    }; // Missing `notifications`
    tags: string[];
  };
  
  type ValidResult = ValidateSchema<ValidInput, Schema>; // Should pass
  type InvalidResult = ValidateSchema<InvalidInput1, Schema>; // Should cause a TypeScript error
    // Block Scoping 
}