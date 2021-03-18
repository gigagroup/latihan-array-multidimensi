function uniqueArray(array) {
  console.log(array);
  let hasilFilter = [];
  //   console.log(hasilFilter);
  if (Array.isArray) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          hasilFilter.includes(array[i])
            ? hasilFilter
            : hasilFilter.push(array[i]);
          console.log(array);
          console.log(hasilFilter);
        }
      }
    }
    return hasilFilter;
  }
}

console.log(uniqueArray([1, 1, 5, 7, 4, 1, 2, 8, 7, 5, 1, 4, 4, 8]));
console.log(uniqueArray([9, 8, 7, 5, 4, 8, 2, 1, 7, 8, 9, 4, 5, 6]));
console.log(uniqueArray([2, 2, 2, 2, 2, 2]));
