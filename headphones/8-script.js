// results.js

// Example data — could be fetched from an API
const resultsData = [75, 88, 92, 66];

// Select all pentagons
const pentagons = document.querySelectorAll('.pentagon');

// Fill each pentagon with its corresponding value
pentagons.forEach((pentagon, index) => {
  pentagon.textContent = `${resultsData[index]}%`;
});
