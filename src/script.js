const fullpageEl = document.getElementById("fullpage");
const menuBtn = document.querySelector(".menu__btn");
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");

const blurOverlay = document.querySelector(".blur__overlay");

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE);
	blurOverlay.classList.toggle(IS_ACTIVE);
	//fullpageEl.classList.toggle("no-scroll");
};

const CLICK = "click";

menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

new fullpage("#fullpage", {
	autoScrolling: true,
	scrollBar: true
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el video
    var bgVideo1 = document.querySelector('.section.one video');
	var bgVideo2 = document.querySelector('.section.two video');
	var bgVideo3 = document.querySelector('.section.three video');

    // Escuchar el evento de scroll
    window.addEventListener('scroll', function() {
        var sectionOne = document.querySelector('.section.one');
        var sectionTwo = document.querySelector('.section.two');
		var sectionThree = document.querySelector('.section.three');

        // Revisar si la sección uno está en el viewport
        if (sectionOne.getBoundingClientRect().top >= 0 && sectionOne.getBoundingClientRect().bottom <= window.innerHeight) {
            bgVideo1.play();
        } else {
            bgVideo1.pause();
        }

		if (sectionTwo.getBoundingClientRect().top >= 0 && sectionTwo.getBoundingClientRect().bottom <= window.innerHeight) {
            bgVideo2.play();
        } else {
            bgVideo2.pause();
        }

		if (sectionThree.getBoundingClientRect().top >= 0 && sectionThree.getBoundingClientRect().bottom <= window.innerHeight) {
            bgVideo3.play();
        } else {
            bgVideo3.pause();
        }
    });
});

//scroll smoth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function() {
        // Cerrar el menú de navegación
        document.querySelector('.navigation').classList.remove('is--active');
        
        // Remover el efecto borroso
        document.querySelector('.blur__overlay').style.display = 'none';
    });
});



