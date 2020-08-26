import '../css/saludar.css';

export const saludar = (nombre) => {
    console.log('Creado etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre} como estas baby`;
    document.body.append(h1);
};
