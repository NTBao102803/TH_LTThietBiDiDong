const bills = [125, 555, 44]

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
