
import { useAuthStore } from '@src/zustand/auth';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const handleAxiosError = (error: any) => {
    if (axios.isAxiosError(error)) {
        if (error.response?.data?.error === "Your token has expired. Please login again.") {
            toast.error("Session Expired")
            useAuthStore.getState().logout();
        } else {
            toast.error(error.message)
            console.log('Axios error:', error.response?.data || error.message);
        }
    } else {
        console.log('Error:', error);
    }
};

export const handleError = (err: any): string => {
    try {
        const errors = err.response?.data.errors;
        const errorMessages = Object.entries(errors || {})
            .map(([field, message]) => `${field}: ${message}`)
            .join(', ');
        return errorMessages || "An unknown error occurred.";
    } catch {
        return "Something went wrong";
    }
};