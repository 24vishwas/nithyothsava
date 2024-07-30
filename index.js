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
