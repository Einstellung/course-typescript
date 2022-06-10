# 泛型

**接口是一种方面(Aspect)描述**。比如松树可以生长，那么松树是：Growable；动植物都可以进化，那么它们是Evolvable。

**泛型(Generics)**是对共性的提取

Array\<T\> 分离的是数据可以被线性访问、存储的共性。Stream\<T\>分离的是数据可以随着时间产生的共性。Promise\<T\>分离的是数据可以被异步计算的特性。

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```



### 泛型约束

下面程序执行会报错

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  // Property 'length' does not exist on type 'Type'.
  return arg;
}
```

增加约束

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); 
  return arg;
}
```



用keyof增加约束：

```tsx
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}


let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m"); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

之所以可以使用keyof增加约束在于，对于TS而言所有对象的key是静态的，故而可以用keyof操作符得到所有的key。如果一个对象的类型是`any` ，那么keyof就没有意义了。 



### 实例化泛型约束

ts用`new ()`方式来描述构造函数

```ts
function create<Type>(c: { new (): Type }): Type {
  return new c();
}

create(Foo) // Foo的实例
```



# infer

`infer` 关键字告诉typescript V不是一个存在的类型，而是要推导的。可以用于类型提取

```tsx
type Flatterned<T> = T extends (infer V)[] ? Flatterned<V>[] : T


type K = Flatterned<Array<Array<number>>> // ? K

// 举例
 Array<number> -> V: number
```

