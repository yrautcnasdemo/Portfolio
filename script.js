
//ON HOVER PLAY SOUND FOR NAV LINKS
const menuLinks = document.querySelectorAll('.menu-Button');
const sound = document.getElementById('hoverSound');

menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
//          ON CLICK PLAY SOUND FOR NAV LINKS
//          link.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();
    });
});




//FAKE RADIO MUSIC + SLIDER TITLE ON/OFF
const music = document.getElementById('music');
const sliderMusic = document.querySelector('.slider-music')

// Jouer la musique
document.getElementById('playButton').addEventListener('click', () => {
    music.play();
    sliderMusic.classList.remove('hidden-music');
});

// Stop la musique
document.getElementById('stopButton').addEventListener('click', () => {
    music.pause();
    music.currentTime = 0;
    sliderMusic.classList.add('hidden-music');
});




// BURGER MENU
const burgerWrap = document.querySelector('.burger-wrap');
const navLinkBurger = document.querySelector('.nav-link-burger');
const woop = document.getElementById('click-burger-sound');

burgerWrap.addEventListener('click', () => {
    /*ANIMATION BG-ICON*/
    burgerWrap.classList.toggle('active');
    woop.play();

    /*Open Nav BG-MENU*/
    if (navLinkBurger.style.left === "0px"){
        navLinkBurger.style.left = "-210px"
    } else {
        navLinkBurger.style.left = "0px";
    }
    
});




// CAROUSEL @CODEHAL
const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const imgSlider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');

let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {

        document.querySelector('.thumb .selected').classList.remove('selected');
        thumb.classList.add('selected');

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


// HEADER ScrollY adding classlist
window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    header.classList.toggle("fixed", window.scrollY > 700);
});


//MY LITTLE FOXs
const nom = document.querySelector('#last_name');
const prenom = document.querySelector('#first_name');
const courrier = document.querySelector('#email');
const sujet = document.querySelector('#subject');
const demande = document.querySelector('#message');
const fox = document.querySelector('.badfox');
const fox2 = document.querySelector('.badfox2');
const fox3 = document.querySelector('.badfox3');
const fox4 = document.querySelector('.badfox4');
const fox5 = document.querySelector('.badfox5');


nom.addEventListener('focus', () => {
    fox.classList.remove('displayfox');
    fox2.classList.add('displayfox2');
    fox3.classList.add('displayfox3');
    fox4.classList.add('displayfox4');
    fox5.classList.add('displayfox5');
});
prenom.addEventListener('focus', () => {
    fox.classList.add('displayfox');
    fox2.classList.remove('displayfox2');
    fox3.classList.add('displayfox3');
    fox4.classList.add('displayfox4');
    fox5.classList.add('displayfox5');
});
courrier.addEventListener('focus', () => {
    fox.classList.add('displayfox');
    fox2.classList.add('displayfox2');
    fox3.classList.remove('displayfox3');
    fox4.classList.add('displayfox4');
    fox5.classList.add('displayfox5');
});
sujet.addEventListener('focus', () => {
    fox.classList.add('displayfox');
    fox2.classList.add('displayfox2');
    fox3.classList.add('displayfox3');
    fox4.classList.remove('displayfox4');
    fox5.classList.add('displayfox5');
});
demande.addEventListener('focus', () => {
    fox.classList.add('displayfox');
    fox2.classList.add('displayfox2');
    fox3.classList.add('displayfox3');
    fox4.classList.add('displayfox4');
    fox5.classList.remove('displayfox5');
});










