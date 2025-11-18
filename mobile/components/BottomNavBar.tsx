
import React from 'react';
import { Page } from '../types';
import Icon from './Icon';

interface BottomNavBarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

interface NavItemProps {
  label: string;
  iconPath: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, iconPath, isActive, onClick }) => {
  const activeClass = 'text-primary';
  const inactiveClass = 'text-slate-500';
  const colorClass = isActive ? activeClass : inactiveClass;
  const fontWeightClass = isActive ? 'font-bold' : 'font-medium';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${colorClass}`}
    >
      <Icon path={iconPath} size={24} />
      <span className={`text-xs mt-1 ${fontWeightClass}`}>{label}</span>
    </button>
  );
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <NavItem
        label="Painel"
        iconPath="M3 10.5h4.5v9H3v-9zm6.5 0h4.5v9h-4.5v-9zm6.5 0h4.5v9h-4.5v-9zM3 4.5h18v4H3v-4z"
        isActive={currentPage === 'dashboard'}
        onClick={() => onNavigate('dashboard')}
      />
      <NavItem
        label="Estatísticas"
        iconPath="M10.5 4.5a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5h-3zM9 9.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-9zM15 6.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-12zM4.5 12.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-6z"
        isActive={currentPage === 'statistics'}
        onClick={() => onNavigate('statistics')}
      />
    </nav>
  );
};

export default BottomNavBar;
