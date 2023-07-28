function calculateWeight() {
    const weightInput = document.getElementById("weight");
    const weight = parseFloat(weightInput.value);
  
    if (!isNaN(weight)) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
  
      const planetWeights = {
        Mercury: 0.38,
        Venus: 0.91,
        Earth: 1,
        Mars: 0.38,
        Jupiter: 2.34,
        Saturn: 0.93,
        Uranus: 0.92,
        Neptune: 1.12,
        Pluto: 0.06 // (Not recognized as a planet by the International Astronomical Union, but included for demonstration purposes)
      };
  
      for (let planet in planetWeights) {
        const planetWeight = (weight * planetWeights[planet]).toFixed(2);
        const resultText = `Your weight on ${planet}: ${planetWeight} kg`;
        const resultElement = document.createElement("p");
        resultElement.textContent = resultText;
        resultsDiv.appendChild(resultElement);
      }
    }
  }