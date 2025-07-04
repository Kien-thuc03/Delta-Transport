import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const searchAPI = axios.create({
  baseURL: API_BASE_URL,
});

export const searchNews = async (query: string) => {
    try {
        const response = await searchAPI.get(`/api/search`, {
            params: { q: query }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching news:', error);
        throw error;
    }
};

export const getPopularTags = async () => {
    try {
        const response = await searchAPI.get('/api/search/popular-tags');
        return response.data;
    } catch (error) {
        console.error('Error getting popular tags:', error);
        throw error;
    }
};

export default searchAPI;
