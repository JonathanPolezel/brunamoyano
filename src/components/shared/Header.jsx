import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ toggleSidebar }) => {
  const translations = {
    pt: {
      menu: 'Menu',
    },
    en: {
      menu: 'Menu',
    },
  };

  const currentLanguage = 'pt'; // ou 'en'
  const t = translations[currentLanguage];

  return (
    <header className="fixed right-0 top-0 z-50 h-16 w-full border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm md:w-[calc(100%-256px)]">
      <div className="flex h-full items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label={t.menu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
