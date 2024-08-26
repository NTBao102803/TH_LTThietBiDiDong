const DolphinsScore = [44, 23, 71]
const KoalasScore = [65, 54, 49]

const calcAverage = (scores) => {
    let sum = 0;
    for (let score of scores) {
        sum += score
    }
    return sum / scores.length
}
const avgDolphins = calcAverage(DolphinsScore)
const avgKoalas = calcAverage(KoalasScore)


console.log(avgDolphins)
console.log(avgKoalas)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas)
        console.log(`Dolphins thắng (${avgDolphins} vs ${avgKoalas})`)
    else if (avgKoalas >= 2 * avgDolphins)
        console.log(`Koalas thắng (${avgKoalas} vs ${avgDolphinsss})`)
    else
    console.log('Không đội nào thắng')
}

checkWinner(avgDolphins, avgKoalas)
// dữ liệu 2
const DolphinsScore1 = [85, 54, 41]
const KoalasScore1 = [23, 34, 27]

const avgDolphins1 = calcAverage(DolphinsScore1)
const avgKoalas1 = calcAverage(KoalasScore1)

console.log(avgDolphins1)
console.log(avgKoalas1)

checkWinner(avgDolphins1, avgKoalas1)