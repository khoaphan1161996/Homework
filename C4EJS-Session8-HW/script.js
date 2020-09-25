// Bài con cừu
// 8.1. Create an array to represent the sizes of your flock, and log all of your
// flock size, expected screen output:
// let myflock = [5,7,300,90,24,50,75]
// function read(flocks){
//     console.log("Hello, my name is Phuong Nam and here is my sheep sizes: \n",...flocks)
// }
// read(myflock)
//8.2. At the end of each month, you have to choose one and only one sheep to
// shear and thus you want to choose the biggest one to maximize your profit. Add
// scripts to search for the biggest sheep in your list:
// 8.3. When your biggest sheer, its size will return to the default size, which is 8.
// function catLong (flocks){
//     let max = 0
//     for(let i=0;i<flocks.length;i++){
//         if(max<flocks[i]){
//             max=flocks[i]
//         }
//     }
//     console.log("Now my biggest sheep has size "+max+", let's shave it")
//     flocks[flocks.indexOf(max)]=8
//     console.log("After shearing, here is my flock\n",...flocks)
// }
// catLong(myflock)
// 8.4. In the following month, EVERY sheep in your flock grow, they have their
// size increased by 50. Log them out
// function motthang(flocks,thang){
//     for(let i =0;i<flocks.length;i++){
//         flocks[i] += 50
//     }
//     console.log("MONTH "+thang+"\n"+"One month has passes, my sheeps has grown, here are their sizes: \n",...flocks)
// }
// motthang(myflock,1)
// 8.5. Let’s do this for 4 months (or as long as you want)
// for(let i =2; i<=4;i++){
//     catLong(myflock)
//     motthang(myflock,i)
// }

// Dùng Settimeout từ tháng 2 đến tháng 4: 1 tháng = chờ 5s
// let second = 5000
// for(let i =2; i<=4;i++){
//     setTimeout(function(){
//         catLong(myflock)
//         motthang(myflock,i)
//     },second)
//     second+=5000
// }

// Dùng Settimeout cả bài
// let myflock = [5,7,300,90,24,50,75]

// function read(flocks){
//     console.log("Hello, my name is Phuong Nam and here is my sheep sizes: \n",...flocks)
// }
// read(myflock)

// function catLong (flocks){
//     let max = 0
//     for(let i=0;i<flocks.length;i++){
//         if(max<flocks[i]){
//             max=flocks[i]
//         }
//     }
//     console.log("Now my biggest sheep has size "+max+", let's shave it")
//     flocks[flocks.indexOf(max)]=8
//     console.log("After shearing, here is my flock\n",...flocks)
// }

// function motthang(flocks,thang){
//     for(let i =0;i<flocks.length;i++){
//         flocks[i] += 50
//     }
//     console.log("MONTH "+thang+"\n"+"One month has passes, my sheeps has grown, here are their sizes: \n",...flocks)
// }

// let second = 5000
// for(let i =1; i<=4;i++){
//     setTimeout(function(){
//         catLong(myflock)
//         motthang(myflock,i)
//     },second)
//     second+=5000
// }


// 1. Remove all dollar sign of a string
// function removeDollarSign(text){
//     return "new string"
// };
// removeDollarSign(`$80% percent of $life is to show $up`)
// Hint: you can iterate through an string (character by character) by doing the same as array([])

// function removeDollarSign(text){
//     text= text.split("$").join("")
//     console.log(text)
// }
// removeDollarSign(`$80% percent of $life is to show $up`)

// 2. Write a JS function that accepts a string as a parameter and find the longest word within the string.
// EX string: "Web Development Tutorial"
// EX output: "Development"
let n = prompt("Enter string")
n = n.split(" ")    
console.log(n)
function output(text){
    let max = 0
    let a = ""
    for(let i = 0;i<text.length;i++){
        if(max<text[i].length){
            max = text[i].length
            a = text[i]
        }
    }
    console.log(a)
}
output(n)
