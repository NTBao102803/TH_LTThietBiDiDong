const Mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
}
const John = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
}
function calcBMI(mass, height) {
    return mass / (height * height)
}

var markBMI = Math.round(calcBMI(Mark.mass, Mark.height))
var johnBMI = Math.round(calcBMI(John.mass, John.height))

if (markBMI > johnBMI)
    console.log(`${Mark.fullName} BMI (${markBMI}) is higher than ${John.fullName} BMI (${johnBMI})!`)
 else if (johnBMI > markBMI) 
    console.log(`${John.fullName} BMI (${johnBMI}) is higher than ${Mark.fullName} BMI (${markBMI})!`)
 else
    console.log(`Mark and John have the same BMI (${markBMI})!`);