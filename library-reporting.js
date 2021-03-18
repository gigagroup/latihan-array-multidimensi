const input = [
  ["Belajar Javascript", ["Meminjam", "Andi"]],
  ["Latihan CSS", ["Meminjam", "Robert"]],
  ["Merancang Database SQL", ["Mengembalikan", "Andi"]],
  ["Dasar HTML 1", ["Mengembalikan", "Boy"]],
  ["Advance CSS3", ["Meminjam", "Chandra"]],
  ["Tips Mengetik Cepat", ["Meminjam", "Chandra"]],
];
for (var i = 0; i < input.length; i++) {
  console.log("test");
  for (var j = 0; j < input[i].length; j++) {
    console.log(input[i][j]);
  }
}
