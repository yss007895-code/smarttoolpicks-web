'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/guides', label: 'Reviews' },
    { href: '/about', label: 'About' },
    { href: '/disclaimer', label: 'Disclosure' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <span className="font-display font-bold text-lg text-brand-ink tracking-tight hidden sm:inline">
              SmartToolPicks
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`text-sm font-display font-medium transition-colors ${
                  isActive(l.href)
                    ? 'text-brand-purple'
                    : 'text-brand-slate hover:text-brand-ink'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/guides" className="hidden sm:block bg-brand-orange text-white text-sm font-display font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
              Discover Smart Tools
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-brand-slate hover:text-brand-ink p-2"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 pt-2 animate-fade-in border-t border-surface-border">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block px-4 py-3 text-sm font-display ${
                  isActive(l.href)
                    ? 'text-brand-purple font-semibold'
                    : 'text-brand-slate hover:text-brand-ink'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 mt-3">
              <Link href="/guides" className="block bg-brand-orange text-white text-sm font-display font-semibold text-center px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                Discover Smart Tools
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
