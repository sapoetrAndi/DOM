/* pertemuan 7 dom events 
- events adalah kejadian kejadian yang terjadi di dalam dom ketika user melakukan sesuatu
docs -> https://developer.mozilla.org/en-US/docs/web/API/event
- cara mendengarkan event di dalam dom
    * event handler
        - inline HTMLattribute -> menambhakan langusng kedalam halaman HTML dan dipanggil didalam tag HTML
        - element method
    * addEventListener()

- event List / daftar event
    * Mouse Event
        - click
        - dbcick
        - mouserover
        - mouseenter
        - mouseleave
        - mouseup
        - wheel
        - dll.
    * Keyboard Event
        - keydown
        - keypress
        - keyup
    * Resource Event
    * Focus Event
    * View Event
        - resize
        - scroll
    * Form Event
        - reset
        - submit
    * CSS Animation & Transition Event
    * Drag & Drop Event
    * dll.
    * https://developer.mozilla.org/en-US/docs/web/API/events
*/

/* event handler */
//menggunakan event handler
//cara menggunakan event handler inline HTMLattribute adalah dengan memanggil function di attribut html sesuai event attribut yang diinginkan misal: onclick="namafunction(). tidak disarankan"
const p3 = deocument.querySelector('.p3');

function ubahWarna1(){
    //function dipanggil dialam eventattribut di tag HTML
    p3.style.backgroundColor = 'lightblue';
}

//menggunakan element method
const p2 = deocument.querySelector('.p2');
p2.onclick = ubahWarna1;// ketika di klik menjalankan function ubahwarna1


const p1 = document.querySelector('.p1');

function ubahWarna(){
    p1.style.backgroundColor = 'yellow';
}

p1.onclick = ubahWarna;


/* addEventListener() */
const p4 = document.querySelector('section#b p');
//parameter pertama nama event parameter kedua function yang ingin dijalankan
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const LiBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');

    LiBaru.appendChild(teksLiBaru);
    ul.appendChild(LiBaru);

});

/* perbedaan antara penggunaan event handler dan addEventListener adalah event handler akan menimpah perubahan/event yang dilakukan sebelumnya sedangkan menggunakan addEventListener dia akan menambah perubahannya 

contohnya
const p3 = document.querySelector('p3);

p3.onclick= function(){
    p3.style.backgroundColor = 'lightblue';
}
p3.onclick= function(){
    //perilaku event handler
    //function ini akan menimpa function diatas
    p3.style.color = 'red';
}

sedangkan perilaku addEventListener
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function(){
    //tidak akan menimpa function diatas melainkan akan menjalankan keduanya
    p3.style.color = 'red';
});
*/