import React from 'react';
import { MetricData } from '../../types';

export const MetricCard: React.FC<MetricData> = ({
  title,
  value,
  subtitle,
  icon,
  badgeText,
  badgeIcon,
}) => {
  return (
    <div className="group relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary">
          <span className="material-symbols-outlined text-[26px]">{icon}</span>
        </div>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-secondary-fixed px-2.5 py-0.5 text-xs font-semibold text-on-secondary-fixed-variant">
          {badgeIcon && <span className="material-symbols-outlined text-[14px]">{badgeIcon}</span>}
          {badgeText}
        </span>
      </div>
      <div className="mt-space-md flex flex-col">
        <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
          {title}
        </span>
        <span className="text-2xl font-bold text-on-surface tracking-tight mt-0.5">{value}</span>
        <span className="text-xs text-on-surface-variant mt-1">{subtitle}</span>
      </div>
    </div>
  );
};