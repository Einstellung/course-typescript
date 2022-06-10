/** 
 * instanceof检查是JavaScript的运行时操作符，在运行时发生的，对值进行操作
 * 但Rectangle却是一个类型，它无法影响运行时的行为
 * 在编译成JavaScript的过程中，Typescript会将interface、type等类型全部擦除
*/

// interface Square { width: number }
// interface Rectangle extends Square { height: number }
// type Shape = Square | Rectangle

// function calculateArea(shape: Shape) {
//     if (shape instanceof Rectangle) {
//         return shape.width * shape.height
//     } else {
//         return shape.width * shape.width
//     }
// }


/* 运行时类型重建 */
function calculateArea2(shape: Shape) {
  if ("height" in shape) {
      return shape.width * shape.height
  } else {
      return shape.width * shape.width
  }
}

/* 引入标签，将类型保留到运行时可用 */
interface Square { width: number; kind: 'square' }
interface Rectangle { width: number; height: number; kind: 'rectangle' }
type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
    if (shape.kind == 'rectangle') {
        return shape.width * shape.height
    } else {
        return shape.width * shape.width
    }
}

/* class可以同时引入类型和值 */
class Square {
  constructor(public width: number) {}
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width)
  }
}
type newShape = Square | Rectangle

function calculateArea3(shape: Shape) {
  // 之前的interface Rectangle中的Rectangle是类型，这里的Rectangle是值
  if (shape instanceof Rectangle) {
      return shape.width * shape.height
  } else {
      return shape.width * shape.width
  }
}