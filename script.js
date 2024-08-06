let currentMainImage = 1;
function changeImage(src) {
    const fadeOutImage = document.getElementById(`mainImage${currentMainImage}`);
    currentMainImage = currentMainImage === 1 ? 2 : 1;
    const fadeInImage = document.getElementById(`mainImage${currentMainImage}`);
    
    fadeOutImage.style.opacity = '0';
    fadeInImage.src = src;
    fadeInImage.style.opacity = '1';
}