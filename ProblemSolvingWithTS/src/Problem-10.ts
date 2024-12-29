{
  // Block Scoping
  class DisplayNameHandler {
    getDisplayName(name: string | null | undefined): string {
      return name ?? "Anonymous";
    }
  }

  // Example Usage
  const handler = new DisplayNameHandler();
  console.log(handler.getDisplayName(null)); // Output: "Anonymous"
  console.log(handler.getDisplayName(undefined)); // Output: "Anonymous"
  console.log(handler.getDisplayName("John")); // Output: "John"
  // Block Scoping
}
