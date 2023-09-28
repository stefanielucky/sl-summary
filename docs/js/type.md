# 类型

## js内置类型
js中一共有七种内置类型，可以划分为两大类：基本类型和对象
其中基本类型包含： `null`, `undefined`, `boolean`, `number`, `string`, `symbol`

对象就是`Object`，对象又包含了`Array`，`Function`，`undefined`。`null`类型

ES6又提供了`Set`、`Map`类型

(js中，基本类型的存储是直接存值，即基本类型在赋值的时候是按值传递；对象在js中存储的是该值的内存地址，即对象类型在赋值的时候是引用传递)

?? (symbol 和 proxy)

## 类型判断
1. typeOf
  ```
  typeof 1 // 'number'
  typeof '1' // 'string'
  typeof undefined // 'undefined'
  typeof true // 'boolean'
  typeof Symbol() // 'symbol'
  typeof b // b 没有声明，但是还会显示 undefined
  typeof [] // 'object'
  typeof {} // 'object'
  typeof console.log // 'function'
  ```
2. instandsOf
   ```
      obj instanceOf Array
   ```
3. prototype.isPrototypeOf
   ```
      Array.prototype.isPrototypeOf(obj)
   ```
4. prototype.toString.call
   ```
      Object.prototype.toString.call(obj).slice(8, -1) === "Array"
   ```
5. 判断数组类型
   ```
    obj.__proto__ === Array.prototype
    obj instanceOf Array
    Array.inArray(obj)
    Array.prototype.isPrototypeOf(obj)
    Object.prototype.toString.call(obj).slice(8, -1) === "Array"
   ```

## 类型转换
1. 数字转字符串
2. 字符串转数字
3. 取整数
4. 保存小数点后n位
