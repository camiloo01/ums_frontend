import axios from 'axios';

// Ruta base para la API de usuarios
const API_URL = 'http://localhost:3002/auth';

// Obtener todos los usuarios
export const getAllUsuariosRequest = async () => {
  return await axios.get(`${API_URL}/users`);
};

// Crear un nuevo usuario
export const createUsuarioRequest = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// Actualizar un usuario existente
export const updateUsuarioRequest = (id, userData) => axios.put(`${API_URL}/users/${id}`, userData);

// Deshabilitar un usuario
export const disableUsuarioRequest = (id) => axios.patch(`${API_URL}/users/disable/${id}`);
