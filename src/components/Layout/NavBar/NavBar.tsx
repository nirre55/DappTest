import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes/routes';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === route.path
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}; 