// Câu 4: Write a script to simulate a clothes shop, asking and performing certain tasks from users

// let a = ["Jean","T-Shirt", "Socks"]
// let f=""
// let b =["C","R","U","D","c","r","u","d","huy"]
// let x = 0
// let y = 0
// while(y==0){
// let intro = prompt("Hi there, welcome to shop admin panel, what do you want? (C,R,U,D)")
// while(x==0){
//     for (let i =0; i<b.length;i++){
//         if(intro==b[i]){x=1}
//     }
//     if(x==0){alert("This command is not supported ")
//         intro = prompt("Hi there, welcome to shop admin panel, what do you want? (C,R,U,D)")}
// }
// //Nhap R
// if(intro=="r"||intro=="R"){
//     for(i =0;i<a.length;i++){
//         f+=`${i+1}. ${a[i]}\n`
//     }
//     alert(`The current item:\n${f}`)
//     f=""
// }
// //Nhap C
// else if(intro=="c"||intro=="C"){
//    let  newitem= prompt("Enter the name of new item")
//     a.push(newitem)
//     alert("Done")
//    }
// //Nhap U
// else if(intro == "u"||intro=="U"){
//     let upd = prompt("Enter the position you want to update")
//     let newname=prompt("Enter the new name")
//     a[upd-1]=newname
//     alert("Done")
//     }

// //Nhap D
// else if(intro=="d"||intro=="D"){
//     let del =prompt("Enter the position you want to delete")
//     a.splice(del,1)
//     alert("Done")
//     }
// else if(intro=="huy"){break}
// }

// let shop=["Jeans","T-Shirt","Socks"]
// let method = prompt("Hi there, welcome to shop admin, what do you want (C, R, U, D)?")
// while (true){
//     if (method == "c"){ //create method
//         let creat_Item = prompt("Enter the name of the new item:")
//         shop.push(creat_Item)
//         alert("Done")
//     }
//     else if (method == "r"){ //read method
//         let result = "" 
//         for (let i = 0; i < shop.length; i++){
//             result = result + (i+1 + ". " + shop[i] + "\n")
//         }
//         alert ("The curent item are: \n" + result)
//     }
//     else if (method == "u"){
//         let position_Update = Number(prompt("Enter the position you want to update"))
//         let newName_Update = prompt("Enter the new name:")
//         shop[position_Update - 1] = newName_Update
//         alert("Done")
//     }
//     else if (method == "d"){
//         let position_Delete = Number(prompt("Enter the position you want to delete"))
//         shop.splice(position_Delete-1,1)
//         alert("Done")
//     }
//     else {
//         alert("This command is not supported")
//     }
//     method = prompt("Hi there, welcome to shop admin, what do you want (C, R, U, D)?")
// }

//Câu 5: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
// let n = prompt("Enter a squence of Number , separated by commas(,)")
// let a = n.split(",")
// let b = 0
// for(let i=0 ; i<a.length ; i++ ){
//     b += Number(a[i])
// }
// alert("The sum of them is " +b)

//Câu 6: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
// let n = prompt("Enter a squence of Number , separated by commas(,)")
// let a = n.split(",")
// for(i = 0; i<a.length;i++){
//     a[i]=Number(a[i])
// }
// console.log("The smallest Number is "+Math.min(...a))

// let n = prompt("Enter a squence of Number , separated by commas(,)")
// let a = n.split(",")
// for(i = 0; i<a.length;i++){
//     a[i]=Number(a[i])
// }
// console.log("The smallest Number is "+Math.min(...a))

//Câu 7:Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let a =0
// let i =0
// let n = Number(prompt("Enter a number"))
// console.log(n)
// while (isNaN(n){
//     n = Number(prompt("Please enter a number"))
// }
// console.log (n)
// for(i=0;i<arr.length;i++){
//     if(n==arr[i]){a =1 
//     break}
// }
// if(a==1){alert(n+" is FOUND in my array at index "+i)}
// else alert(n+" is NOT found in my array") 

//Câu 8: You are a shepherd who owns a flock of sheep
//  array=[5 , 7 , 300, 90,24,50,75]
// //8.1
// let f = ""
// for(let i =0 ; i< array.length; i++){
//     f += array[i]+ " "
// }
// console.log(`Hello, my name is Khoa and here is my sheep sizes: \n `+f)
// //8.2
// console.log(`Now my biggest sheep has size ${Math.max(...array)}, let's shave it`)
// //8.3
// let max = Math.max(...array)
// let vitrimax = array.indexOf(max)
// array[vitrimax]=8

// array[array.indexOf(Math.max(...array))] = 8
// console.log(`After shearing, here is my flock \n ${array}`)
// //8.4 Qua tháng mới
// for(let i=0;i<array.length;i++){
//     array[i]=array[i]+50
// }
// console.log(array)
// 8.5
// for(let x=0;x<3; x++){
//     console.log(`Now my biggest sheep has size ${Math.max(...array)}, let's shave it`)
//     max = Math.max(...array)
//     vitrimax = array.indexOf(max)
//     array[vitrimax]=8
//     console.log(`After shearing, here is my flock \n ${array}`)
//     for( i=0;i<array.length;i++){
//         array[i]=array[i]+50
//     }
//     console.log(array)
//     console.log(typeof(array))
// }
// //8.6
// let m =0
// for(let d=0 ; d<array.length;d++){
//     m += Number(array[d])
// }
// console.log(`my flock has size in total: `+m)
// giatien = m*2
// console.log(`i would get 1010 * 2$ = `+giatien)

//Bài 10: (Optional) Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>
// let nhap = prompt(["Enter a sequence of names"])
// let a = nhap.split(",")
// let a = [4 ,3,"haha"]
// let f = ""
// for(i=0;i<a.length;i++){
//     f += `<${a[i]}>,`
// }
// console.log(nhap+" ==>" +f)

// let result = a.map(x =>"<" + x + ">")
// console.log(result)

// let res = a.map(function(val,i,arr){
//     return val = "<"+val+">"
// })
// console.log(res)

// let res = a.map((val,i,arr)=>{
//     return val = "<"+val+">"
// })
// console.log(res)

//Bài 11: (Optional) Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence.

// let array = prompt("Nhap day so:")
// array = array.split(",")
// let result = []
// let count = 0
// for (let i = 0 ; i < array.length ; i++){
//     if (array[i]%2 != 0){
//         result[count]=array[i]
//         count++
//     }
// }
// alert(result)

// let nhap = prompt(["Enter a sequence of number"])
// let a = nhap.split(",")
// for(let i = 0 ; i<a; i++){
//     a[i]=Number(a[i])
// }
// let result = a.filter(x => x %2 !=0)
// console.log(nhap+" ==>"+result)

// BT: Cho 1 array độ dài bất kì, chứa toàn số nguyên . In ra array sau khi đã dịch chuyển tất cả các số lẻ lên phía tren hết và các số chẵn ở phía sau hết.
// let array = [4,9,15,18,1,124,50,55]
// // kết quả 9,15,1,55,4,18,124,50
// let array1=array.filter(x => x %2 !=0)
// let array2=array.filter(x => x %2 ==0)
// let array3= array1.concat(array2)
// console.log(array3)

// let array = [4,9,15,18,1,124,50,55]
// let arrayle=[]
// let arraychan=[]
// for( let i = 0;i<array.length;i++){
//     if(array[i]%2!=0){
//         arrayle.push(array[i])
//     }
// }
// for( let i = 0;i<array.length;i++){
//     if(array[i]%2==0){
//         arraychan.push(array[i])
//     }
// }
// for(let i = 0; i<arraychan.length;i++){
//     arrayle.push(arraychan[i])
// }
// console.log(arrayle)