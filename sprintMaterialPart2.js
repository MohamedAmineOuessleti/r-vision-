///1
function perimeterOfCircle(radius) {
    return 2*Math.PI*radius 
 }  
///2
function areaOfCircle(radius) {
    return Math.PI*(radius*radius)
 }  
///3
function inchesToCentimeters(inches) {
    return inches*2.54 
  }  
///4
function centimetersToInches(cm) {
    return cm/2.54
 }  
///5
function totalSecondsConverter(hours, minutes, seconds) {
    return ((hours*60*60)+(minutes*60)+seconds)
  }  
///6
function billTotal(number) {
    return ((number*0.09875)+(number*0.2)+number) 
 }  
///7
function convertToKilometers(miles) {
    return miles*1.60934
 }  
//////Extra\\\\\\
///1
function square1(x) { 
    return x * x ; 
} 
function square2 (x){ 
    return x * x ; 
    }
    function  square3 (x) { 
        return x * x;
        }
///2
function largest(a,b) {
    if (a>b){
        return a
    }
    else {
        return b
    }
  
}
///3
function add(number1,number2){
    console.log(number1+number2)    
    }
///4
function asubtract(number1,number2){
    console.log(number1-number2)    
    }
///5
function convertTemp(celsius) {
    return (celsius * 9/5) + 32
  }
///6
function capitalize(food) {
    return food[0].toUpperCase()+food.slice(1)
  }
///7
function billing(item1,item2,item3) {
    var sum =0
    var total=0
    var tips=0
sum= (item1+item2+item3)
    tips=((item1+item2+item3)*0.15)
    total=sum+tips
    return ("your total is "+total+" thank you for the "+tips)
}
