        
//*
function palindromCheck (str){

    let isPalindrom = true;
    let lastPalindrom = str.length -1;
    
    for (let i = 0; i < str.length/2; i++) {
       
    if (str.i !== str[lastPalindrom-1]) {
        isPalindrom = false;
        break;
    }
    
            }
      return isPalindrom;      
        }
    
    console.log(palindromCheck ("radar"));
    
    
    // detrmine 
    let car ={
        make : "nissan",
        model : "pseder",
        year : 2024
    };
    console.log(car.make,car.model);
    car.year = 2025;
    console.log(car.year);