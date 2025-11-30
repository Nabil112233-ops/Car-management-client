export const API_BASE_URL = import.meta.env.PROD
    ? 'https://car-management-server.up.railway.app' // deployed server
    : 'http://localhost:5000';