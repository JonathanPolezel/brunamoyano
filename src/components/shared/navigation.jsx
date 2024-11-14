import React from 'react';
import { Home, Briefcase, Mail, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';

const Navigation = ({ isOpen, onClose, currentPath }) => {
  const translations = {
    pt: {
      home: 'Início',
      experiences: 'Experiências',
      contact: 'Contato',
      title: 'Menu Principal',
    },
  };

  const currentLanguage = 'pt';

  const menuItems = [
    {
      title: translations[currentLanguage].home,
      icon: <Home className="h-5 w-5" />,
      path: '/',
    },
    {
      title: translations[currentLanguage].experiences,
      icon: <Briefcase className="h-5 w-5" />,
      path: '/experiencias',
    },
    {
      title: translations[currentLanguage].contact,
      icon: <Mail className="h-5 w-5" />,
      path: '/contato',
    },
  ];

  const isActiveLink = (path) => currentPath === path;

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-neutral-800 bg-neutral-900 p-4 md:flex">
      <div className="mb-8">
        <h1 className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
          Bruna Lino Moyano
        </h1>
        <p className="mt-1 text-sm text-gray-400">Finanças & Comércio Exterior</p>
      </div>

      <div className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              isActiveLink(item.path)
                ? 'bg-purple-500/10 text-purple-400'
                : 'text-gray-400 hover:bg-neutral-800 hover:text-gray-100'
            }`}
            aria-current={isActiveLink(item.path) ? 'page' : undefined}
          >
            {item.icon}
            <span>{item.title}</span>
            {isActiveLink(item.path) && <ChevronRight className="ml-auto h-4 w-4" />}
          </Link>
        ))}
      </div>

      <div className="mt-4 border-t border-neutral-800 pt-4">
        <p className="text-center text-xs text-gray-400">© 2024 Bruna Lino Moyano</p>
      </div>
    </nav>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[300px] border-r border-neutral-800 bg-neutral-900 p-0"
      >
        <SheetHeader className="border-b border-neutral-800 p-4">
          <SheetTitle className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-left font-bold text-transparent">
            {translations[currentLanguage].title}
          </SheetTitle>
        </SheetHeader>
        <div className="py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                isActiveLink(item.path)
                  ? 'bg-purple-500/10 text-purple-400'
                  : 'text-gray-400 hover:bg-neutral-800 hover:text-gray-100'
              }`}
              onClick={onClose}
              aria-current={isActiveLink(item.path) ? 'page' : undefined}
            >
              {item.icon}
              <span>{item.title}</span>
              {isActiveLink(item.path) && <ChevronRight className="ml-auto h-4 w-4" />}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navigation;
