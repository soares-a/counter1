document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.querySelector('.counter-value');
    const progressCircle = document.querySelector('.progress-ring__circle');
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const targetValue = 100; // Valor final do contador
    let currentValue = 0;

    // Configura o círculo
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    function animateCounter() {
        let startTime;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / 10000, 1); // 2 segundos de animação

            // Atualiza o valor do contador
            currentValue = Math.floor(progress * targetValue);
            counterValue.textContent = currentValue;
            counterValue.style.color = `rgb(${70 + currentValue}, ${149 + (currentValue / 2)}, ${198 - (currentValue / 2)})`;


            // Atualiza o progresso do círculo
            const dashoffset = circumference - (progress * circumference);
            progressCircle.style.strokeDashoffset = dashoffset;

            if (progress < 1) {
                requestAnimationFrame(step);
            }
            
            if (currentValue === 100) {
                counterValue.classList.add("final");
            }
        }

        requestAnimationFrame(step);
    }

    // Inicia a animação quando a página carrega
    animateCounter();
});