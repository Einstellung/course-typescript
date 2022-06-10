interface Vector2D {
    x: number;
    y: number
}
interface Vector3D {
    x: number;
    y: number;
    z: number
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y)
}

calculateLength({x:3, y: 4})
const v = {x:3, y: 4, z: 8, add: 123}
calculateLength(v)

function calculateLength1(v: Vector3D) {
    let length = 0
    for (const axis of Object.keys(v)) {
        // Vector3D的值可能性有很多
        const coord = v[axis]
        length += Math.abs(coord)
    }
    return length
}

/**
 * 我们该如何对类型进行赋值，因为额外属性检查只会在对象字面量赋值的时候发生，
 * 引入中间变量将会消除这种检查，所以最好使用对象字面量赋值的方式
 */

interface Room {
    value1: number;
    value2: string
}

const r: Room = {
    value1: 1,
    value2: '123',
    value3: 123
}

const obj = {
    value1: 1,
    value2: '123',
    value3: 123
}
// 子集可以绕过类型检查
const rNew: Room = obj

const obj1 = {
    value1: 1,
    value3: 123
}

const rNew1: Room = obj1