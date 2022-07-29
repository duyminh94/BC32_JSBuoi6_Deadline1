function baitap1() {
  // Bước 1:
  let total = 0;
  let n = 0;
  // Xử Lý
  while (total < 10000) {
    /* Bước nhảy vòng lặp là n++ */
    n++;
    /* Cứ mỗi vòng lặp là total sẽ cộng dồn với n cho đến khi total > 10000  */
    total = total + n;
  }
  console.log(n);
  //   Bước 3:
  let divResult = document.getElementById("result1");
  divResult.style.display = "block";
  divResult.innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}
/* Tóm Tắt Sơ Đồ 3 khối Bài tập 1
- Đầu Vào: 
- Tạo biến total để gán giá trị tổng của các số nguyên dương từ 0 đến n
- Tạo biến n là bước nhảy 
- Xử Lý:
- Sử dụng vòng lặp với điều kiện dừng là tổng các số nguyên dương từ 1 đến n > 10000
- Mỗi vòng thỏa điều kiện chạy thì bước nhảy vòng lặp là n++ 
- Đầu ra: 
- Hiển thị kết quả của giá trị n  */




function baitap2() {
  /* Bước 1: Dom */
  let numX = +document.getElementById("numX").value;
  let numN = +document.getElementById("numN").value;

  /* Bước 2: Xử Lý */
  let S = 0;
  for (let i = 1; i <= numN; i++) {
    S += Math.pow(numX, i);
    console.log(S);
  }
  /* Bước 3: Đầu ra */
  let divResult = document.getElementById("result2");
  divResult.style.display = "block";
  divResult.innerHTML = "Tổng: " + S;
};

/* Tóm sơ đồ 3 khối bài tập 2
- Đầu Vào:
- Tạo biến numX , numN để nhận giá trị nhập từ ô input
- Xử lý: 
- Tạo Biến S để nhận giá trị tổng của x + x^2 + x^3 + ... + x^n
- Sử dụng vòng lặp với điều kiện <= numN
- Với mỗi vòng lặp sẽ cộng dồn giá trị vào biến S 
- Đầu ra: 
- Hiển thị kết quả của giá trị S  */ 



function baitap3() {
  /* Bước 1 : Dom */
  let numG = +document.getElementById("numG").value;

  /* Bước 2 xử lý */
  let giaithua = 1;
  for (let i = 1; i <= numG; i++) {
    giaithua = giaithua * i;
  }
  console.log(giaithua);
  /* Bước 3 */
  let divResult = document.getElementById("result3");
  divResult.style.display = "block";
  divResult.innerHTML = "Giai Thừa: " + giaithua;
};
/* Tóm tắt sơ đồ 3 khối bài tập 3
- Đầu vào:
- Tạo Biến numG để nhận giá trị nhập từ ô input 
- Xử Lý 
- Tạo Biến giaithua để nhận giá trị của tổng  1*2*..n 
- Sử dụng vòng lặp với điều kiện chạy <= numG
- Với mỗi lòng lặp numG sẽ nhân giá trị hiện tại của biến giaithua sau đó sẽ gán lại cho biến giaithua 
- Đầu ra: 
- Hiển thị kết quả của giá trị giaithua */

function baitap4() {
  let count = "";
 
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      count += "<div style='background: red'>" + "Div Chẵn"  + "</div>" ;
    } else {
      count += "<div style='background: blue'>" + "Div Lẻ"   + "</div>";
    }
  }

  console.log(count);

  let divResult = document.getElementById("result4");
  divResult.style.display = "block";
  divResult.innerHTML = count;
};

/* Tóm tắt sơ đồ 3 khối bài tập 4
- Đầu Vào:
- Xử lý: 
- Tạo biến count 
- Sử dụng vòng lặp với điều kiện chạy < 10
- Nếu i % 2 === 0 thì tạo div style backgorund : red
- Nếu i % 2 !== 0 thì tạo div style backgorund : blue 
- Đầu ra:
- Hiển thị kết quả giá trị count */
