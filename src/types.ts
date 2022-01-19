interface PointLike {
    x: number;
    y: number;
}

interface NameAware {
    name: string;
}

function logPoint(point: PointLike): void {
    console.debug(`x = ${point.x}, y: ${point.y}`);
}

function logName(named: NameAware): void {
    console.debug(`Hola ${named.name}!`);
}

const obj = {
    x: 10,
    y: 20,
    name: 'Yape'
};

logPoint(obj);
logName(obj);