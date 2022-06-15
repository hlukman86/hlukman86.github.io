let kalimat = "saya belajar javascript "
let kata = kalimat.split(' ');
kata = kata.reverse();
let result = kata.join();
// console.log(result);
  var newStr = result.replace(/,/g, ' ');
    console.log(newStr)
