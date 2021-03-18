function olahData(array) {
  console.log(array);

  let budi = array[0][0] + "," + " terkecil " + "," + array[0][1];
  console.log(budi);

  let dina = array[1][0] + "," + " terbesar " + "," + array[1][1];
  console.log(dina);

  let bayu = array[2][0] + "," + " rata-rata " + "," + array[2][1];
  console.log(bayu);

  let dataProcessing = [[], [], []];
  dataProcessing[0].push(bayu);
  dataProcessing[1].push(dina);
  dataProcessing[2].push(bayu);
  return dataProcessing;
}

console.log(
  olahData([
    ["Budi", 74],
    ["Dina", 92],
    ["Bayu", 86],
    ["Roy", 90],
  ])
);
// [["rata-rata", 85.5],["terbesar",92, "Dina"],["terkecil", 74, "Budi"]]
