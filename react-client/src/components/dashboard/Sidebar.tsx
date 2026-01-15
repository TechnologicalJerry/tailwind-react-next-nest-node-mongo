'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navigation: NavItem[] = [
  {
    name: 'Dashboard',
    href: ROUTES.DASHBOARD,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Users',
    href: ROUTES.DASHBOARD_USERS,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Products',
    href: ROUTES.DASHBOARD_PRODUCTS,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: 'Profile',
    href: ROUTES.DASHBOARD_PROFILE,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-out md:translate-x-0 md:static md:inset-0 border-r border-slate-800 shadow-xl`}
      >
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between h-20 flex-shrink-0 px-6 bg-slate-950/50 backdrop-blur border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Dashboard
              </h1>
            </div>
            <button
              onClick={onClose}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col pt-6 pb-4 overflow-y-auto custom-scrollbar">
            <nav className="flex-1 px-4 space-y-2">
              <p className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Main Menu
              </p>
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`${isActive
                        ? 'bg-blue-600/10 text-blue-400 shadow-sm border-l-2 border-blue-500'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-white border-l-2 border-transparent'
                      } group flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-r-lg`}
                  >
                    <span className={`mr-3 flex-shrink-0 transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'
                      }`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="px-4 mt-auto">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Pro Plan</h3>
                    <p className="text-xs text-slate-400">Active until Dec 31</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
