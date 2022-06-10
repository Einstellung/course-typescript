// 对数组
function getLength(array: any[]) {
  return array.length
}

// 对于对象
function hasTwelveLetterKey(o: {[key: string]: any}) {
  for (const key in o) {
    if (key.length === 12) {
      return true
    }
  }
  return false
}

// 对于函数
type Fn0 = () => any
type Fn1 = (arg: any) => any
type Fn2 = (...args: any[]) => any

const num1: Fn1 = (x) => {
  return x
}