import '../css/saludar.css';

const container = document.querySelector('.container');
export const saludar = (nombre) => {
    console.log('Creado etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} bienvenido!`;
    container.append(h1);
};
