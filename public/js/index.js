function makeMethod(object, fun) {
  return function() {
    let args;

    args = Object.prototype.slice.call(arguments);
    args.unshift(object);

    fn.apply(this, args)
  }
}

function message(self, message) {
  let parent;

  parent = Object.getPrototypeOf(self);

  if (parent && parent.log) {
    parent.log.call(this, message);
  }

  console.log('--At' + self.name);
  console.log(this.name + ':' + message);
}

let A = Object.create(null);

A.name = 'A';
A.log = makeMethod(A, message);

let B = Object.create(A);
B.name = 'B';
B.log = makeMethod(B, message);

let C = Object.create(B);
C.name = 'C';
C.log = makeMethod(C, message);

A.log('foo');
B.log('foo');
C.log('foo');