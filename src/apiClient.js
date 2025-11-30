import { API_BASE_URL } from "./config";

export function apiClient(endpoint, options = {}) {
    const defaultHeaders = {
        "Content-Type": "application/json"
    };

    const config = {
        method: options.method || "GET",
        headers: { ...defaultHeaders, ...(options.headers || {}) },
    };

    if (options.body) {
        config.body = JSON.stringify(options.body);
    }

    return fetch(`${API_BASE_URL}${endpoint}`, config)
        .then(res => {
            if (!res.ok) {
                return res.text().then(text => {
                    throw new Error(text || "Request failed");
                });
            }
            return res.json();
        });
}
