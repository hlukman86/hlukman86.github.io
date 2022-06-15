const fungsi = (number) =>{
    if(typeof(number)=='number')
        {
        const ubah = number.toString().split("") 
        if(ubah[ubah.length-1]=='0') 
            {
                ubah.pop()
            }
        let tampung =[] 
        let tampungindex = [] 
        let index=0
        let tampunghasil =[]
        for (let i=0;i<ubah.length;i++) 
            {
             if(ubah[i]=='0')
                {
                tampungindex[index]=i 
                if(index==0)
                    {  
                    tampung[index] = ubah.slice(0,i)
                    tampung[index].sort(function(a, b){return a - b})
                    index++ 
                    }
                else 
                {
                    tampung[index]= ubah.slice(tampungindex[index-1]+1,i)
                    tampung[index].sort(function(a, b){return a - b})
                    index++
                }

                }
                
                if(i==ubah.length-1)
                    {
                     tampung[index]= ubah.slice((tampungindex[tampungindex.length-1])+1,ubah.length)
                     tampung[index].sort(function(a, b){return a - b})
           
                    }
            }

            for(let i=0 ;i<tampung.length;i++)
                {
                tampunghasil[i] = parseInt(tampung[i].join(""))
                }
                return(tampunghasil.join(""))
        }
    else{
        return("Harus Masukkan Tipe data Number !")
    }
}
console.log(fungsi(5956560159466056))
