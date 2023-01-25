/**
 * @param {string} text
 */
const getUnit = (text) => {
  if (text.includes("°F")) return "Fahrenheit";
  else if (text.includes("°C")) return "Celsius";
  return "N/A";
};

// Sample usage - do not modify
getUnit("It was 90°F yesterday"); // Fahrenheit
getUnit("Why is it 20°C"); // Celsius
getUnit("It is expected to be cold."); // N/A
