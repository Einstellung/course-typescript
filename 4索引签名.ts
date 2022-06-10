/**
 * 使用索引签名可以让type或者interface更加灵活
 */

type Rocket = {[property: string]: string}
const rocket: Rocket = {
  name: '123',
  variant: '123',
  vha: 123,
}

// 更灵活的索引签名实现方式
type Vec3D = Record<"x" | "y" | "z",number>
type Vec3D1 = {[k in "x" | "y" | "z"]: number}
const vec: Vec3D = {
  "x": 123,
  "y": 123,
  "z": 123,  
}

type ABC = {[k in "a" | "b" | "c"]: k extends "b" ? string : number}
