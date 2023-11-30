// let a = 40;

// module.exports = a;

// ! ex 2

// let a = 20;
// let b = 40;

// module.exports = { a, b };

// ! 3

// module.exports = { sname: "santhosh", age: 20 };

// !4

function giveuser(a, b) {
  if (a > b) {
    return "A is Greater";
  } else {
    return "B is Greater";
  }
}

module.exports = giveuser;
