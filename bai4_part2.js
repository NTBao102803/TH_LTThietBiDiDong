const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

Array.prototype.myfilter = function (num1, num2){
    var tips = [];
    var x = 0;
    for(let i=0; i< this.length;i++){
        if(this[i]>=num1 && this[i] <= num2) {
            x = this[i] * 0.15
            tips.push(x);
        }
        else {
            x = this[i] * 0.2
            tips.push(x)
        }
    }
    return tips;
}

var tips = bills.myfilter(50, 300);
console.log(tips);

var total = []
for (var i = 0; i < tips.length; i++) {
    total.push(bills[i] + tips[i])
}

console.log(total)
// cách 1
function calcAverage(total) {
    var sum = 0;
    for (var i = 0; i < total.length; i++) {
        sum += total[i]
    }
    return sum / total.length
}
console.log(calcAverage(total))
// cách 2
var calcAverage1 = function(arr) {
    var sum = 0
    arr.forEach(e => {
        sum += e
    });
    return sum / arr.length
}
console.log(calcAverage1(total))