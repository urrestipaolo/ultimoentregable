import React from 'react';
import { Course } from '../../types';
import { CourseCard } from './CouseCard';

interface CoursesGridProps {
  courses: Course[];
  viewMode: 'grid' | 'table';
  onViewSyllabus: (course: Course) => void;
  onEnroll: (courseId: string) => void;
}

export const CoursesGrid: React.FC<CoursesGridProps> = ({
  courses,
  viewMode,
  onViewSyllabus,
  onEnroll,
}) => {
  if (viewMode === 'table') {
    return (
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-on-surface">
          <thead className="bg-surface-container-low text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-space-md">Código</th>
              <th className="py-3.5 px-space-md">Curso</th>
              <th className="py-3.5 px-space-md">Docente</th>
              <th className="py-3.5 px-space-md">Modalidad</th>
              <th className="py-3.5 px-space-md">Progreso</th>
              <th className="py-3.5 px-space-md text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-surface-container-low">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-4 px-space-md font-mono text-xs font-semibold text-on-surface-variant">
                  {course.code}
                </td>
                <td className="py-4 px-space-md">
                  <span className="font-semibold text-on-surface">{course.title}</span>
                </td>
                <td className="py-4 px-space-md text-xs text-on-surface-variant">{course.instructor.name}</td>
                <td className="py-4 px-space-md text-xs">{course.modality}</td>
                <td className="py-4 px-space-md">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-xs text-on-surface-variant">{course.progress}%</span>
                  </div>
                </td>
                <td className="py-4 px-space-md text-right">
                  <button
                    onClick={() => onViewSyllabus(course)}
                    className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onViewSyllabus={onViewSyllabus} onEnroll={onEnroll} />
      ))}
    </div>
  );
};