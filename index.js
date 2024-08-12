function toggleFunction() {
   
    var x = document.getElementById("topnav");
    x.classList.toggle("expanded");
}

function checkOrientation() {
    var x = document.getElementById("topnav");
    if (window.matchMedia("(orientation: landscape)").matches) { // Change the class name to "landscape" when in landscape orientation

        if (x.className === "nav-container responsive") {
            x.className = "nav-container"
        }


    } else {}
}

document.querySelectorAll('#topnav li a').forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        var x = document.getElementById("topnav");
        if (x.classList.contains("expanded")) {
            x.classList.remove("expanded");
        }
    });
});

// ant tab gellary
function showCategory(category) {
    // Hide all images
    const allImages = document.querySelectorAll('.img-wrapper');
    allImages.forEach(image => image.classList.remove('active'));
    
    // Show images of the selected category
    const categoryImages = document.querySelectorAll(`.${category}`);
    categoryImages.forEach(image => image.classList.add('active'));

    // Update active tab button
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(button => button.classList.remove('active'));

    const activeButton = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
    activeButton.classList.add('active');
}

// Show the default category on load
document.addEventListener('DOMContentLoaded', () => {
    showCategory('hall');
});

// lighthouse
// script.js

function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Close the lightbox when clicking anywhere outside of the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});


// testimonials
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.review-slides');
    const slidesCount = document.querySelectorAll('.review-slide').length;
    const paginationContainer = document.querySelector('.pagination');
    let currentIndex = 0;
    const autoSlideInterval = 3000; // Auto-slide every 3 seconds

    // Create pagination dots dynamically
    for (let i = 0; i < slidesCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.slide = i;
        paginationContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide(); // Reset auto-slide timer on manual interaction
        });
    });

    // Variables to store mouse and touch positions
    let startX, endX, isDragging = false;

    // Touch events
    slides.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
        stopAutoSlide(); // Stop auto-slide on touch start
    });

    slides.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    slides.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            currentIndex = (currentIndex + 1) % slidesCount;
        } else if (endX - startX > 50) {
            currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        }
        updateSlider();
        resetAutoSlide(); // Reset auto-slide timer after manual interaction
    });

    // Mouse events
    slides.addEventListener('mousedown', (event) => {
        startX = event.clientX;
        isDragging = true;
        stopAutoSlide(); // Stop auto-slide on mouse down
    });

    slides.addEventListener('mousemove', (event) => {
        if (isDragging) {
            endX = event.clientX;
        }
    });

    slides.addEventListener('mouseup', () => {
        isDragging = false;
        if (startX - endX > 50) {
            currentIndex = (currentIndex + 1) % slidesCount;
        } else if (endX - startX > 50) {
            currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        }
        updateSlider();
        resetAutoSlide(); // Reset auto-slide timer after manual interaction
    });

    slides.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            if (startX - endX > 50) {
                currentIndex = (currentIndex + 1) % slidesCount;
            } else if (endX - startX > 50) {
                currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
            }
            updateSlider();
            resetAutoSlide(); // Reset auto-slide timer after manual interaction
        }
    });

    // Auto-slide function
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slidesCount;
        updateSlider();
    }

    // Start the auto-slide interval
    let autoSlideTimer = setInterval(autoSlide, autoSlideInterval);

    // Function to stop auto-slide
    function stopAutoSlide() {
        clearInterval(autoSlideTimer);
    }

    // Function to reset auto-slide timer
    function resetAutoSlide() {
        stopAutoSlide();
        autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
    }

    updateSlider();
});

