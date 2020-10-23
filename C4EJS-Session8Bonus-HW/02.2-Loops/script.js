// 1. Right-angled triangle
// Write a function that makes n calls to console.log to output the following triangle:
// function rightAngledTriangle(n){
//     let res = ""
//     for(let i = 1 ; i <=n ; i++){
//         res =  res + "#"
//         console.log(res)
//     }
// }

// rightAngledTriangle(4)
// rightAngledTriangle(6)

// 2. Left-angled triangle
// Write a function that makes n calls to console.log to output the following triangle:
// function leftAngledTriangle(n){
//     for(let i = 1 ; i <= n ; i++){
//         let res = ""
//         for(let j = 1 ; j <= n ; j++){
//             if(j>n-i){
//                 res += "#"
//             }
//             else res += " "
//         }
//         console.log(res)
//     }
// }

// leftAngledTriangle(4)
// leftAngledTriangle(6)

// 3. Isosceles triangle
// Write a function that makes n calls to console.log to output the following triangle:
// function Isoscelestriangle(n){
//     for(let i = 1 ; i <= n ; i++){
//         let res = ""
//         for(let j = 1 ; j <= n+i-1 ; j++){
//             if(j>n-i){
//                 res += "#"
//             }
//             else res += " "
//         }
//         console.log(res)
//     }
// }

// Isoscelestriangle(4)
// Isoscelestriangle(6)

// 4. Chessboard
// Write a program that creates a string that represents an n×n grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.This is an example of 8x8 chessboard:
// function chessBoard(n,string1,string2){
//     let boardodd = ""
//     let boardeven = ""
//     for(let i = 1 ; i <= n; i++){
//         if(i%2 !=0){
//             boardodd += string1+ " "
//         }
//         else boardodd += string2+ " "
//     }

//     for(let i = 1 ; i <= n; i++){
//         if(i%2 !=0){
//             boardeven += string2+ " "
//         }
//         else boardeven += string1+ " "
//     }

//     for(let i = 1 ; i <= n; i++){
//         if(i%2 !=0){
//             console.log(boardodd)
//         }
//         else console.log(boardeven)
//     }
// }

// chessBoard(8,"#","*")
// chessBoard(8,'^','%')

// 5. Fizz Buzz
// Write a program that uses console.log to print all the numbers from 1 to n, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// function fizzBuzz(n){
//     for(let i = 1 ; i<=n ; i++){
//         if(i%3==0 && i%5==0){
//             console.log("FizzBuzz")
//         }
//         else if(i%3==0){
//             console.log("Fizz")
//         }
//         else if(i%5==0){
//             console.log("Buzz")
//         }
//         else console.log(i)
//     }
// }

// fizzBuzz(10)
// fizzBuzz(15)

// 6. Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string
// function firstVowel(string){
//     string = string.toLowerCase()
//     for(let i = 0 ; i <string.length;i++){
//         if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
//             console.log(i)
//             break
//         }
//     }
    
// }

// firstVowel("apple")
// firstVowel("hello")
// firstVowel("STRAWBERRY")
// firstVowel("pInEaPPLe")

// 7. Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// function charCount(string1 , string2){
//     let count = 0
//     for(let i = 0 ; i <string2.length;i++){
//         if(string1 == string2[i]){
//             count += 1
//         }
//     }
//     console.log(count)
// }

// charCount("a", "edabit")
// charCount("c", "Chamber of secrets")
// charCount("b", "big fat bubble")

// 8. How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.
// function countVowels(string){
//     let count = 0
//     for (let i = 0 ; i<string.length ; i++){
//         if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
//             count += 1
//         }
//     }
//     console.log(count)
// }

// countVowels("Celebration")
// countVowels("Palm")
// countVowels("Prediction")

// 9. Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// function reverseCase(string){
//     let substring = []
//     for (let i = 0 ; i<string.length ; i++){
//         if(string[i] == string[i].toUpperCase()){
//             substring.push(string[i].toLowerCase())
            
//         }
//         else {
//             substring.push(string[i].toUpperCase())
//         }
//     }
//     console.log(substring.join(""))
// }

// reverseCase("Happy Birthday")
// reverseCase("MANY THANKS")
// reverseCase("sPoNtAnEoUs")