import React from 'react';

interface WelcomeBannerProps {
  userName: string;
  pendingDeliveriesCount: number;
  period: string;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  userName,
  pendingDeliveriesCount,
  period,
}) => {
  return (
    <section className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none" />
      <div className="absolute right-40 -bottom-20 h-48 w-48 rounded-full bg-primary-fixed/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-fixed px-3 py-1 text-xs font-semibold text-on-primary-fixed">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Ciclo Lectivo Activo
            </span>
            <span className="text-xs text-on-surface-variant font-medium">• Semestre {period}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl text-on-surface font-bold tracking-tight">
            ¡Hola, {userName}!
          </h1>
          <p className="text-base text-on-surface-variant">
            Bienvenido al panel académico de <strong className="text-primary font-semibold">ACADEMIA SUPER ESCOLAR PAOLO</strong>. Tienes{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-tertiary text-xs font-semibold">
              {pendingDeliveriesCount} entregas pendientes
            </span>{' '}
            esta semana.
          </p>
        </div>
      </div>
    </section>
  );
};