const foo = [];

foo.push({ aaa: "111", bbb: "222" });
console.log(foo);

const aaa = "888";
const bbb = "999";

console.log(...foo[0]);

foo[0] = {
  ...foo[0],
  aaa,
  //bbb,
};

console.log(foo);
