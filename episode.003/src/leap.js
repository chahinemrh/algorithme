
  export default function leap(year) {
    var result; 
    year = parseInt(document.getElementById("isYear").value);
    if (years/400){
      result = true
    }
    else if(years/100){
      result = false
    }
    else if(years/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }
   
