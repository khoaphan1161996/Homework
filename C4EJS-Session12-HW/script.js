// 1. Cat and Mouse
// Có hai chú mèo đứng ở hai vị trí bất kỳ đang nhăm nhe một con chuột, cả hai đều muốn bắt được con chuột này. Được biết tốc độ của hai chú mèo đều tương đương nhau và xuất phát cùng lúc, hãy cho biết chú mèo nào sẽ bắt được con chuột trước.
// Chú ý:
// Nếu cả hai chú mèo đều bắt được chú chuột cùng lúc, chú chuột sẽ thoát được, khi đó hãy trả về "The mouse has escaped"
// Vị trí của các con vật được thể hiện bằng các mốc giá trị trên trục số.
// function who_would_win(x, y, z) {
//     let catAtoM = Math.abs(y - x);
//     let catBtoM = Math.abs(y - z);
//     if (catAtoM < catBtoM) {
//         return "Cat A";
//     } else if (catBtoM < catAtoM) {
//         return "Cat B";
//     } else {
//         return "The mouse has escaped";
//     }
// }

// console.log(who_would_win(-5, 2, 10)); // return "Cat A";
// console.log(who_would_win(3, 5, 5)); // return "Cat B";
// console.log(who_would_win(6, 3, 6)); // return "The mouse has escaped";

// 2. Covid19
// Cho mảng arr gồm các mảng số nguyên chứa id của những người tiếp xúc với nhau qua mỗi lần tiếp xúc. Để thuận tiện cho việc phòng chống covid-19, bạn hãy viết chương trình đếm số lượng các trường hợp F1, F2, F3, F4.
// Biết rằng 0 là id của người bị nhiễm covid 19 (F0), mỗi người sẽ có một id khác nhau, thứ tự các lần tiếp xúc theo sự xuất hiện trong arr và:
// F1 là người tiếp xúc với F0
// F2 là người tiếp xúc với F1
// F3 là người tiếp xúc với F2
// F4 là người tiếp xúc với F3

// Kho qua nghi mai ko ra

// 3. Sock Merchant 2
// Bạn là một chủ cửa hàng vớ (tất) vừa mới nhập về một lô hàng socks với các lượng tất theo danh sách sizes được khách hàng đặt trước. Nhưng vì một số lý do bất khả kháng mà các size tất trong socks bị lẫn lộn với nhau, hơn nữa số lượng cũng thiếu hoặc dư ra rất nhiều, hãy cho biết bạn có thể bán được tối đa bao nhiêu đôi tất trên từng size với lô hàng vừa nhập về.
// function saleMerchandise(a, b) {
//     let res = []
//     for(let i = 0 ; i<b.length ; i++){
//         let count = 0
//         for(let j= 0 ; j<a.length ; j ++){
//             if(b[i]==a[j]){
//                 count += 1
//             }
//         }
//         console.log(count)  // 0 0 1 1 2
//         if(count%2==0){
//             res.push(count/2)
//         }
//         else {res.push(Math.floor(count/2))}
//     }
    
//     return res
// }

// socks = [1, 2, 3, 1, 2, 4];
// sizes = [1, 2, 4]
// console.log(saleMerchandise(socks, sizes))

// 4. factorialDivisible
// Cho một số nguyên n và biểu thứ L=(n - 1)! + 1 = 1*2*3...*(n-1) + 1 hãy xác định xem L có chia hết cho n không.
// function factorialDivisible(n) {
//     let x = 1
//     for (let i = 1; i <= n-1 ; i++){
//         x *= i
//     }
//     x = x + 1
//     console.log(x)
//     if(x%n==0){
//         return "true"
//     }
//     else return "false"
// }

// console.log(factorialDivisible(3))
// console.log(factorialDivisible(5))
// console.log(factorialDivisible(4))