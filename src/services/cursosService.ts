import { api } from '../lib/axios';
import { CursosResponse, CursoApi } from '../types/cursos';

export const courseService = {

  obtenerCursos: async (): Promise<CursosResponse> => {
    const response = await api.get<CursosResponse>('/cursos');
    return response.data;
  },

  crearCurso: async (cursoData: Partial<CursoApi>) => {
    const response = await api.post('/cursos', cursoData);
    return response.data;
  },
};