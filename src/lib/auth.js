import { getAuth, createUserWithEmailAndPassword } from './imports.js';
import { app } from './config.js';

const auth = getAuth();

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
