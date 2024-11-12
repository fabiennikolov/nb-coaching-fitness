import React from 'react';
import { Dumbbell, Apple, LineChart, Target } from 'lucide-react';

export const QuickActions = ({ onAction }) => {
  const actions = [
    { icon: <Dumbbell size={20} />, label: 'Workout Plan', action: 'workout' },
    { icon: <Apple size={20} />, label: 'Nutrition Tips', action: 'nutrition' },
    { icon: <LineChart size={20} />, label: 'Progress', action: 'progress' },
    { icon: <Target size={20} />, label: 'Set Goals', action: 'goals' },
  ];

  return (
    <div className="flex gap-2 p-2 lg:overflow-x-auto bg-gray-50 sm:px-6 overflow-y-hidden overflow-x-hidden">
      {actions.map(({ icon, label, action }) => (
        <button
          key={action}
          onClick={() => onAction(action)}
          className="flex items-center gap-2 p-4 text-sm font-medium text-gray-700 bg-white rounded-full
            shadow-sm hover:bg-gray-50 border transition-colors whitespace-nowrap"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};
