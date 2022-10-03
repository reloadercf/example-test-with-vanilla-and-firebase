import { onNavigate } from '../main.js';
import { addUser } from '../lib/auth.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const mensaje = document.createElement('p');

  button.textContent = 'Crear cuenta';
  button.classList.add('registro');

  buttonBack.textContent = 'Regresa';
  buttonBack.classList.add('Regresa');
  title.textContent = 'Registro de nueva cuenta';

  inputEmail.classList.add('correo');
  inputPass.classList.add('pass');
  mensaje.classList.add('mensaje');

  button.addEventListener('click', () => {
    addUser(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
      const textNode = document.createTextNode('se registro');
      mensaje.append(textNode);
      const user = userCredential.user;
      console.log('welcome ', user);
      // ...
    })
      .catch((error) => {
        mensaje.textContent = 'no se registro';
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      // ..
      });
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, mensaje, button, buttonBack);

  return div;
};
