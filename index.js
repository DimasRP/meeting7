let a = prompt('input angka 1');
let b = prompt('input angka 2');
let kuadrat =Math.pow(a , b)
let bagi = a / b

//case 1
alert(`hasil kuadrat ${kuadrat} hasil bagi ${bagi}`);

//case 3
let harini = new Date();
harini.setDate(harini.getDate())
alert("hari ini =" + harini.toDateString())

let kemarin  = new Date();
kemarin.setDate(kemarin.getDate() - 1)
alert("kemarin =" + kemarin.toDateString())

let besok = new Date();
besok.setDate(besok.getDate() + 1)
alert("besok = " + besok.toDateString())


// case 5
let c = prompt('Masukkan Nama')
alert("Jumlah karakter Nama " + c.length)


alert('terimakasih sudah mengisi');


