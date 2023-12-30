//ex 1.for
function iterateandlowithfor(n){
    for (var i = 0 ; i<n; i++)
        if(i%2===0){
            console.log( i + " is even")
            
        }
    else {console.log( i + " is odd" )
        
    }
    
}
//1.while
function iterateAndLogWithWhile(n) {
    var i = 0 
     while (i<n){
         if(i%2===0){
             console.log( i + " is even") 
             i++
         }
         else { console.log(i+ " is odd")
              i++
              }
         
             
     }
 }


//2.for
function reverseIterateAndLogWithFor(n){
    for (var i = n-1 ; i>=0; i--)
        if(i%2===0){
            console.log( i + " is even")
            
        }
    else {console.log( i + " is odd" )
        
    }
    
}
 
 
//2.while
 function reverseIterateAndLogWithWhile(n) {
    n = n-1
     while (n>=0){
         if(n%2===0){
             console.log( n + " is even") 
             n--
         }
         else { console.log(n+ " is odd")
              n--
              }
         
             
     }
 }
 //2.recurtion
 function reverseIterateAndLogRecursively(n){

    if (n===0) {
    return "0 is even /"
    }
      if (n%2===0){
    
     return reverseIterateAndLogRecursively (n-1)+n+" is even/"
       
      }
      else 
       
         return reverseIterateAndLogRecursively (n-1)+n+" is odd/"
}
//ex3 . for
function weirdDivisionWithFor(n){
    for (var i =1; i<=n;i++){
        if ((i%3===0)&& (i%5===0)){
            console.log( "juliajames")
    }
    else if ( i%3===0  ){
        console.log ("julia")    }
    else if (i%5===0){
        console.log("james")
        
    }
    else {console.log (i)}
}
}
//3.while
function weirdDivisionWithWhile(n){
    var i = 1 
     while(i<=n){
         if ((i%3===0)&& (i%5===0)){
             console.log( "juliajames")
             i++
     }
     else if ( i%3===0  ){
         console.log ("julia") 
         i++
     }
     else if (i%5===0){
         console.log("james")
         i++
         
     }
     else {console.log (i)
          i++
          }
 }
 }
 //3.recurtion 
 function inverseWeirdDivisionRecursively(n){
    if (n===1){
        return 1
    }
    
           else if ((n%3===0)&& (n%5===0)){
         return    inverseWeirdDivisionRecursively (n-1) + ( " juliajames / ")
              
        }
        else if ( n%3===0  ){
       return  inverseWeirdDivisionRecursively (n-1) +  (" julia / ") 
            
        }
        else if (n%5===0){
       return  inverseWeirdDivisionRecursively (n-1) + (" james / ")
            
            
        }
        else {console.log (n)
              return inverseWeirdDivisionRecursively (n-1)
             
             }
    }
    //4 . for
    function laughWithFor(number){
        var x="ha"
        var y=""
        for(var i=0; i<number ;i++) {
            y=y+x
        }
        return y 
        
            
    }
    //4.while
    function laughWithWhile(number){
        var x="ha"
        var y=""
        while (number>0){
            
            y=y+x
            number=number-1
        }
        return y     
    }
    //4.recurtion
    function laughRecursively(number){
        var x="ha"
        
        if (number===1){
            return 'ha'}
       else return x+ laughRecursively(number-1)
    }
    //ex4-4 while
    function sumWithWhile(number) {
        var x 
        x=0
        while(number>0){
            x=x+number
            number=number-1
        }
        return x
    }
    //ex4-4 for 
    function sumWithFor(number) {
        var x 
        x=0
        for(i=0; i<=number ;i++){
            x=x+i
        }
        return x
    }
    //ex5 
    function factorialRecursively(number){
        if (number===1){
            return 1 
        }
        else  return number * factorialRecursively(number -1)
    }
    //ex6 for 
    function rangeFor(min, max){
        var arr=[]
        for (var i = min ; i<max; i ++){
            arr.push(i)
        }
        return arr 
            
    }
    //ex6 while 
    function rangeWhile(min, max){
        var arr=[]
        var i = min 
        while (i<max){
            arr.push(i)
            i++
        }
        return arr 
            
    }
    //ex7 for 
    function reverseWithFor(str){
        var x= ''
         for (var i=str.length;i>=0;i--){
             x=x+str.charAt(i)
         }
         return x 
     }
     //ex7 . while
     function reverseWithWhile(str){
        var i=str.length
           var x= ''
           while (i>=0){
               x=x+str.charAt(i)
               i--
           }
           return x 
       }
       //ex7.
       function reverseRecursively(str){
        var i=str.length-1
           var x
           x= ''
           if (i<=0){
               return x }
           else return x+reverseRecursively(str.charAt(i-1))
           
             
               
           }
           ///8
function addDigits(num) {
    var num1= ""
    var tot= 0
    num1=num.toString()
    console.log(num1)
    for (i=0;i<=num1.length-1;i++){
        tot=tot+ (parseInt(num1.charAt(i)))

    }
    return tot
}
///9
function fibRecursive(number) {
    if (number===0){
        return 1
    }
    if (number===1){
       return 1 
    }
      else{
      return fibRecursive(number-1)+fibRecursive(number-2)
      }
  }
  //ex10
  function firstDigit(str){
  
    for (var i = 0 ; i<=str.length; i ++ ){
      {
        if ((str[i]==='0')||(str[i]==='1')||(str[i]==='2')||(str[i]==='3')||(str[i]==='4')||(str[i]==='5')||(str[i]==='6')||(str[i]==='7')||(str[i]==='8')||(str[i]==='9')){
            return parseInt( str[i])
        }
            
    }
        
}
    return "not a number exist"
}   
//ex11
function remove(array, element){
    for (i=0; i<=array.length ; i++){
        if (array[i]===element){
            array.splice(i,1)
        }
    }
       return array  
}
//12
function average(arrOfNumbers) {
    var tot = 0 
    for (var i=0 ; i<=arrOfNumbers.length-1;i++) {
        tot=tot+arrOfNumbers[i]
    }
        return tot / arrOfNumbers.length
}