export interface NavItem {
  label: string;
  icon: string;
  path: string;
  active?: boolean;
}

export interface MetricData {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  badgeText: string;
  badgeIcon?: string;
  variant?: 'primary' | 'secondary' | 'neutral';
}

export interface Course {
  id: string;
  code: string;
  title: string;
  category: CourseDepartment;
  modality: CourseModality;
  status: CourseStatus;
  classroom: string;
  description: string;
  semester: string;
  progress: number;
  enrolledCount: number;
  maxCapacity: number;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  gradient: string;
}

export interface Enrollment {
  id: string;
  studentInitials: string;
  studentName: string;
  studentCode: string;
  courseName: string;
  date: string;
  modality: 'Presencial' | 'Virtual' | 'Híbrida';
  status: 'Activa' | 'Pendiente' | 'Cancelada';
}

export type CourseModality = 'Presencial' | 'Virtual' | 'Híbrido';
export type CourseDepartment = 'Ingeniería' | 'Ciencias' | 'Humanidades' | 'Diseño';
export type CourseStatus = 'Activo' | 'Cupo Lleno';