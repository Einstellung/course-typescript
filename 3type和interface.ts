/** 
 * type和interface在大部分情况用法一致
*/
type TState =  {
  name: string;
  capital: string
}
interface InState {
  name: string;
  capital: string
}

type TPair<T> = {
  first: T;
  second: T
}
interface IPair<T> {
  first: T;
  second: T
}

const haha: TPair<string> = {first: 1, second: 2}

// 有联合的type没有联合的interface
type A = "a" | "b"

// interface独有声明合并
interface IState {
  name: string;
  capital: string;
}
interface IState {
  population: number
}

const John: IState = {
  name: "John",
  capital: "US",
  population: 1000
}