const jenisKendaraan = (kendaraan) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataKen = ['motor', 'mobil', 'sepeda', 'kereta', 'kapal']
            let cek = dataKen.find((item)=>{
                return item === kendaraan
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('ini bukan kendaraan'))
            }
        }, 3000);
    })
}

jenisKendaraan ('motor').then((dataKen)=>{
    console.log('ini kendaraan');
}).catch((Error)=>{
    console.log(Error)
});


async function fetch (){
    try{
        const asd = await jenisKendaraan('jk')
        console.log("berhasil")
    }catch(Error){
        console.log(Error)
    }finally{
    console.log('proses selesai');
}
    
}
fetch()









const cekUnggas = (unggas) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataUnggas = ['burung', 'bebek', 'ayam', 'angsa', 'puyuh']
            let cek = dataUnggas.find((item)=>{
                return item === unggas
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('ini bukan unggas'))
            }
        }, 3000);
    })
}

cekUnggas ('bebek').then((dataUnggas)=>{
    console.log(' ini unggas');
}).catch((Error)=>{
    console.log(Error)
});


async function ug (){
    try{
        const asd = await dataUnggas('kp')
        console.log("berhasil")
    }
    catch(Error){
        console.log(Error)
    }finally{
        console.log('proses selesai');
    }
    
}
ug()