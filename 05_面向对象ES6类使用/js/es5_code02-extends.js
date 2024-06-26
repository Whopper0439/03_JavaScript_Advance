"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}



// 调用:_inherits(Student, Person);
function _inherits (subClass, superClass) {
  // Person不为函数且不为null,则抛出异常
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // 逻辑与的用法:Person不为空且Person.prototype不为空
  // 核心代码:
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}



function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf (o, p) {
      // 核心代码:Student.__proto__ = Person;
      // 类方法的继承:Student函数对象中找不到类方法,去对应隐式原型中所指对象Person函数对象中找
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal () {
    // _setPrototypeOf(o, p)中提前操作:Student.__proto__ = Person;
    var Super = _getPrototypeOf(Derived),
      result;
    // 拿到super:Person后,判断:浏览器是否支持Reflect/Proxy
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      // 借用父类的构造函数
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}


function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}


function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}


function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);
    this.name = name;
    this.age = age;
  }
  _createClass(
    Person,
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
    [
      {
        key: "randomPerson",
        value: function randomPerson() {}
      }
    ]
  );
  return Person;
})();

// 等价于:
// function inherit(SubType, SuperType) {
//   SubType.prototype = Object.create(SuperType.prototype)
//   SubType.prototype.constructor = SubType
// }

debugger
// 立即执行函数,纯函数(传入Person)
var Student = /*#__PURE__*/ (function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  // 函数定义(先跳过执行),作用域前移
  function Student(name, age, sno, score) {
    var _this;

    _classCallCheck(this, Student);

    // 借用构造函数
    // _this = Person.call(this, name, age);
    _this = _super.call(this, name, age);
    _this.sno = sno;
    _this.score = score;
    return _this;
  }


  // 等价于:
  // Student.prototype.studying = function () { }
  // Student.randomStudent = function () { }
  _createClass(
    Student,
    [
      {
        key: "studying",
        value: function studying() {}
      }
    ],
    [
      {
        key: "randomStudent",
        value: function randomStudent() {}
      }
    ]
  );

  return Student;
})(Person);

var stu = new Student("why", 18, 111, 100);
