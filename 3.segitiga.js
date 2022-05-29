let s = '';
 let pola = 5 ;
 for(let i = pola; i >=1; i --){
     for(let j = 1; j <= i;j++){
         s+= ''+j;
     }
     s+='\n';
 }
 console.log(s);