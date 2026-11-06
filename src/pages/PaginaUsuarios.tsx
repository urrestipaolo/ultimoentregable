import React, { useState, useEffect } from 'react';
import { Sidebar } from '../componentes/layout/Sidebar';
import { Header } from '../componentes/layout/Header';
import { UserMetrics } from '../componentes/users/UserMetrics';
import { UserToolbar } from '../componentes/users/UserToolBar';
import { UsersTable } from '../componentes/users/UsersTable';
import { useApi } from '../hooks/useApi';
import { userService } from '../services/usuariosService';
import { Usuario } from '../types/user';


interface UserView {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Activo' | 'Inactivo' | 'Pendiente';
  subtitle: string;
  createdAt: string;
  avatar: string;
}

export const UsersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const { data: responseData, loading, error, request: cargarUsuarios } = useApi(
    userService.obtenerUsuarios
  );

  useEffect(() => {
    cargarUsuarios().catch((err) => console.error('Error al cargar usuarios:', err));
  }, []);

  const rawUsuarios: Usuario[] = Array.isArray(responseData)
    ? responseData
    : (responseData as any)?.data || [];

  const usuariosMapeados: UserView[] = rawUsuarios.map((user) => ({
    id: `USR-${user.id}`,
    name: `${user.nombre} ${user.apellido}`.trim() || user.username,
    email: user.email,
    role: user.rol === 'ADMIN' ? 'Administrador' : user.rol === 'DOCENTE' ? 'Docente' : 'Estudiante',
    status: user.activo ? 'Activo' : 'Inactivo',
    subtitle: `Usuario: @${user.username} • Campus Central`,
    createdAt: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Reciente',
    avatar: user.fotoUrl ,
  }));

  const filteredUsers = usuariosMapeados.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedRole('all');
    setSelectedStatus('all');
  };

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      <Sidebar currentPath="usuarios" />
      <div className="pl-64">
        <Header userName="Alejandro Morales" period="2025-1" />
        <main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg">
          <div className="flex flex-col w-full gap-space-lg">
            {/* Header Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs text-primary mb-1">
                  <span className="material-symbols-outlined text-[18px]">badge</span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                    Directorio Institucional
                  </span>
                </div>
                <h1 className="text-3xl text-on-surface tracking-tight font-bold">Usuarios</h1>
                <p className="text-sm text-on-surface-variant">
                  Gestiona y consulta los usuarios registrados en el sistema de la API
                </p>
              </div>

              <div className="flex items-center gap-space-sm flex-wrap">
                <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface text-sm font-semibold hover:bg-surface-container transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">file_download</span>
                  <span>Exportar</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface text-sm font-semibold hover:bg-surface-container transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">upload_file</span>
                  <span>Carga Masiva</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary text-sm font-semibold hover:bg-secondary-container transition-all shadow-md hover:shadow-lg hover:scale-[1.01]">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>+ Nuevo Usuario</span>
                </button>
              </div>
            </div>

            {/* Metrics */}
            <UserMetrics />

            {/* Toolbar / Filters */}
            <UserToolbar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              onReset={handleResetFilters}
            />

            {loading && (
              <div className="text-center py-10 text-on-surface-variant font-medium">
                Cargando usuarios desde la API...
              </div>
            )}

            {error && (
              <div className="bg-error-container text-on-error-container p-4 rounded-xl text-sm font-semibold">
                Error al conectar con la API de usuarios: {error}
              </div>
            )}

            {!loading && !error && (
              <UsersTable
                users={filteredUsers}
                onSelectUser={(user) => console.log('Ver usuario:', user.name)}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};