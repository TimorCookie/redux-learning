// function testable (target) {
//   target.nick = 'timo'
//   target.isTestable = false
// }
// @testable
// class Case {
// }
// console.log(Case.isTestable)
// console.log(Case.nick)

// function testable(nick) {
//   return function test2(target) {
//     target.nick = nick
//     target.prototype.age = 18
//   }
// }

// @testable('xiao timo')
// class Timokie {}

// console.log(Timokie.nick)
// console.log(Timokie.age)
// console.log(new Timokie().age)

// function mixins(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list)
//   }
// }

// const Foo = {
//   foo() {
//     console.log('foo')
//   },
//   baz() {
//     console.log('baz')
//   }
// }
// @mixins(Foo)
// class Timokie {}
// new Timokie().foo()
// new Timokie().baz()


function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Person {
  constructor(first, last) {
    this.first = first
    this.last = last
  }
  @readonly
  fullName() { return `${this.first} ${this.last}` }
}
let person = new Person('timokie', 'king')
console.log(person.fullName())