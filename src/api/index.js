import axiosInstance from "./config/axios";

// API functions will be added here when backend is ready
// For now, this is a placeholder structure

const api = {
  // Products API
  products: {
    getAll: async (params = {}) => {
      const response = await axiosInstance.get("/products", { params });
      return response.data;
    },
    getById: async (id) => {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    },
    getByCategory: async (category, params = {}) => {
      const response = await axiosInstance.get(`/products/category/${category}`, { params });
      return response.data;
    },
  },

  // Auth API
  auth: {
    login: async (credentials) => {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data;
    },
    register: async (userData) => {
      const response = await axiosInstance.post("/auth/register", userData);
      return response.data;
    },
    logout: async () => {
      const response = await axiosInstance.post("/auth/logout");
      return response.data;
    },
    getCurrentUser: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
  },

  // Cart API
  cart: {
    getCart: async () => {
      const response = await axiosInstance.get("/cart");
      return response.data;
    },
    addToCart: async (productId, quantity, options = {}) => {
      const response = await axiosInstance.post("/cart", {
        productId,
        quantity,
        ...options,
      });
      return response.data;
    },
    updateCartItem: async (itemId, quantity) => {
      const response = await axiosInstance.put(`/cart/${itemId}`, { quantity });
      return response.data;
    },
    removeFromCart: async (itemId) => {
      const response = await axiosInstance.delete(`/cart/${itemId}`);
      return response.data;
    },
    clearCart: async () => {
      const response = await axiosInstance.delete("/cart");
      return response.data;
    },
  },

  // Orders API
  orders: {
    getAll: async (params = {}) => {
      const response = await axiosInstance.get("/orders", { params });
      return response.data;
    },
    getById: async (orderId) => {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      return response.data;
    },
    create: async (orderData) => {
      const response = await axiosInstance.post("/orders", orderData);
      return response.data;
    },
  },
};

export default api;


