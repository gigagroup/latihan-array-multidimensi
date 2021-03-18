function reverseAll(number) {
  var newNumber = [];
  if (Array.isArray) {
    for (let i = number.length - 1; i >= 0; i--) {
      newNumber.push(number[i]);
    }
    return newNumber;
  } else {
    return `harus array of number`;
  }
}

console.log(reverseAll([123, 456]));
console.log(reverseAll([9876, 3213]));
console.log(reverseAll([123, 521, 456]));
console.log(reverseAll([897]));
console.log(reverseAll([]));
