import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className="flex items-center text-xs md:text-sm text-[#5f6f7f] py-3 overflow-x-auto whitespace-nowrap"
      id="page-breadcrumbs"
    >
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#0f6bd9] transition-colors focus:outline-none focus-visible:underline"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#d8e3ec]" aria-hidden="true" />
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="hover:text-[#0f6bd9] transition-colors focus:outline-none focus-visible:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-[#10243e]" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
