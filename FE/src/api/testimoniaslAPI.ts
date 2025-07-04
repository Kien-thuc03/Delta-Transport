import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const testimonialAPI = axios.create({
    baseURL: API_BASE_URL,
});

export const getTestimonials = async () => {
    try {
        const response = await testimonialAPI.get('/api/testimonials');
        return response.data;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
    }
};
