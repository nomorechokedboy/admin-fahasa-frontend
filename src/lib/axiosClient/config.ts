export const API = import.meta.env.VITE_API as string;

export const axiosConfigs = {
    baseURL: API,
    timeout: 5000,
    headers: {
        "content-type": "application/json",
    },
    params: {},
};
