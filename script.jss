document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('loadSlider');
  if(slider){
    const priceDisplay = document.getElementById('priceDisplay');
    const truckImg = document.getElementById('truckImg');
    const prices = [200, 400, 600, 800, 1000];
    const truckImages = [
      'images/truck-1.png',
      'images/truck-2.png',
      'images/truck-3.png',
      'images/truck-4.png',
      'images/truck-5.png'
    ];
    slider.addEventListener('input', function(){
      const index = parseInt(this.value) - 1;
      priceDisplay.textContent = `$${prices[index].toLocaleString()}`;
      truckImg.src = truckImages[index];
    });
  }
});