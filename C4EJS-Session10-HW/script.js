// Bài 1
// Implement an offline random quote app.
// const root_url="https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json"

// async function getAllQuote(){
//     const res = await fetch(root_url);
//     const list_quote = await res.json();
//     let quotetext = document.getElementById("quotetext")
//     let quoteauthor = document.getElementById("quoteauthor")
//     let btn_reload = document.getElementById("btn_reload")
//     btn_reload.addEventListener('click',function(){
//         let quoterandom = list_quote[Math.floor(Math.random() * list_quote.length)]
//         console.log(quoterandom )
//         quotetext.textContent=quoterandom.quoteText
//         quoteauthor.textContent=quoterandom.quoteAuthor
//     })
// }

// getAllQuote()




// Bài 2
// Take a look at the following Timesheet
// 1) In JS, Initialize a variable named timeSheetData to store the data above, log/print it out
let timeSheetData = [
    {
        Project: "Learn front-end",
        Task:  "Learn HTML",
        TimeSpent: 6
    },
    {
        Project: "Learn front-end",
        Task:  "Learn CSS",
        TimeSpent: 8
    },  
    {
        Project: "Learn front-end",
        Task:  "Learn JS Variables and Data Types",
        TimeSpent: 6
    },
    {
        Project: "Learn git",
        Task:  "Learn git basics",
        TimeSpent: 2
    },
]

console.log(timeSheetData)

// 2) In HTML, create a <table> with the same headers as the above timesheet. If you have not worked with table before, watch the ‘HTML - List and Table’ video or see this quick example.
// 3) Get (Read) the table body from DOM
let tbody = document.getElementById("ts_tbody")
// console.log(tbody)

// 4) Insert ALL of the data in timeSheetData into the table body, each task in a row
for(let i =0;i<timeSheetData.length;i++){
    tbody.insertAdjacentHTML(`beforeend`,`<tr>
    <td>${timeSheetData[i].Project}</td>
    <td>${timeSheetData[i].Task}</td>
    <td>${timeSheetData[i].TimeSpent}</td><td><button class="btn_remove">X</button>
    <button class="btn_update">U</button></td>
    </tr>`)
}
document.getElementsByClassName("test")[0].remove()
document.getElementsByClassName("test")[0].remove()
document.getElementsByClassName("test")[0].remove()

console.log(tbody)

// 5) Update the UI (HTML) as follows:
// 6) Perform add new line when ‘Add’ button is clicked (note: Instead of only inserting new HTML into the table body, you should update timeSheetData first, then use timeSheetData to update the table)
let btn_add=document.getElementById("btn_add")
function them(callback){
    btn_add.addEventListener('click', function(){
        let input_proj=document.getElementById("input_proj")
        let input_projvalue =  input_proj.value
        let input_task=document.getElementById("input_task")
        let input_taskvalue =  input_task.value
        let input_time=document.getElementById("input_time")
        let input_timevalue = input_time.value
        let obj ={
            Project: input_projvalue,
            Task: input_taskvalue,
            TimeSpent: input_timevalue
        }
        timeSheetData.push(obj)
        console.log(timeSheetData)
        tbody.insertAdjacentHTML(`beforeend`,`<tr>
        <td>${input_projvalue}</td>
        <td>${input_taskvalue}</td>
        <td>${input_timevalue}</td><td><button class="btn_remove">X</button>
        <button class="btn_update">U</button></td>
        </tr>`)
        input_proj.value = ""
        input_task.value = ""
        input_time.value = ""
        callback()
    })
}

them(xoa)

// 7) Add new columns name Actions, with each line, add a delete button in the newly added column
// 8) When users click on the delete button, remove the respective line

let btn_remove = document.getElementsByClassName("btn_remove")
function xoa(){
    for(let i = 0;i<btn_remove.length;i++){
        btn_remove[i].addEventListener('click',function(e){
            // console.log(e.target.parentElement.parentElement)
            e.target.parentElement.parentElement.remove()
        })
    }
}

xoa()

// 9) Add Update, Clear buttons and U button in each line
// 10) Implement update

let btnclr = document.getElementById('btn_clr')

btnclr.addEventListener('click', () => {
    input_proj.value = ""
    input_task.value = ""
    input_time.value = ""
})

let btnupd = document.getElementsByClassName("btn_update")
