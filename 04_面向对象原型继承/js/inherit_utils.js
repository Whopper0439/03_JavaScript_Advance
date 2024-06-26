// 创建对象的过程
function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

// 将Subtype和Supertype联系在一起
// 寄生式函数
function inherit(Subtype, Supertype) {
  // 方式一:Subtype.prototype.__proto__ = Supertype.prototype
  // 方式二:Object.setPrototypeOf(Subtype.prototype, Supertype.prototype)
  // 方式三:最具兼容性
  Subtype.prototype = createObject(Supertype.prototype)
  Object.defineProperty(Subtype.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })
  Object.setPrototypeOf(Subtype, Supertype)
  // 实现类方法的继承
  // Subtype.__proto__ = Supertype
}
