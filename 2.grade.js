const MTK = 50
const BahasaIndonesia =50
const BahasaInggris = 50
const IPA = 50
nr = (MTK+BahasaIndonesia+BahasaInggris+IPA)/4
    console.log("nilai rata-rata="+(nr));
if(nr >= 90 && nr <=100){
    console.log("Grade = A");
}else if(nr >= 80 && nr <=89){
    console.log("Grade = B");
}else if(nr >= 70 && nr <=79){
    console.log("Grade = C");
}else if(nr >= 60 && nr  <=69){
    console.log("Grade = D");
}else if(nr >= 0 && nr  <=50){
    console.log("Grade = E");
}else{   
    console.log("nilai harus >> 0 - 100");
}

