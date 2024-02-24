const images = ['moon.png', 'stars.png', 'flowers.png'];

function preloadImages() {
  for (let image of images) {
    new Image().src = image;
  }
}

preloadImages();
