// 1. Radians to Degrees
// Create a function that takes a n angle in radians and returns the corresponding angle in degrees.
// function radiansToDegrees(rad){
//     return (180/3.14)*rad
// }

// console.log(radiansToDegrees(1))
// console.log(radiansToDegrees(20))
// console.log(radiansToDegrees(50))

// 2. Celsius to Fahrenheit
// Create a function that takes a n temperature in celsius and returns the corresponding temperature in Fahrenheit.
// function CtoF(C){
//     return (C * 1.8) + 32
// }

// console.log(CtoF(10))
// console.log(CtoF(20))
// console.log(CtoF(50))

// 3. Pound to Kilogram
// Create a function that takes a n mass in pound and returns the corresponding temperature in kilogram.
// function PtoK(P){
//     return P*0.45359237
// }

// console.log(PtoK(20))
// console.log(PtoK(70))
// console.log(PtoK(80))

// 4. Matchstick Houses
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// let n = prompt("nhập")
// let e = 6

// while(isNaN(n)||n<1){
//     n = prompt("nhập lại n lớn hơn 0")
// }

// function matchHouses(n){
//     if(n==1){
//         console.log(e)
//     }
//     else {
//     for(let i = 2 ; i <= n ; i ++){
//         e = e + 5 
//     }
//     console.log(e)
//     }
// }

// matchHouses(n)

// 5. Sum of Cubes
// Create a function that takes in 3 numbers and returns the sum of its cubes.
// function sumOfCubes(cube1,cube2,cube3){
//    if(cube1==cube2 && cube2==cube3){
//        return cube1**3
//    }

//    else if(cube1==cube3||cube2==cube3){
//        return cube1**3 + cube2**3
//    }

//    else if (cube1==cube2){
//     return cube1**3 + cube3**3
//    }

//    else {
//     return cube1**3 + cube2**3 + cube3**3
//    }
   
// }
// console.log(sumOfCubes(1,5,9))
// console.log(sumOfCubes(3,4,5))
// console.log(sumOfCubes(2,2,2))


// 6. Pythagorean Triplet
// Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.
// function isTriplet(a,b,c){
//     let array = [a,b,c]
//     let others  = 0
//     let max = Math.max(...array)
//     let maxbinh = max*max

//     console.log("max bình:",maxbinh)

//     for(let i = array.length-1 ; i>=0 ; i--){
//         if(max == array[i]) {
//             array.splice(array.indexOf(max) ,1)
//         }
//     }
    
//     for(let i = 0; i <array.length ; i ++){
//         others  += array[i]*array[i]
//     }
//     console.log("others bình:",others )

//     if(maxbinh == others ){
//         return "true\n----------------------------------------------------------------"
//     }
//     else {
//         return "false\n----------------------------------------------------------------"
//     }
// }

// console.log(isTriplet(3, 4, 5))
// console.log(isTriplet(13,5,12))
// console.log(isTriplet(1, 2, 3))

// 7. Last Digit Ultimate
// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if (the last digit of a * the last digit of b) = the last digit of c. Check the examples below for an explanation.
// function lastDig(a,b,c){
    // C1
    // let id = a*b
    // id = String(id);
    // id = id[id.length - 1]
    // console.log(id)

    // let three = c

    // three = String(three)
    // three = three[three.length-1]

    // console.log(three)

    // if(id == three){
    //     return "true"
    // }
    // else return "false"

    // C2 
    // let id = a*b 
    // id = id % 10
    // c = c % 10 
    // if(id == c){
    //     return "true"
    // }
    // else return "false"
// }

// console.log(lastDig(25,21,125))
// console.log(lastDig(55,226,5190))
// console.log(lastDig(12,215,2142))

// 8. Automorphic Numbers
// A number n is automorphic if n^2 ends in n.
// For example: n=5, n^2=25
// Create a function that takes a number and returns true if the number is automorphic, false if it isn't.
// function isAutomorphic(n){
//     let nbinh = n*n
//     nbinh = String(nbinh)
//     nbinh = nbinh.split("")
//     n = String(n)
//     let arr=[]

//     for(let i = nbinh.length-1; i >= nbinh.length-n.length ; i--){
//         arr.splice(0,0,nbinh[i])   // 5 7 7 6   4-2=2
//     }
//     arr = arr.join("")

//     if(n == arr){
//         return "true\n----------------------------------------------------------------"
//     }
//     else return"false\n----------------------------------------------------------------"
// }

// console.log(isAutomorphic(5))
// console.log(isAutomorphic(8))
// console.log(isAutomorphic(76))
// console.log(isAutomorphic(25))

// 9. BMI Calculator
// Get heigt in cm and weight in kg of 1 human then calculate they BMI number and print answer
// function BMI(height,weight){
//     height = height/100
//     let bmi = weight/(height*height)
//     bmi = bmi.toFixed(2)
//     if(bmi<16){
//         return bmi+ " gầy độ 3"
//     }
//     else if(bmi>=16 && bmi<17){
//         return bmi+ " gầy độ 2"
//     }
//     else if(bmi>=17 && bmi<18.5){
//         return bmi+ " gầy độ 1"
//     }
//     else if(bmi>=18.5 && bmi<25){
//         return bmi+ " bình thường"
//     }
//     else if(bmi>=25 && bmi<30){
//         return bmi+ " thừa cân"
//     }
//     else {
//         return bmi+ " béo phì"
//     }
// }

// console.log(BMI(180,55))