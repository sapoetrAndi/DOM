const close = document.querySelectorAll('.close');

close.forEach(function(el){
    el.addEventListener('click', function(e){
        /*
        parentElemen adalah salahsatu cara menelusuri elemen berdasarkan elemen lain (dom traversing) 
        METHOD  yang tersedia untuk melakukan penelusuran DOM
            - parentNode -> return node
            - parentElement -> return element
            - nextSibling -> return node maka enter termasuk dalam node,sedangkan element tidak memperdulikan enter
            - nextElementSibling -> return element tidak memperdulikan enter
            - previousSibling -> return node
            - previousElementSibling -> return element
        */
        e.target.parentElement.style.display = 'none';
        //prevent Default untuk mencegah/menghentikan aksi default dari sebuah elemen
        e.preventDefault();
        //utnuk menghentikan event bubbling
        e.stopPropagation();
    });
});


//cara diatas sudah benar namun kurang efektif karena ketika kita mengedit html lewat browser eventnya tidak bekerja ke semua card. cara dibawah ini adalah cara yang lebih efektif

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

//return node list. tips: ketika kita menyeleksi elemen perhatikan nilai yang dikembalikan
const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('OK');
    });
});

/* event bubbling
ketika kita melakukan event pada sebuah elemen maka jika elemen parent mempunyai event juga maka akan secara otomatis ikut dijalankan sampai event dari elemen elemen parent habis, ilustrasinya seperti gelembung air. maka jika kita ingin menghentikan efek bubbling tersebut kita dapat menggunakan event bubbling pada even yang diinginkan.
*/

/* Kesimpulan latihan DOM
jika kita ingin memanipulasi prilaku web kita kita bisa menggunakan DOM dengan cara menyeleksi elemennya menggunakan DOM selection baru kita bisa memanipulasinya dengan DOM manipulation, menambahkan event, menelusuri elemennya(DOM traversal), menghentikan aksi defaulnta(event bubbling) dan sebagainya.
*/