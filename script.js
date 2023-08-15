// Get all the slideshow containers
const slideshowContainers = document.querySelectorAll('.slideshow-container');

// Loop through each slideshow container
slideshowContainers.forEach(container => {
  const images = container.querySelectorAll('.slideshow-img');
  let currentImageIndex = 0;

  // Function to show the next image in the slideshow
  function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }

  // Start the slideshow interval
  setInterval(showNextImage, 3000); // Change the interval as needed (in milliseconds)
});
