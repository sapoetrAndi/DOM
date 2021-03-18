//DOM selection
//dari segi performance getelementById & getElementsByTagName jauh lebih baik dari yang lain
// document.getElementById() -> return element
//cara manipulasi dengan menggunakan titik kemudian nama properti css, jika nama properti lebih dari satu kata maka tulis dengan gaya camelCase
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.background = 'yellow';
judul.innerHTML = 'Andi Saputra';


// document.getElementsByTagName() -> return HTMLCollection
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
    //mengambil elemen urutan ke-i dari seluruh elemen P yang terseleksi
    p[i].style.backgroundColor = 'yellow';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> return HTMLCollection
const p2 = document.getElementsByClassName('p2');
p2[0].innerHTML = 'ini diubah dari javascript';


/* pertemuan 4 */
// mengambil(selection) elemen berdasarkan selector css
//document.querySelector() -> return element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const paragraph = document.querySelector('p');
paragraph.innerHTML = 'paragraph ini diubah melalui javascript';

//document.querySelectorAll() -> return nodeList
const paragraph1 = document.querySelectorAll('p');
for(let i = 0; i < paragraph1.length; i++){
    paragraph1[i].style.backgroundColor = 'red';
}


/* mengubah node root untuk mempersempit scope elemen agar mudah di seleksi dom
    const sectionB = document.getElementById('p'); //untuk ambil element lalu jadikan noderoot
    const p4 = sectionB.querySellector('p');
    p4.style.backgroundColor = 'orange';

    //
    const sectionB = document.querySelector('section#b'); //mengambil dulu scope yang ingin dijadikan node root
    const p4 = sectionB.getElementsByTagName('p)[0]; -> karena returnnya HTML Collection maka cara ambilnya seperti mengambil array
    p4.style.backgroundColor = 'orange';





*/