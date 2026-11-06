import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPath = 'dashboard', onNavigate }) => {
  const navigate = useNavigate();

  const mainNavItems = [
    { label: 'Dashboard', icon: 'grid_view', path: 'dashboard' },
    { label: 'Usuarios', icon: 'group', path: 'usuarios' },
    { label: 'Cursos', icon: 'auto_stories', path: 'cursos' },

  ];

  const handleItemClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      navigate(`/${path}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md">
      <div className="flex flex-col gap-space-md">
        <div className="px-space-md flex items-center gap-space-sm">
          <div className="h-8 w-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-bold">
            E
          </div>
          <div className="flex flex-col">
            <span className="text-title-md text-primary font-bold leading-tight">ACADEMIA SUPER ESCOLAR PAOLO</span>
            <span className="text-xs text-on-surface-variant font-medium">Académico</span>
          </div>
        </div>

        <nav className="flex flex-col gap-space-xs px-space-sm">
          {mainNavItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleItemClick(item.path)}
                className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all w-full text-left ${
                  isActive
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-space-xs px-space-sm pt-space-md bg-surface-container-lowest">
        <button
          onClick={handleLogout}
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-error hover:bg-error-container hover:text-on-error-container transition-all w-full text-left"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="text-sm">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
};