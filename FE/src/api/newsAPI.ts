import axios from 'axios';
import type { Comment } from '../models/NewsTypes';

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

export const addComment = async (slug: string, comment: Comment) => {
  try {
    const response = await newsAPI.post(`/api/news/${slug}/comments`, comment);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

export default newsAPI;