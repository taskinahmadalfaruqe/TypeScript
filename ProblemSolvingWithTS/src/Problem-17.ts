{
  // Block Scoping
  // Type Definitions
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  // Function to Calculate Area
  function calculateShapeArea(shape: Shape): number {
    switch (shape.shape) {
      case "circle":
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
      case "rectangle":
        return shape.width * shape.height;
      default:
        throw new Error("Invalid shape type");
    }
  }

  // Main Logic
  function main(): void {
    // Sample Input 1: Circle
    const circle: Circle = { shape: "circle", radius: 5 };
    console.log(`Circle area: ${calculateShapeArea(circle)}`);

    // Sample Input 2: Rectangle
    const rectangle: Rectangle = { shape: "rectangle", width: 10, height: 6 };
    console.log(`Rectangle area: ${calculateShapeArea(rectangle)}`);
  }

  // Execute Main Logic
  main();

  // Block Scoping
}
