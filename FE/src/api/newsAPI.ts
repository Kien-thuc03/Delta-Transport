import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const newsAPI = axios.create({
  baseURL: API_BASE_URL,
});

export const getNews = async () => {
  try {
    const response = await newsAPI.get('/api/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNewsBySlug = async (slug: string) => {
  try {
    const response = await newsAPI.get(`/api/news/detail/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news by slug:', error);
    throw error;
  }
};


export default newsAPI;