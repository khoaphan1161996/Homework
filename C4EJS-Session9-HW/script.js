// 1. insertAdjacentHTML first parameter is the position where you put the new HTML into
// the container
// Read this documentation, then read the following code
// Answer which is which:
// 1.D 2.C 3.A 4.B

// 2. Instead of using setTimeOut to create a timer, we can use setInterval for shorter
// code
// 3. Read about function scope in this link then answer the following question
// 3.1. Can a variable declared by let, in a function still exists after the function
// finishes running?
// Không vì let là blockscope

// 3.2. Can var variable declared by var, in a function still exists after the
// function finishes running?
// Không trừ khi khai báo ngoài hàm

// 4. You can get DOM (Read) by tag name using getElementsByTagName function, the
// result you get is NOT a single HTMLElement but a HTMLCollection, which can be
// treated as Array (you can use indexing [], for statement and length with it). Refer
// to this link.
// Use getElementsByTagName function to get ALL of the <li>tag. Print/log out the first
// element (which is <li>Articles</li>)
// let a = document.getElementsByTagName("li")
// console.log(a[1].textContent)
// and then use for loop to print ALL of the
// DOM you get from the function.
// for(let i =0;i<a.length; i ++){
//     console.log(a[i].textContent)
// }

// 5. You can get DOM (Read) by class name using getElementsByClassName function.
// The result you get, again, is NOT a single HTMLElement by a HTMLCollection. Refer
// to this link.
// Given the following HTML
// Use getElementsByTagName function to get ALL of the <div> tag.Print/log out the
// second element (which is <div class="singer">Nate Ruess</div>
// let a = document.getElementsByClassName("singer")
// console.log(a[1].textContent)
// and then
// use for loop to print ALL of the DOM you get from the function.
// for(let i =0;i<a.length;i++){
//     console.log(a[i].textContent)
// }

// 6. Learn how to remove (Delete) an HTMLElement using HTMLElement.remove()
// function, refer to this:
// let a = document.getElementById("div-02")
// a.remove()

// document.getElementsByClassName("singer")[1].remove()

// 7. When using addEventListener, in the callback you can add a parameter / argument
// to get more information about the event, for example:
// 7.1 Catch ‘click’ event from 2 different buttons, id=”button1” and
// id=”button2”, in the callback body of the 2 events, print, or log out e.target.
// What is it?
// let a = document.getElementById("button1")
// a.addEventListener('click',(e)=>{
//     console.log(e.target)
// })
// let b = document.getElementById("button2")
// b.addEventListener('click',(e)=>{
//     console.log(e.target)
// })
// e target: trỏ đến thẻ người dùng bấm vào

// 7.2. Catch a ‘keydown’ event from an input, in the callback body of the
// event, print / log out the e.key. What is it?
// let a = document.getElementById("button1")
// a.addEventListener('keydown',(e)=>{
//     console.log(e.key)
// })
// e key: hiện ra nút người dùng nhập vào

// 8. Write a function, using alert to show your name and one thing you wish to do this year
// function khoa(){
//     alert("Tôi tên Khoa và tôi muốn thật giỏi code trong năm nay")
// }
// khoa()

// 9. Write a function, using alert to show user’s name and one wish of the user this year,
// name and wish are function parameters
// function user(name,wish){
//     console.log("Tôi tên",name,"và mong muốn của",name,"trong năm nay là",wish)
// }
// let a = prompt("nhập tên của bạn đi")
// let b = prompt("nhập mong muốn của bạn trong năm nay đi")
// user(a,b)

// 10. Write a function, using alert to show user’s name and one wish of the user in this year,
// name and wish are function parameters. Handle the case of missing wish in
// function parameters
// function user(name,wish){
//     if(wish.length===0){
//         console.log("Tôi tên",name,"và tôi chưa nghĩ ra mong muốn của minh")
//     }
//     else console.log("Tôi tên",name,"và mong muốn của",name,"trong năm nay là",wish)
// }
// let a = prompt("nhập tên của bạn đi")
// let b = prompt("nhập mong muốn của bạn trong năm nay đi")
// user(a,b)

// 11. Take a look at the following UI