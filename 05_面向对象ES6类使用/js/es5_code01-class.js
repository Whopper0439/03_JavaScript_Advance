"use strict";

// 不允许函数Person()直接调用,即不能把class当成函数调用
// this -> window
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    // 设置不可枚举
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

// 在构造函数的显式原型Constructor.prototype上添加实例方法protoProps,
// 在构造函数Constructor上添加静态方法staticProps
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// 纯函数: 相同输入一定产生相同的输出, 并且不会产生副作用(删除对其他变量影响不大)
// 立即执行函数
var Person = /*#__PURE__*/ (function () {
  debugger

  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }
  // 等价于:实例方法,静态方法的定义
  // Person.prototype.running = function () { }
  // Person.prototype.eating = function () { }
  // Person.randomPerson = function () { }
  _createClass(
    Person,
    // 实例方法
    [
      {
        key: "running",
        value: function running() {}
      },
      {
        key: "eating",
        value: function eating() {}
      }
    ],
    // 静态方法
    [
      {
        key: "randomPerson",
        value: function randomPerson() {}
      }
    ]
  );

  return Person;
})();

var p1 = new Person("why", 18)

