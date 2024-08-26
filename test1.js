const numbers = [45, 4, 9, 16, 25]

Array.prototype.myfilter = function(num) {
    const arrayNew = []
    for (var i = 0; i <this.length; i++) {
        if (num(this[i])) 
            arrayNew.push(this[i])
    }
    return arrayNew
}
var value = numbers.myfilter((num) => num > 18)

console.log(value)