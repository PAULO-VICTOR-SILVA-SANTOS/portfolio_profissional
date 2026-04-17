const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

function fecharMenu() {
    if (!menuMobile || !btnAbrirMenuMobile) return;
    menuMobile.classList.remove('abrir-menu');
    btnAbrirMenuMobile.setAttribute('aria-expanded', 'false');
}

function abrirMenu() {
    if (!menuMobile || !btnAbrirMenuMobile) return;
    menuMobile.classList.add('abrir-menu');
    btnAbrirMenuMobile.setAttribute('aria-expanded', 'true');
}

if (btnAbrirMenuMobile && menuMobile) {
    btnAbrirMenuMobile.addEventListener('click', (e) => {
        e.stopPropagation();
        if (menuMobile.classList.contains('abrir-menu')) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    menuMobile.addEventListener('click', () => {
        fecharMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuMobile.classList.contains('abrir-menu')) {
            fecharMenu();
        }
    });
}
