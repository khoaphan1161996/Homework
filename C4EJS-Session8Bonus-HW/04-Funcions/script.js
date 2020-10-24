// 1. Remove all dollar sign of a string
// function removeDollarSign(text){
//     text = text.split("$")
//     let res = ""
//     for(let i = 0 ; i < text.length ; i ++){
//         res += text[i]
//     }
//     return res
// }

// console.log(removeDollarSign('$80% percent of $life is to show $up'))

// 2. Binary Agents
// Không làm

// 3. Beans counting
// Không làm

// 4. Semiprimes
// Không làm

// 5. Prime Factorization
// Không làm

// 6. The Recamán Sequence
// Không làm

// 7. Hailstone Sequence
// Write the function that can generate hail stone from an number
// Hailstone Sequences follow these rules:
// If a number is even, next number is divided by 2
// If a number is odd, next number multiplied it by 3 and add 1.
// For example, for a starting number of 7, the sequence is 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, ....
// Such sequences are called hailstone sequences because the values typically rise and fall, somewhat analogously to a hailstone inside a cloud.
// Remember that hailstone sequence always end at 1! you can use arrayname.push(value) to add an value to the end of the arrayname (arrayname is an array)
// function hailstone(number){
//     let sequence = []
//     sequence.push(number)
//     while (true){
//         if(number!=1){
//             if(number%2==0){
//                 number = number/2
//                 sequence.push(number)
//             }
//             else {
//                 number = number*3+1
//                 sequence.push(number)
//             }
//         }
//         else {
//             break
//         }
//     }
//     console.log(sequence)
// }
// hailstone(7)

// 8. Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// function spinalCase(str) {
//     str = str.replace(/(?!^)([A-Z])/g, ' $1')
//                   .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
//     return str
//   }

// console.log(spinalCase('This Is Spinal Tap'))
// console.log(spinalCase('thisIsSpinalTap'))
// console.log(spinalCase('The_Andy_Griffith_Show'))


// 9. Pig LatinPassed
// Không làm

