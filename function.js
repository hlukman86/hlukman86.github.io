const seleksiNilai = function(nilaiAwal, nilaiAkhir, dataArray){	

    const hasil=[];

	if(nilaiAkhir < nilaiAwal){
		console.log("Nilai akhir harus lebih besar dari nilai awal");
        return false;
		}else if(dataArray.length < 5){
		console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        return false
		}else {
        	for (let i = 0; i < dataArray.length; i++) {
        	if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {        
				hasil.push(dataArray[i]);
				}
    		}
		}
	
		if(hasil.length == 0){
			console.log("Nilai tidak ditemukan");
            return false;
		}

		hasil.sort(function(a, b){
			return a -b;
		})

       
		console.log(hasil.join('-'));
		
}
    
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15,3,[2,25,4,14,17,30,8]);
seleksiNilai(4,17,[2,25,4]);
seleksiNilai(5,17,[2,25,4,1,30,18]);
