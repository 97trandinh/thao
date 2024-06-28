/**
 *  1. Sử dụng JS trong file HTML
 *  2. Comments
 *  3. Khai báo biến.
 *      -    Gán lại gtri  Khai báo ko gtri  Gọi trước khi khai báo if,for
 *      - var       có              có                    có        có
 *      - let       ko              có                    ko        ko
 *      - const     ko              ko                    ko        ko
 *  4. Hàm?
 *    a. Định nghĩa
 *       - Một khối mã.
 *       - Làm 1 việc cụ thể.
 *    b. Loại hàm.
 *       - Built-in
 *       - Tự định nghĩa
 *      b1.  Một số hàm built-in.
 *           - Alert
 *           - Console (warn, error)
 *           - Confirm
 *           - Prompt 
 *           - Set timeout (chạy một lần sau một khoảng thời gian)
 *           - Set interval (chạy đoạn code sau một khoảng thời gian và lặp lại)
 *      b2. Tự đinh nghĩa.
 *          b2.1 Tính chất
 *             - Không thực thi khi định nghĩa
 *             - Sẽ thực thi khi được gọi
 *             - Có thể nhận tham số
 *             - Có thể trả về 1 giá trị.
 *  5. Toán tử trong JavaScript
 *     - Toán tử số học - Arithmetic
 *     - Toán tử gán - Assignment
 *     - Toán tử so sánh - Comparison
 *     - Toán tử logic - Logical
 *  6. Kiểu dữ liệu trong JS
 *     a. Dữ liệu nguyên thuỷ - Primitive Data
 *        - Number
 *        - String
 *        - Boolean
 *        - Undefined
 *        - Null
 *        - Symbol
 *     b. Kiểu dữ liệu phức tạp - Complex Data
 *        - Function
 *        - Object
 *   7. Hiển thị giá trị ra web với JS
 *      - Document.write()
 *      - Window.alert()
 *      - Document.getElementById(id).innerHTML
 //   ----------------  VIDU --------------
 /**
  * Ví dụ về biến toàn cục (Global Variable) và biến cục bộ (Local Variable).
  */
//  document.getElementById("p").innerHTML = "Hello";
// function son(param,data) {
//   console.log(param,data);

// }
// son("viet");
// function name(a,b) {
//   console.log(a);
//   console.log(b);
//      return console.log(a + b) ;
// }
// name(3,5);
// let timeout;

// setInterval(alertFunc, 2000); // 1000 milis = 1s
// // setTimeout(alertFunc,2000);
// function alertFunc() {
//  console.log("duan");
// }
// var a = 4 ;
// var b = a-- - ++a - a-- + ++a ;//  4 - 4 - 4 + 4
// console.log(b);
// var a =  1 ;
// var b = 2;
// if(!(a > b)) {
//   console.log("true");
// }else {
//   console.log("false");
// }

// document.getElementById("p").innerHTML = "Hello";

// Build-in
// a la lam 1ngay b lam nua ngay

// function name(a,b) {
//   const c = a + b;
//  return c;
// }
// console.log(name(1,3) + 1);
// const a = 5; // biến toàn cục

// function name() {

//    var a = 5;
//     // a = a + 3;
//     a /= 3;
//     console.log(a);

// }

// name();
// var a = 1;
// var b = "1";
// var c = true;
// var d = "";
// var f ;
// var e = {
//   a : 1,
//   b: c,
// };
// var g = [1,2,4,6,7];
// var n = b - a;
// console.log(typeof n);

// var a = 5;
// var b = ++a + a-- + a--; // 6 + 6 + 5
// console.log(b);

// var d = 1;
// if(d) {
//   console.log("dung");
// }else {
//   console.log("sai");
// }
// var x = 5 ;
// var y = 7 ;

// // đang định nghĩa
// function cv1 () {
//   console.log('cv1 (y,x) ');
// }
// setTimeout(cv1(),7000);


// làm công việc đó 
// x là làm 1 ngay y la nua ngay
// function run(a, b, c){
// 	var max = a;
//     if(a < b) {
//         max = b;
//     }
//     if(a < c) {
//         max = c;
//     }
//     if(b > c) {
//       max = b;
//   }
// 	console.log("The greatest number is " + max);
// }
// run(1,5,3);

// name();
 


// 3 từ khoá var , let , const 
// Kiểu dữ liệu
 


// alert(typeof b);
// console.log(b);

// Tính lương của nhân viên và in ra màn hình vơi x
// là làm 1 ngày , y là làm nữa ngày 

var account = {
    pin : "1234",
    name : "sơn",
    price : 3000
  }
  
  
  var dung = 1;
  login();
  
  
  function login() {
    var pin = prompt("Nhập mã pin");
    if (pin === account.pin) {
      alert("Đăng nhập thành công");
      mainMenu();
    } else {
      alert("Mã PIN không đúng");
      login();
    }
  }
  
  function  mainMenu() {
    while(dung != 2) {
      var n = prompt("1. Nạp tiền 2. Rút tiền 3. Chuyển khoản 4. Kiểm tra số dư 5. Thoát");
      switch (n) {
        case "1":
         var nap = prompt("Vui lòng nhập số tiền nạp:");
         account.price += parseInt(nap);
          break;
        case "2":
          var rut = prompt("Vui lòng nhập số tiền rút:");
          if(parseInt(rut) < account.price){
              account.price -= parseInt(rut);
              alert("Rút thành công");
          }else {
            alert("số dư tài khoản ko đủ ")
          }
          break;
        case "3":
          var rut = prompt("Vui lòng nhập số tiền chuyển khoản:");
          if(parseInt(rut) < account.price){
              account.price -= parseInt(rut);
              alert("Chuyển khoản thành công");
          }else {
            alert("số dư tài khoản ko đủ ")
          }
          break;
        case "4":
           alert(account.price);
          break;
        case "5":
           alert("Bye");
           dung = 2;
          break;
        default:
          console.log('bạn đã nhập sai');
      }
    }
   
  }