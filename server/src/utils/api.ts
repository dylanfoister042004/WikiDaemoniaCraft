const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  get: async (url: string) => {
    const res = await fetch(`${API_URL}${url}`);
    return res.json();
  },

  post: async (url: string, data: unknown) => {
    const res = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  put: async (url: string, data: unknown) => {
    const res = await fetch(`${API_URL}${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};
