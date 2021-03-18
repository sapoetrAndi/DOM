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
    });
});

/* Prevent default / 
Prevent default adalah sebuah method yang ada di dalam sebuah object dalam contoh ada di object parameter e pada method addEventListener diatas. tujuannya adalah untuk menghentikan aksi default yang dilakukan oleh sebuah elemen. contohnya pada elemen a ketika kita klik tag a maka kita akan diarahkan ke halaman tertentu, namun apa bila href dikosong kan maka kita akan diarahkan ke halaman yang sama (tag a mengarahkan ke halaman yang sama maka efeknya seperti mereload sebuah halaman) untuk mengentikan aksi default seperti itu maka kita guanakan prevent default

*/