// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// let str_input = prompt("nhập 1 chuỗi")
// var newString =""
// for(let i = str_input.length - 1; i>=0 ;i--){
//     newString += str_input[i]
// }
// alert(newString)

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với ký tự đầu được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This Is Test"
// Cho "hello a"; In ra "Hello A”

// let str_input = prompt("nhập 1 chuỗi")
// strupdate = str_input.charAt(0).toUpperCase()
// for ( let i =1; i <str_input.length; i++){
//     strupdate += str_input[i]
// }
// console.log(strupdate)

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// let Arr=[1,2,3,3,4,5,4,4,4,5,5];
// for(let i =0;i<Arr.length;i++){
//     for(let j=Arr.length-1;j>i;j--){
//         if(Arr[i]==Arr[j]) {
//             Arr.splice(j,1)
//         }
//     }
// }
// console.log(Arr)

// Bài 4 : Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
// let person = [
//     {
//         name: "Hiếu",
//         age: 25,
//         salary: 10000,
//         position: "Employee",
//     },
//     {
//         name: "Quang",
//         age: 21,
//         salary: 1000,
//         position: "Employee",
//     },
//     {
//         name: "Phi",
//         age: 22,
//         salary: 2000,
//         position: "Employee",
//     },
// ]
// alert("Xin chào đây là Mindx")
// let nhap = prompt("Nhập điều bạn muốn(C,R,U,D)").toLocaleLowerCase()
// while(true){
// if(nhap == "r"){
//     for(let i =0; i<person.length; i++){
//         alert(`Name: ${person[i].name}\nAge: ${person[i].age}\nSalary: ${person[i].salary}\nPosition: ${person[i].position}`)
//     }
// }
// else if(nhap == "c"){
//     let newname = prompt("Nhập tên người mới vào")
//     let newage = prompt("Nhập tuổi người mới vào")
//     let newsalary = prompt("Nhập lương người mới vào")
//     let newposition  = prompt("Nhập chức vụ người mới vào")
//     person.push({
//         name: newname,
//         age: newage,
//         salary: newsalary,
//         position: newposition,
//     })
//     alert("Done")
// }
// else if(nhap == "u"){
//     let vitri1 = prompt("Vị trí người này xuất hiện")
//     let newname1 = prompt("Nhập tên người mới vào")
//     let newage1 = prompt("Nhập tuổi người mới vào")
//     let newsalary1 = prompt("Nhập lương người mới vào")
//     let newposition1  = prompt("Nhập chức vụ người mới vào")
//     person[(vitri1-1)].name = newname1
//     person[(vitri1-1)].age = newage1
//     person[(vitri1-1)].salary = newsalary1
//     person[(vitri1-1)].position = newposition1
// }
// else if(nhap == "d"){
// let vitrid = prompt("Vị trí người muốn xóa")
// person.splice(vitrid-1,1)
// }
// else if(nhap =="huy"){break}
// else {
//     alert("Không hỗ trợ")
// }
//     nhap = prompt("Nhập điều bạn muốn(C,R,U,D)").toLocaleLowerCase()
// }

// Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// Ví dụ
// Ngày 30/4/2019 là ngày hợp lệ
// Ngày 29/2/2019 là ngày không hợp lệ
// Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// let nhap = prompt("nhập vào ngày tháng năm ngăn cách bởi dấu /")
// let a = nhap.split("/")
// let d = a[0]
// let m = a[1]
// let y = a[2]
