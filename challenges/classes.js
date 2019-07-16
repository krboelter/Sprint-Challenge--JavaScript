// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker {
    constructor(attribute) {
        this.long = attribute.long;
        this.width = attribute.width;
        this.height = attribute.height;
    }

    volume() {
        return this.long * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.long * this.width + this.long * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(attribute) {
        super(attribute);
    }

    cubeVolume() {
        return this.long * this.width * this.height;
    }

    cubeSurfaceArea() {
        return 2 * (this.long * this.width + this.long * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker ({
    long: 4,
    width: 5,
    height: 5
});

const cube = new CubeMaker ({
    long: 3,
    width: 6,
    height: 9
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volume());
console.log(cube.surfaceArea());