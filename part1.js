var markWeight = 78
var markHeight = 1.69
var johnWeight = 92
var johnHeight = 1.95

// hàm tính BMI
function BMI(weight, height) {
    return weight / (height * height)
}

// tính BMI
var markBMI = BMI(markWeight, markHeight)
var johnBMI = BMI(johnWeight, johnHeight)

console.log('markBMI: ' + markBMI)
console.log('johnBMI: ' + johnBMI)
var markHigherBMI = markBMI > johnBMI

console.log('Mark có BMI cao hơn John hay không ?' + markHigherBMI)
console.log()
// dữ liệu 2
var markWeight1 = 95
var markHeight1 = 1.88
var johnWeight1 = 85
var johnHeight1 = 1.76

// tính BMI
var markBMI1 = BMI(markWeight1, markHeight1)
var johnBMI1 = BMI(johnWeight1, johnHeight1)

console.log('markBMI: ' + markBMI1)
console.log('johnBMI: ' + johnBMI1)
var markHigherBMI1 = markBMI1 > johnBMI1

console.log('Mark có BMI cao hơn John hay không ? ' + markHigherBMI1)