import React, { useState, useEffect } from 'react';
import { Sidebar } from '../componentes/layout/Sidebar';
import { Header } from '../componentes/layout/Header';
import { WelcomeBanner } from '../componentes/dashboard/WelcomeBanner';
import { MetricCard } from '../componentes/dashboard/MetricCard';
import { MetricData } from '../types';
import { Usuario } from '../types/user';

export const DashboardPage: React.FC = () => {
  const [userName, setUserName] = useState<string>('Usuario');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user: Usuario = JSON.parse(storedUser);
        setUserName(user.nombre || user.username);
      } catch (error) {
        console.error('Error al parsear el usuario del localStorage:', error);
      }
    }
  }, []);

  const metrics: MetricData[] = [
    {
      title: 'Total de Usuarios',
      value: '1,280',
      subtitle: 'Registrados este semestre',
      icon: 'groups',
      badgeText: '+12%',
      badgeIcon: 'trending_up',
    },
    {
      title: 'Total de Cursos',
      value: '48 Cursos',
      subtitle: '32 programas activos',
      icon: 'school',
      badgeText: '32 en aula',
    },
    {
      title: 'Inscripciones',
      value: '3,450',
      subtitle: 'Matrículas verificadas',
      icon: 'how_to_reg',
      badgeText: '+8.5%',
      badgeIcon: 'arrow_upward',
    },
    {
      title: 'Promedio General',
      value: '8.8 / 10',
      subtitle: 'Puesto #3 del cuadro de honor',
      icon: 'grade',
      badgeText: 'Sobresaliente',
    },
  ];

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      <Sidebar currentPath="dashboard" />
      <div className="pl-64">
        <Header period="2025-1" />
        
        <main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg">
          <div className="flex flex-col w-full gap-space-lg">
            {/* Se le pasa el nombre recuperado dinámicamente */}
            <WelcomeBanner userName={userName} pendingDeliveriesCount={3} period="2025-1" />


            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </section>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              <div className="flex flex-col gap-space-lg xl:col-span-8">
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};