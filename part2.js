// Dữ liệu thử nghiệm 1
var markWeight1 = 78;
var markHeight1 = 1.69;
var johnWeight1 = 92;
var johnHeight1 = 1.95;

// Hàm tính BMI
function BMI(weight, height) {
  return weight / (height * height);
}

// Tính toán BMI cho dữ liệu thử nghiệm 1
var markBMI1 = BMI(markWeight1, markHeight1);
var johnBMI1 = BMI(johnWeight1, johnHeight1);

// So sánh BMI và in kết quả
if (markBMI1 > johnBMI1) {
  console.log(`BMI của Mark (${markBMI1.toFixed(1)}) cao hơn John (${johnBMI1.toFixed(1)})!`);
} else if (johnBMI1 > markBMI1) {
  console.log(`BMI của John (${johnBMI1.toFixed(1)}) cao hơn Mark (${markBMI1.toFixed(1)})!`);
} else {
  console.log("Mark và John có cùng BMI!");
}