export interface DocenteApi {
  id: number;
  username: string;
  nombre: string;
  apellido: string;
  fotoUrl: string;
}

export interface CursoApi {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  creditos: number;
  cupo: number;
  inscritos: number;
  disponibles: number;
  docente: DocenteApi;
  createdAt: string;
  updatedAt: string;
}

export interface CursosResponse {
  success: boolean;
  data: CursoApi[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}