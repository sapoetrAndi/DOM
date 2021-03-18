// Dom traversal/ penelusuran DOM

/* 
* jika kita ingin menelusuri sebuah elemen / DOM traversing yanng harus kita lakukan adalah menseleksi sebuah elemen terlebih dahulu menggunakan dom selection baru setelah elemen yang tertentu ketemu/terseleksi kita akan memilih elemen yang lain berdasarkan elemen yang kita pilih tadi (menelusuri elemen berdasarkan elemen yang diseleksi). untuk dapat menelusuri dom kita harus paham konsep parent child.kapan kita harus menggunakan dom? kita sebaiknya menggunakan dom ketika kita ingin memanipulasi elemen parentnya berdasarkan elemen yang di pilih
 */

//querySelector -> mengembalikan sebuah elemen jadi event hanya berlaku untuk elemen pertama yang ditemukan
//querySelectorAll -> mengembalikan NodeList kumpulan elemen prilakunya mirip array
const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++) {
        //parameter e akan berisi event yang terjadi dalam contoh ini adalah click
//     close[i].addEventListener('click', function(e){
//         //close[i].parentElement.style.display = 'none';

            //e.target mengambil value dari object yang dikirm ari parameter. untuk memngeceknya lihat diconsole
//         e.taret.parentElement.style.display = 'none';        
//     });
// }

//parameter el akan mengambil setiap elemen yang di loop dalam foreach
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
    });
});
