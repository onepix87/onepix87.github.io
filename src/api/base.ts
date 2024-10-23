export const baseRequest = async (path: string, data: Record<string, unknown>, method = 'GET') => {
    let url = new URL(path, import.meta.env.VITE_API_URL);

    if (method === 'GET') {
        let searchData = new URLSearchParams(data);
        url.search = searchData.toString();
    }

    const postData = method !== 'GET' ? { body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } } : {};

    return fetch(url, { method, ...postData })
};
