# ![Skilvul](https://skilvul.com/static/skilvul.svg) Latihan Array

> Selesaikan soal-soal dibawah ini dengan menggunakan looping dan conditional.
>
> :warning: :warning:Dilarang menggunakan build in function javascript kecuali **.push(), .pop(), .unshift(), .shift()** :warning: :warning:


## :eyes:Find Unique 

Buatlah sebuah fungsi yang akan menerima input berupa array dan akan mengembalikan array dengan element yang unik (tidak ada yang duplicate)

**Rules :**

- Fungsi hanya bisa memproses input array

**Contoh**

```javascript
uniqueArray([1,1,5,7,4,1,2,8,7,5,1,4,4,8]) // [1,5,7,4,2,8]
uniqueArray([9,8,7,5,4,8,2,1,7,8,9,4,5,6]) // [9,8,7,5,4,2,1,6]
uniqueArray([2,2,2,2,2,2]) // [2]
```

------

## :left_right_arrow:Reverse All

Function reverseAll() mengambil input berupa sebuah array, dan mengembalikan kebalikan dari isi array tersebut
beserta kebalikan dari angka-angka di dalamnya.

Rules :

- Output berupa array of numbers, bukan array of string

CONTOH:

```javascript
reverseAll([123, 456]) // [654, 321]
reverseAll([9876, 3213]) // [3123, 6789]
reverseAll([123, 521, 456]) //[654,125,321]
reverseAll([897]) //[798]
reverseAll([]) //[]
```

------

## :arrow_down:Find Unique Sort

Dari fungsi pada soal 1, lakukan modifikasi sehingga kembalian dari fungsi tersebut adalah array yang elementnya sudah di urutkan dari yang terbesar sampai terkecil.

Rules :

- Fungsi hanya bisa memproses input array

Contoh

```javascript
uniqueArraySort([1,1,5,7,4,1,2,8,7,5,1,4,4,8]) // [8,7,5,4,2,1]
uniqueArraySort([9,8,7,5,4,8,2,1,7,8,9,4,5,6]) // [9,8,7,6,5,4,2,1]
uniqueArraySort([2,2,2,2,2,2]) // [2]
```

------

## :confused:Data Processing

Buatlah sebuah fungsi yang akan menerima input berupa array yang berisikan nama dan nilai siswa pada suatu kelas, dan akan mengembalikan array dengan format sama seperti contoh.

Contoh

```javascript
olahData([["Budi", 74], ["Dina", 92], ["Bayu", 86], ["Roy",90]]) // [["rata-rata", 85.5],["terbesar",92, "Dina"],["terkecil", 74, "Budi"]]
```

------

## :books: Library Reporting

Seorang penjaga perpustakaan kebingungan membuat laporan buku yang dipinjam dan dikembalikan. Bantulah penjaga perpustakaan ini dengan membuat fungsi yang sesuai dengan contoh input dan output.

Contoh :

```javascript
const input = [
    ["Belajar Javascript", ["Meminjam", "Andi"]],
    ["Latihan CSS", ["Meminjam", "Robert"]],
    ["Merancang Database SQL", ["Mengembalikan", "Andi"]],
    ["Dasar HTML 1", ["Mengembalikan", "Boy"]],
    ["Advance CSS3", ["Meminjam", "Chandra"]],
    ["Tips Mengetik Cepat", ["Meminjam", "Chandra"]],
]

/*
[
    [
        "Meminjam",
        ["3 orang", ["Andi", "Robert", "Chandra"]],
        ["4 Buku", ["Belajar Javascript","Latihan CSS","Advance CSS3","Tips Mengetik Cepat"]]
    ],
    [
        "Mengembalikan",
        ["2 Orang", ["Andi", "Boy"]],
        ["2 Buku", ["Merancang Database SQL", "Dasar HTML 1"]]
    ]
] 
*/
```

------

## :muscle: BONUS :muscle:

**Note :**
	:warning: Hanya Boleh Dikerjakan Kalau Soal Wajib Sudah Selesai
	:alarm_clock: Coba selesaikan soal ini dengan waktu maksimal 30 menit

------


Ceritanya David merupakan anak yang senang sekali jajan boba.

Ini adalah list boba. yang bisa dibeli beserta harganya:

```javascript
const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
```

David mau membeli boba. yang ada di list tersebut secara berurutan, mulai dari Xing Fu Tang,
sampai ke Bubble Station Milk. Namun sayangnya, uang jajan David terbatas, jadi mungkin tidak bisa membeli semuanya.

Buatlah sebuah **function yang bisa menceritakan kegiatan David ketika sedang jajan boba dengan uang jajan nominal tertentu**.

```javascript
function jajanBoba(uangJajan) {
 //your code here
}
```

contoh output :

```
David mulai jajan dengan uang jajan 100.000 rupiah.
Dengan uang 100.000 rupiah, cukup untuk beli 'Xing Fu Tang',
setelah beli 'Xing Fu Tang' uangnya berkurang 38.000 rupiah,
jadi uangnya sisa 62.000 rupiah. 
Dengan uang 62.000 rupiah, cukup untuk beli 'OneZo',
setelah beli 'OneZo' uangnya berkurang 53.500 rupiah,
jadi uangnya sisa 8.500 rupiah.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'KOI The'.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'Chatime'.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'Kokumi'.
Dengan uang 8.500 rupiah, tidak cukup untuk beli 'Bubble Station Milk'.
David pulang dengan sisa uang jajan 9.500 rupiah.
```

