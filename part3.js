
function calculateAverage(scores) {
    return scores.reduce((total, score) => total + score, 0) / scores.length;
  }
  
  // Dữ liệu thử nghiệm 1
  let dolphinsScores1 = [96, 108, 89];
  let koalasScores1 = [88, 91, 110];
  
  // Dữ liệu thử nghiệm phần thưởng 1
  let dolphinsScores2 = [97, 112, 101];
  let koalasScores2 = [109, 95, 123];
  
  // Dữ liệu thử nghiệm phần thưởng 2
  let dolphinsScores3 = [97, 112, 101];
  let koalasScores3 = [109, 95, 106];
  
  // Hàm xác định đội thắng
  function determineWinner(dolphinsScores, koalasScores, minScore = 100) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

  console.log(dolphinsAverage)
  
    if (dolphinsAverage > koalasAverage   
   && dolphinsAverage >= minScore) {
      console.log('Đội Dolphins chiến thắng!');
    } else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
      console.log('Đội Koalas chiến thắng!');
    } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore && koalasAverage >= minScore) {
      console.log('Hòa!');
    } else {
      console.log('Không có đội nào đạt đủ điểm để chiến thắng!');
    }
  }
  
  // Gọi hàm để xác định đội thắng cho từng trường hợp
  determineWinner(dolphinsScores1, koalasScores1);
  determineWinner(dolphinsScores2, koalasScores2, 100);
  determineWinner(dolphinsScores3, koalasScores3, 100);