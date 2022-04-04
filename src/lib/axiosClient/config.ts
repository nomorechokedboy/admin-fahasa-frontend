import { API } from "@/configs/env";

export const axiosConfigs = {
    baseURL: API,
    timeout: 5000,
    headers: {
        "content-type": "application/json",
    },
    params: {},
};
