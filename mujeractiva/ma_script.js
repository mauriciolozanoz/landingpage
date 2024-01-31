function animateNumber(element, start, end, duration, isDecimal) {
    // Limpiar cualquier intervalo existente
    if (element.timer) {
        clearInterval(element.timer);
    }

    let current = start;
    const range = end - start;
    const stepCount = duration / 10;
    const increment = range / stepCount;
    const stepTime = 10;

    element.timer = setInterval(() => {
        current += increment;
        element.textContent = isDecimal ? current.toFixed(2) : Math.round(current);
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = isDecimal ? end.toFixed(2) : Math.round(end);
            clearInterval(element.timer);
        }
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target.querySelector('.numero');
            if (!element) return;

            const isDecimal = element.parentElement.classList.contains('datos-creditos') || element.parentElement.classList.contains('datos-desembolado');
            if (entry.isIntersecting) {
                animateNumber(element, isDecimal ? 0 : 1, isDecimal ? (element.parentElement.classList.contains('datos-creditos') ? 2.9 : 46.449) : 32, 2000, isDecimal);
            } else {
                element.textContent = isDecimal ? '0.00' : '0';
            }
        });
    }, { threshold: [0, 1] });

    document.querySelectorAll('.datos-creditos, .datos-desembolado, .datos-estados').forEach(el => {
        observer.observe(el);
    });
});
