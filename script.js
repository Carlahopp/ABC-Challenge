function colorAleatorio() {
  const colores = ["green", "blue", "red"];
  const random = Math.floor(Math.random() * 3);
  return colores[random];
}

// Cuando hagan clic en cualquier h5
document.addEventListener("DOMContentLoaded", function() {
  const h5s = document.querySelectorAll("h5");
  h5s.forEach(function(h5) {
    h5.addEventListener("click", function() {
      this.style.color = colorAleatorio();
    });
  });
});