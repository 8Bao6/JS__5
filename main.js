/**
 * FUNCTION (HÀM)
 * - Hàm không có tham số
 * - Hàm có thông số
 * - Hàm không có giá trị trả về
 * - Hàm có giá trị trả về
 */
//TẠO HÀM
function xuatThongTin() {
  console.log("Hello T");
  console.log("Love");
  console.log("T");
}
//gọi hàm
xuatThongTin();



// function tinhTong() {
//   //Variable Scope Local
//   var number__1 = 5;
//   var number__2 = 10;
//   var tong = number__1 + number__2;
//   console.log("tong:", tong);

// }
// tinhTong();
// Tao ham tinhTong 
function tinhTong(a, b) {
  var number__1 = a;
  var number__2 = b;
  var tong = number__1 + number__2;
  console.log("tong:", tong);

}
tinhTong(5, 10);
tinhTong(30, 99);


function welcome(username) {
  console.log("Xin chao " + username);
}
welcome("Bao");
welcome("Truc");

//Tạo hàm tinhTong
function tinhTong(a, b) {
  var number__1 = a;
  var number__2 = b;
  var tong = number__1 + number__2;
  return tong; //Trả giá trị trong hàm

}
var sum = tinhTong(10, 5);
console.log(sum);
var thuong = sum * 2;
console.log("thuong", thuong);

/**Function Literal */

var demoFunctionLiteral = function () {
  //thân hàm
  console.log("Bao");
};
demoFunctionLiteral();

function demoClick() {
  console.log("demoClick");
}
// Kiểm tra số chẵn lẻ
function kiemTrachan(a) {
  var result;
  if (a % 2 === 0) {
    result = true;
  } else {
    result = false;
  }

}
function kiemTrachanle() {
  var number = document.getElementById("number1").value * 1;
  var content = "";
  var isEven = kiemTrachan(number);
  if (isEven) {
    content += number + "SC";
  } else {
    content += number + "SL";
  }
  console.log(content);
}


/**TIM SLN TRONG 3 SO */
function timSLN(a, b, c) {
  var max = a;
  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }
  return max;
}
function submitSLN() {
  var sothu1 = document.getElementById("soThu1").value * 1;
  var sothu2 = document.getElementById("soThu2").value * 1;
  var sothu3 = document.getElementById("soThu3").value * 1;
  var max = timSLN(sothu1, sothu2, sothu3);
  console.log("max", max);
}
