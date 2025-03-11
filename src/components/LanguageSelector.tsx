
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { GlobeIcon } from 'lucide-react';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("relative flex items-center", className)}>
      <div className="flex items-center space-x-1 border rounded-lg px-2 py-1 text-sm hover:bg-gray-50 cursor-pointer group">
        <GlobeIcon size={14} className="text-gray-500 group-hover:text-orange-500" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
          className="appearance-none bg-transparent outline-none cursor-pointer pr-4 text-gray-700"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
        <svg
          className="h-4 w-4 text-gray-500 pointer-events-none absolute right-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
