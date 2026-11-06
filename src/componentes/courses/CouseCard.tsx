import React from 'react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  onViewSyllabus: (course: Course) => void;
  onEnroll: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onViewSyllabus, onEnroll }) => {
  const isFull = course.status === 'Cupo Lleno';

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className={`relative h-32 bg-gradient-to-tr ${course.gradient} p-space-md flex flex-col justify-between overflow-hidden`}>
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-surface-container-lowest/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between z-10">
            <span className="px-space-xs py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary text-xs uppercase tracking-wider font-semibold">
              {course.code}
            </span>
            <span
              className={`px-space-xs py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 ${
                isFull
                  ? 'bg-error-container text-on-error-container'
                  : 'bg-surface-container-lowest text-primary'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isFull ? 'bg-error' : 'bg-secondary'}`} />
              {course.status}
            </span>
          </div>
          <div className="flex items-center justify-between z-10 text-on-primary">
            <span className="text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                {course.modality === 'Virtual' ? 'code' : course.modality === 'Presencial' ? 'account_tree' : 'smart_toy'}
              </span>
              Modalidad {course.modality}
            </span>
            <span className="text-xs text-on-primary/90">{course.classroom}</span>
          </div>
        </div>

        <div className="p-space-md flex flex-col gap-space-sm">
          <div className="flex items-start justify-between gap-space-xs">
            <h2 className="text-base text-on-surface group-hover:text-primary transition-colors leading-tight font-bold">
              {course.title}
            </h2>
            <button className="text-on-surface-variant hover:text-on-surface p-1 rounded-md hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-[18px]">more_vert</span>
            </button>
          </div>
          <p className="text-xs text-on-surface-variant line-clamp-2">{course.description}</p>

          {/* Teacher Profile */}
          <div className="flex items-center gap-space-sm pt-space-xs">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover shadow-xs"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-xs text-on-surface truncate font-semibold">{course.instructor.name}</span>
              <span className="text-[10px] text-on-surface-variant">{course.instructor.role}</span>
            </div>
          </div>

          {/* Progress and Students count */}
          <div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col gap-1 mt-space-xs">
            <div className="flex justify-between items-center text-xs">
              <span className={`flex items-center gap-1 ${isFull ? 'text-error font-semibold' : 'text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[14px] text-primary">groups</span>
                {isFull ? `${course.enrolledCount} / ${course.maxCapacity} Estudiantes` : `${course.enrolledCount} Estudiantes`}
              </span>
              <span className="text-primary font-semibold">{course.progress}% avance</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${isFull ? 'bg-tertiary-container' : 'bg-primary'}`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-space-md pt-0 flex items-center justify-between gap-space-sm">
        <button
          onClick={() => onViewSyllabus(course)}
          className="flex-1 py-space-xs px-space-sm rounded-lg bg-primary-fixed hover:bg-secondary-fixed text-on-primary-fixed text-xs font-semibold text-center transition-all flex items-center justify-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">visibility</span> Ver Curso
        </button>
        {isFull ? (
          <button
            className="py-space-xs px-space-sm rounded-lg bg-surface-container text-on-surface-variant cursor-not-allowed text-xs"
            title="Cupos agotados"
            disabled
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
          </button>
        ) : (
          <button
            onClick={() => onEnroll(course.code)}
            className="py-space-xs px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-xs transition-all"
            title="Gestionar cupos"
          >
            <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
          </button>
        )}
      </div>
    </div>
  );
};