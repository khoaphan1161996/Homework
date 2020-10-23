// 1. Special two-digit-number
// A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.
// function special2digits(n){
//     n = String(n)
//     let a = Number(n[0]) + Number(n[1])
//     let b = Number(n[0]) * Number(n[1])

//     if((a+b) == n) {
//         return "true"
//     }
//     else return "false"
// }

// console.log(special2digits(19))
// console.log(special2digits(20))

// 2. Narcissistic numbers
// By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits. Only 3-digit numbers are considerated
// function isNarcissistic(n){
//     n = String(n)
//     let a = Number(n[0])
//     let b = Number(n[1])
//     let c = Number(n[2])
//     if(a**3 + b**3 + c**3 == n){
//         return "true"
//     }
//     else return "false"
// }

// console.log(isNarcissistic(153))

// 3. Quadratic expression Calculate
// Take a b c as arguments then solve Quadratic Expression, print delta's status & solution(s)
// let a = Number(prompt("nhap a"))
// while(isNaN(a) || a==0 ){
//       a = prompt("nhap lai a");
// }
// let b = Number(prompt("nhap b"))
// while(isNaN(b)){
//       b = prompt("nhap lai b");
// }
// let c = Number(prompt("nhap c"))
// while(isNaN(c)){
//       c = prompt("nhap lai c");
// }
// let delta = (b*b)-(4*a*c)
// if(delta>0){
//     console.log("Phuong trinh co 2 nghiem phan biet");
//     console.log("x1 = "+ ((-b+Math.sqrt(delta))/(2*a)))
//     console.log("x2 = "+ ((-b-Math.sqrt(delta))/(2*a)))
// }
// else if(delta == 0){
//     console.log("Phuong trinh co 1 nghiem duy nhat")
//     console.log("x1 = "+ (-b/(2*a)))
// }
// else{
//     console.log("Phuong trinh vo nghiem")
// } 

// 4. Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
// function areaShape(b,h,shape){
//     if(shape=="triangle"){
//         return 0.5*b*h
//     }
//     else if(shape=="parallelogram"){
//         return b*h
//     }
//     else return `triangle or parallelogram, please`
// }


// console.log(areaShape(2, 3, "triangle"))
// console.log(areaShape(8, 6, "parallelogram"))
// console.log(areaShape(2.9, 1.3, "parallelogram"))

// 5. Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// function isPlural(string){
//     if(string[string.length-1]=="s"){
//         return "true"
//     }
//     else return "false"
// }

// console.log(isPlural("changes"))
// console.log(isPlural("change"))
// console.log(isPlural("dudes"))
// console.log(isPlural("magic"))

// 6. The pH Scale
// Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.
// function pHName(pH){
//     if(pH<7 && pH>=1){
//         return "acidic"
//     }
//     else if (pH>7 && pH<=14){
//         return "alkaline"
//     }
//     else if (pH ==7) {
//         return "neutral"
//     }
//     else return "invalid"
// }

// console.log(pHName(5))
// console.log(pHName(8.7))
// console.log(pHName(7))