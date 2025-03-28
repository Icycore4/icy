document.getElementById('changeColorBtn').addEventListener('click', function() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Change the background color using the generated RGB values
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
