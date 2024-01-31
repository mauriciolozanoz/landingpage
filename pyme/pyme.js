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


window.onload = function() {
    document.getElementById('loading').style.display = 'none';
};
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsDerecha = document.querySelectorAll('.hiddenderecha');
hiddenElements.forEach((el) => observer.observe(el))
hiddenElementsDerecha.forEach((el) => observer.observe(el))

// Función para iniciar el contador
function startCounter(element, start, end, duration) {
    let current = start;
    const stepTime = duration / (end - start);
    const timer = setInterval(function() {
      current += 1;
      element.textContent = current;
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

const observeranimation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Identifica si el elemento intersectado es el contador
        if (entry.isIntersecting && entry.target.id === 'counter') {
          startCounter(entry.target, 0, 10, 1800); // Asume que esta es tu función de contador personalizada
        } else if (entry.target.id === 'counter5') {
            // Reinicia y comienza el contador hasta 5
            startCounter(entry.target, 0, 5, 1800); // Asume que la duración total es más corta
          }
        // Aquí puedes agregar más lógica para otros elementos observados
    });
  }, { threshold: [0.1] }); // Ajusta el umbral según necesidad
  
  // Agrega aquí el elemento o elementos a observar
  observeranimation.observe(document.getElementById('counter')); // Asegúrate de que este es el ID correcto
  observeranimation.observe(document.getElementById('counter5'));