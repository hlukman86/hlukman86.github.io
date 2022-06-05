const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
        ];
  
const callback =(result)=>{
      console.log(result); 
    }
  
  
  let searchName =  (string, total, cb)=>{
    let newString = new RegExp(string, 'gi');
    let total_name_found = 0;
    let result = [];
  
    for (let i = 0; i < name.length; i++) {
      if (total_name_found < total) { 
        if (name[i].match(newString)) { 
          result.push(name[i]) 
          total_name_found++;
        }
      }
    }
    cb(result);
  }
  searchName("an",3, callback);
  
  
  
  
  
  
  
  
  
  
