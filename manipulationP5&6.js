// * cara membuat/menambahkan elemen baru menggunakan appendChild()
//     1. buat terlebih dahulu tag/Elementnya
const pBaru = document.createElement('p');
//     2. buat isi dari elemen yang di inginkan
const teksPBaru = document.createTextNode('ini adalah paragraph baru');
//     3. rangkai isi kedalam elemen yang di inginkan
pBaru.appendChild(teksPBaru);
//     4. tempatkan elemen yang di buat ketempat yang diinginkan
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// * cara membuat/menambahkan elemen baru menggunakan insertBefore()
const liBaru = document.createElement('li');
const itemBaru = document.createTextNode('Item baru');

liBaru.appendChild(itemBaru);
// ambil elemen parrentnya terlebih dahulu
const ul = document.querySelector('section#b ul');
// kemudian, ambil elemen setelahnya elemen baru
const li2 = ul.querySelector('li:nth-child(2)');
// rangkai elemennya
ul.insertBefore(liBaru, li2);


// menghapus child node menggunakan removeChild()

// 1. ambil terlebih dahulu parrentnya
// parrent sudah di ambil di line 9
// 2. ambil elemen yang ingin dihapus
const link = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(link);



const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const judulH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(judulH2Baru);

sectionB.replaceChild(h2Baru, p4);

h2Baru.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';

