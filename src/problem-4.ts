{
    //
    type Circle = {
        shape: 'circle';
        radius: number;
    };
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle

    const calculateShapeArea = (shape: Shape): number => {

        if (shape.shape === 'circle') {
            return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2))
        }
        if (shape.shape === 'rectangle') {
            return shape.width * shape.height
        }
        throw new Error("OOPS, might be an incorrect input");
    };


    //
}