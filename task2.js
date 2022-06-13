function showMonth(number,month){
      if(number==null){
        month.map((item)=>console.log((item)))}
      else { console.log(number)}
      }

const getMonth = (callback) => {
    setTimeout(()=>{
        let error = true
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July', 
        'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null , month)
        }else{
            callback(new Error('Sorry Data Not Found'),[])
        }
    }, 4000)
}
getMonth(showMonth);