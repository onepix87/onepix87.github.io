import { baseRequest } from './base';

export const login = async (data) => {
    return baseRequest('/auth', data, 'POST');
};
