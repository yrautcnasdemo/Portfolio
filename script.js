const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const imgSlider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');



let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {

        index = ind;

        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });

        document.querySelector('.item.active').classList.remove('active');
        items[index].classList.add('active');
    });
});


// let currentMainImage = 1;
// function changeImage(src) {
//     const fadeOutImage = document.getElementById(`mainImage${currentMainImage}`);
//     currentMainImage = currentMainImage === 1 ? 2 : 1;
//     const fadeInImage = document.getElementById(`mainImage${currentMainImage}`);
    
//     fadeOutImage.style.opacity = '0';
//     fadeInImage.src = src;
//     fadeInImage.style.opacity = '1';
// }