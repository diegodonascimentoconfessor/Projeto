const temaescuro = document.getElementById('tema-escuro');
const body = document.body;

temaescuro.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
