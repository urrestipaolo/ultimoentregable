import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const RutaProtegida: React.FC = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};