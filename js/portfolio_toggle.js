const btnPortfolioToggle = document.querySelector('#btn-portfolio-toggle');
const portfolioSecundaria = document.querySelector('#portfolio-secundaria');

if (btnPortfolioToggle && portfolioSecundaria) {
    btnPortfolioToggle.addEventListener('click', () => {
        const aberto = portfolioSecundaria.classList.toggle('is-visible');
        btnPortfolioToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        btnPortfolioToggle.textContent = aberto ? 'Mostrar menos' : 'Mostrar mais';
        if (aberto) {
            portfolioSecundaria.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}
