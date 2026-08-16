const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

document.getElementById('ano').textContent = new Date().getFullYear();

inputCheck.addEventListener('click', () => {
  const modo = inputCheck.checked ? 'dark' : 'light';
  elemento.setAttribute('data-bs-theme', modo);
});
