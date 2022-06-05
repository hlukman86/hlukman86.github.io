//method pada array

//1. length = menghitung panjang array
// let binatang=[]
// binatang = ['ahmad','budi','cecep','dedi','ega','fitri'];
// console.log(binatang.length);                //6=>(panjang arraynya 6)      

 //const arr = ['lukman','hakim','ahmad'];
 //2.join = mengubah array menjadi string
//console.log(arr.join('-'));                   //lukman-hakim-ahmad

//3. push & pop elemen terahir=menambah $ mengurangi array dari elemen belakang
//arr.push('doni','dana');                      //lukman-hakim-ahmad-doni-dana
// arr.pop();                                      //lukman-hakim
// arr.pop();                                      //lukman
// console.log(arr.join('-'));

//4.unsgift & shift=menambah & menghapus array dari elemen depan
//arr.unshift('joko','imam');                    //joko-lukman-hakim-ahmad
// arr.shift();                                     //hakim-ahmad
// arr.shift();                                     //ahmad
// console.log(arr.join());


//const arr = ['lukman','hakim','ahmad'];
//5. splice = untuk menambah dan menghapus elemen array
//splice(indexAwal,mauDihapusBerapa,elemenBaru,elemenBaru2,...)
// arr.splice(1,2,'dedi','danu');
// console.log(arr.join('-'));                     //lukman-dadi-danu

//6.slice =mengiris nilai array=indexAwal di ambil & indeAkhir di hapus
// const arr = ['lukman','hakim','ahmad','beni','cecep']   ;
// const arr2 = arr.slice(1,4);
// console.log(arr.join('-'));                     //lukman-hakim-ahmad-beni-cecep
// console.log(arr2.join('-'));                    //hakim-ahmad-beni

//7. forEach=perulangan
//let angka = [1,2,3,4,5,6,7,8];                   //12345678
//let nama = ['lukman','hakim','ahmad'];          //lukman>hakim>ahmad
// for(let i=0; i<nama.length; i++){
//     console.log(nama[i]);
// }
// angka.forEach(function(e){
//     console.log(e);
// })
// nama.forEach(function(e, i){
//     console.log('mahasisa ke-' + (i+1) + 'adalah :'+e);
// })

//8. map
// let angka = [1,2,5,3,6,8];
// let angka2 = angka.map(function(e){
//     return e * 2 ;                            //2-4-10-6-12-16
// });
// console.log(angka2.join('-'));

//9.sort= mengurutkan data array
//let angka = [1,2,10,5,3,20,6,8];          //1-2-10-5-3-20-6-8
// angka.sort(function(a,b){                //1-2-3-5-6-8-10-20
//     return a-b;
// });
//console.log(angka.join('-'));

//10. filter & find mencari niai array dn memgembalikan nilai
// let angka = [1,3,6,4,7,5,9,4];
// let angka2 = angka.filter(function(x){
//     return x > 5;                               //6-7-9
// });                                             //6
// console.log(angka2.join('-'));

//https://developer.mozilla.org/en-US/docs/Web/Javascript/Global_Objects/Array



