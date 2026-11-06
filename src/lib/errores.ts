import axios from 'axios';

export const manejarErrorApi = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const data = error.response.data as { message?: string; error?: string;详情?: string };
      return (
        data?.message ||
        data?.error ||
        `Error en el servidor: ${error.response.status}`
      );
    }
    if (error.request) {
      return 'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
    }
  }
  return 'Ocurrió un error inesperado al procesar la solicitud.';
};