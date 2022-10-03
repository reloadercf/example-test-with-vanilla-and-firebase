/**
 * @jest-environment jsdom
 */

import { Register } from '../src/components/Register.js';
import { createUserWithEmailAndPassword } from '../src/lib/__mocks__/imports.js';

jest.mock('../src/main.js');
jest.mock('../src/lib/imports.js');

describe('Los test del Registro', () => {
  test('El componente es una Funcion', () => {
    expect(typeof Register).toBe('function');
  });
  test('Existe el boton de crear cuenta', () => {
    const elemento = Register();
    const boton = elemento.querySelector('.registro');
    expect(boton).not.toBeNull();
  });
  test('Snapshot del REGISTRO', () => {
    expect(Register()).toMatchSnapshot();
  });

  test('Invoca a la promesa con los argumentos escritos ', () => {
    const elemento = Register();
    const email = elemento.querySelector('.correo');
    const pass = elemento.querySelector('.pass');
    const boton = elemento.querySelector('.registro');

    email.value = 'alguien@correo.com';
    pass.value = '123456';

    boton.addEventListener('click', () => {
      createUserWithEmailAndPassword(email.value, pass.value);
    });
    boton.click();
    boton.dispatchEvent(new Event('click'));
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(createUserWithEmailAndPassword).toHaveBeenLastCalledWith('alguien@correo.com', '123456');
  });
});
