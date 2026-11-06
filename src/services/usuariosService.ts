import { api } from '../lib/axios';
import { Usuario } from '../types/user';

export interface UsersResponse {
  success: boolean;
  data: Usuario[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const userService = {
  obtenerUsuarios: async (): Promise<UsersResponse> => {
    const response = await api.get<UsersResponse>('/usuarios');
    return response.data;
  },
};