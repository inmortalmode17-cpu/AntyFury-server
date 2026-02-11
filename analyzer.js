const patterns = require("./patterns");

function analyzeText(text) {
  let score = 0;
  let maxScore = 0;

  Object.values(patterns).forEach(category => {
    maxScore += category.peso * category.palabras.length;

    category.palabras.forEach(word => {
      if (text.toLowerCase().includes(word.toLowerCase())) {
        score += category.peso;
      }
    });
  });

  const riskPercentage = Math.min(
    Math.round((score / maxScore) * 100),
    100
  );

  return {
    score,
    riskPercentage
  };
}

module.exports = {
  analyzeText
};
