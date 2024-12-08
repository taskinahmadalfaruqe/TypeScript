{
  // Block Scoping
  // Define the union type for Circle and Rectangle
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

  function calculateShapeArea(InputShapeData: Shape): number {
    if (InputShapeData.shape === "circle") {
      let radius = InputShapeData.radius;
      return parseFloat((Math.PI * radius * radius).toFixed(2));
    } else if (InputShapeData.shape === "rectangle") {
      let height = InputShapeData.height;
      let width = InputShapeData.width;
      return height * width;
    } else {
      throw new Error("Unknown shape type");
    }
  }

  // Sample Input 1
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  // Sample Input 2
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 10,
    height: 6,
  });
  console.log(rectangleArea);

  // Block Scoping
}
