const opposingImage = document.getElementById('ANUBIS3D');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const offsetX = (window.innerWidth / 2 - mouseX) / 150; // Adjust sensitivity
  const offsetY = (window.innerHeight / 2 - mouseY) / 150; // Adjust sensitivity
  
  opposingImage.style.transform = `translate(-1%, -1%) translate(${offsetX}px, ${offsetY}px)`;
});