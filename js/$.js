const banners = document.querySelectorAll('.header img');
const popup = document.querySelector('.popup');
const items = document.querySelectorAll('.latest-post .item');
const innerImg = document.getElementById('image');
const popupContent = document.getElementById('popup_content');
// Prev&Next Btns
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Current Slide
let current = 0;

// Clear All Slides
function reset() {
    for(let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }
}

// Init Slider
function startSlides() {
    reset();
    banners[0].style.display = 'block';
}

// Show prev
function slideLeft() {
    reset();
    banners[current - 1].style.display = 'block';
    current--;
}

// PrevBtn
prev.addEventListener('click', () => {
    if(current === 0) {
        current = banners.length;
    }
    slideLeft()
})

// Show Next
function slideRight() {
    reset();
    banners[current + 1].style.display = 'block';
    current++;
}

// PrevBtn
next.addEventListener('click', () => {
    if(current === banners.length - 1) {
        current = -1;
    }
    slideRight()
})

startSlides()

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    // autoplay:true,
    responsive:{
        0:{ 
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

(function eachItem() {
    items.forEach(item => {
        item.addEventListener('click', () => {
            popup.style.display = 'block';
            let img = item.querySelector('.single-card img');
            innerImg.src = img.src;
            popupContent.textContent = img.alt;
        })
    });
}());

(function escapeBtn() {
    document.onkeydown = (e) => {
        if(e.keyCode == '27') {
            popup.style.display = 'none'
        }
    }
}());

(function hidePopup() {
    popup.onclick = () => popup.style.display = 'none';
    
    innerImg.onclick = (e) => e.stopPropagation();
}());

$('.dropdown').click(function() {
    $('.navbar .navlist').slideToggle()
});

$('.footer-info i').click(function() {
    
})

$('.contact-info i').click(function() {
    $('.contact-info li').slideToggle()
})

$('.information i').click(function() {
    $('.information li').slideToggle()
})

$('.extras i').click(function() {
    $('.extras li').slideToggle()
})