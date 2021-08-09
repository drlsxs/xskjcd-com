function delay(fn, ms) {
  return new Proxy(fn, {
    apply(target, thisArg, argArray) {
      setTimeout(() => target.apply(thisArg, argArray), ms);
    }
  });
}

function sayHi(user) {
  console.log(`Hello ${user}`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length);
sayHi("John");
