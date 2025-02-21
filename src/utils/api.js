import axios from 'axios';

const API_URL = 'http://localhost:8801';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add request interceptor to include token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (data) => api.post('/api/auth/register', data),
  login: (data) => api.post('/api/auth/login', data),
  logout: () => api.post('/api/auth/logout'),
};

export const users = {
  getUser: (id) => api.get(`/api/users/${id}`),
  deleteUser: (id) => api.delete(`/api/users/${id}`),
};

export const gigs = {
  create: (data) => api.post('/api/gigs', data),
  delete: (id) => api.delete(`/api/gigs/${id}`),
  getGig: (id) => api.get(`/api/gigs/single/${id}`),
  getGigs: (params) => api.get('/api/gigs', { params }),
};

export const orders = {
  getOrders: () => api.get('/api/orders'),
  createPaymentIntent: (id) => api.post(`/api/orders/create-payment-intent/${id}`),
  updateOrder: (id, data) => api.put(`/api/orders/${id}`, data),
};

export const conversations = {
  getConversations: () => api.get('/api/conversations'),
  createConversation: (data) => api.post('/api/conversations', data),
  getSingleConversation: (id) => api.get(`/api/conversations/single/${id}`),
  updateConversation: (id, data) => api.put(`/api/conversations/${id}`, data),
};

export const messages = {
  createMessage: (data) => api.post('/api/message', data),
  getMessages: (id) => api.get(`/api/message/${id}`),
};

export const reviews = {
  createReview: (data) => api.post('/api/reviews', data),
  getReviews: (gigId) => api.get(`/api/reviews/${gigId}`),
  deleteReview: (id) => api.delete(`/api/reviews/${id}`),
};

export default api;