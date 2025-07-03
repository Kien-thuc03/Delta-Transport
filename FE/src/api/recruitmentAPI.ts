import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const recruitmentAPI = axios.create({
    baseURL: API_BASE_URL,
});

export const getRecruitments = async () => {
    try {
        const response = await recruitmentAPI.get('/api/recruitment');
        return response.data;
    } catch (error) {
        console.error('Error fetching recruitments:', error);
        throw error;
    }
};

export const getRecruitmentById = async (id: string) => {
    try {
        const response = await recruitmentAPI.get(`/api/recruitment/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recruitment details:', error);
        throw error;
    }
};

export const getLocations = async () => {
    try {
        const response = await recruitmentAPI.get('/api/recruitment/locations');
        return response.data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};

export default recruitmentAPI;
