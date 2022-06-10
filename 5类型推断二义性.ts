interface Vector3 {
  x: number;
  y: number;
  z: number
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis]
}

let x = "x"
let vec1 = {x: 10, y: 20, z: 30}
getComponent(vec1, x)

// y不能重新赋值，所以ts可以推断出一个更窄的类型
const y = "y"
getComponent(vec1, y)

// 添加as const之后，ts会将其推断为最窄类型
let z = "z" as const
getComponent(vec1, z)