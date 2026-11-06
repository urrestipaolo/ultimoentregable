import { useState, useCallback } from 'react';
import { manejarErrorApi } from '../lib/errores';

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  request: (...args: any[]) => Promise<T | void>;
}

export const useApi = <T>(
  apiFunction: (...args: any[]) => Promise<any>
): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (...args: any[]) => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiFunction(...args);
        // Extraemos los datos dependiendo de si axios devuelve el objeto .data o viene plano
        const result = response?.data !== undefined ? response.data : response;
        
        // Si la API de Funval devuelve { success: true, data: [...] }, extraemos el array o el objeto
        const finalData = result?.data !== undefined ? result.data : result;

        setData(finalData);
        return finalData;
      } catch (err) {
        const errorMessage = manejarErrorApi(err);
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  return { data, loading, error, request };
};