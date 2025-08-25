"use strict";
{
    // Function to Calculate Area
    function calculateShapeArea(shape) {
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
    function main() {
        // Sample Input 1: Circle
        const circle = { shape: "circle", radius: 5 };
        console.log(`Circle area: ${calculateShapeArea(circle)}`);
        // Sample Input 2: Rectangle
        const rectangle = { shape: "rectangle", width: 10, height: 6 };
        console.log(`Rectangle area: ${calculateShapeArea(rectangle)}`);
    }
    // Execute Main Logic
    main();
    // Block Scoping
}
