/* DOM@2 - DOM TREE 

* setiap simpul (Node) pada DOM TREE memiliki tipe
    - Element -> element HTML
    - Atribut -> atribut HTML
    - Text -> isi dari element HTML
    - CData section
    - Entity Reference
    - Entity
    - Processing Instruction
    - Comment
    - Document
    - Document Type
    - Document Fragment
    - Notation

* Node List & HTML Colection
    - jika kita memilih/selection lebih dari satu node maka itu disebut NodeList tidak peduli tipe nodenya apa.
    - sedangkan, HTML Colection kumpulan node yang bertipe element HTML saja. kedua tipe tersebut akan menentuan cara mengelolanya.
    - Keduanya merupakan kumpulan node.
    - representasi struktur datanya mirip array
    - nodelist dapat berisi apapun sedangkan HTMLColection harus berisi elemen HTML
    - HTMLColection bersifat live sedangkan nodelist tidak

* Struktur hirarki dari DOM tree
    - Root Node -> node akar yang menjadi sumber dari semua node lain di dalam DOM yang secara default node tersebut adalah document.
    - Uncestor -> node yang berada dua tingkat / diatas grand parent
    - Grand Parent Node ->
    - Parent Node ->
    - Child Node 
    - decendens -> dibawah childnote/cucu/grandchild
*/