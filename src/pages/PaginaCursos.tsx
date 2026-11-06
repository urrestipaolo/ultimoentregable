import React, { useState, useEffect } from 'react';
import { Sidebar } from '../componentes/layout/Sidebar';
import { Header } from '../componentes/layout/Header';
import { CourseMetrics } from '../componentes/courses/CourseMetrics';
import { CourseToolbar } from '../componentes/courses/CourseToolBar';
import { CoursesGrid } from '../componentes/courses/CoursesGrid';
import { useApi } from '../hooks/useApi';
import { courseService } from '../services/cursosService';
import { Course } from '../types';

export const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedModality, setSelectedModality] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  const { data: responseData, loading, error, request: cargarCursos } = useApi(
    courseService.obtenerCursos
  );

  useEffect(() => {
    cargarCursos();
  }, []);

  const cursosMapeados: Course[] = (responseData || []).map((curso) => ({
    id: String(curso.id),
    code: curso.codigo,
    title: curso.nombre,
    category: 'Ingeniería',
    modality: 'Virtual',
    status: curso.disponibles > 0 ? 'Activo' : 'Cupo Lleno',
    classroom: `Cupos: ${curso.disponibles}`,
    description: curso.descripcion,
    semester: '2025-1',
    progress: Math.round((curso.inscritos / curso.cupo) * 100),
    enrolledCount: curso.inscritos,
    maxCapacity: curso.cupo,
    gradient: 'from-primary to-secondary',
    instructor: {
      name: `${curso.docente.nombre} ${curso.docente.apellido}`,
      role: 'Docente Titular',
      avatar: curso.docente.fotoUrl
    },
  }));

  const filteredCourses = cursosMapeados.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDepartment === 'all' || course.category === selectedDepartment;
    const matchesModality = selectedModality === 'all' || course.modality === selectedModality;

    return matchesSearch && matchesDept && matchesModality;
  });

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      <Sidebar currentPath="cursos" />
      <div className="pl-64">
        <Header period="2025-1" />
        
        <main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg">
          <div className="flex flex-col w-full gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col gap-space-xs z-10">
                <div className="flex items-center gap-space-xs text-primary">
                </div>
                <h1 className="text-3xl text-on-surface font-bold">Cursos Académicos</h1>
                <p className="text-sm text-on-surface-variant max-w-2xl">
                  Explora y gestiona los cursos disponibles para el periodo actual directamente desde la API.
                </p>
              </div>
            </div>

            <CourseMetrics />

            <CourseToolbar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
              selectedModality={selectedModality}
              onModalityChange={setSelectedModality}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {loading && (
              <div className="text-center py-10 text-on-surface-variant">Cargando cursos desde la API...</div>
            )}

            {error && (
              <div className="bg-error-container text-on-error-container p-4 rounded-xl text-sm">
                {error}
              </div>
            )}

            {!loading && !error && (
              <CoursesGrid
                courses={filteredCourses}
                viewMode={viewMode}
                onViewSyllabus={(course) => console.log('Ver curso:', course.title)}
                onEnroll={(code) => console.log('Gestionar cupos:', code)}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};