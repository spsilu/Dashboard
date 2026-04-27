import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileBarChart, Zap, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

export const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: FileBarChart, label: 'Reports', path: '/reports' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col py-8 z-40">
      <div className="px-6 mb-10 text-slate-800">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
            <Zap className="text-white w-4 h-4 fill-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Nexus OS</h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 group relative font-medium",
                isActive 
                  ? "bg-indigo-50 text-indigo-700" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )
            }
          >
            <item.icon className={cn("w-5 h-5", "group-hover:text-indigo-600")} />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="px-6 mt-auto border-t border-slate-100 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden text-xs flex items-center justify-center font-bold">
            AC
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-slate-800 truncate">Alex Chen</p>
            <p className="text-xs text-slate-500 truncate">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const TopBar = () => {
  return (
    <header className="h-20 bg-transparent flex items-center justify-between px-8 z-30">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Good Afternoon, Alex</h2>
        <p className="text-slate-500 text-sm">Here's your business overview for today.</p>
      </div>
    </header>
  );
};
