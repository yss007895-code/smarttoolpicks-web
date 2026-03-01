'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/shop', label: 'Tools' },
    { href: '/guides', label: 'Reviews' },
    { href: '/blog', label: 'Blog' },
    { href: '/compare', label: 'Compare' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <span className="font-display font-bold text-lg text-brand-ink tracking-tight hidden sm:inline">
              Smart<span className="text-brand-purple">Tool</span>Picks
            </span>
          </Link>

          {/* Search center (desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input
                type="text"
                placeholder="Search tools, reviews..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
              />
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`px-3.5 py-2 text-sm font-display font-medium rounded-lg transition-colors ${
                  isActive(l.href)
                    ? 'text-brand-purple bg-brand-purple-light'
                    : 'text-brand-slate hover:text-brand-ink hover:bg-surface-muted'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/style-quiz" className="hidden sm:block bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-display font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
              Submit a Tool
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
            <div className="px-4 py-2">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input
                  type="text"
                  placeholder="Search tools, reviews..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-brand-purple"
                />
              </div>
            </div>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block px-4 py-3 text-sm font-display rounded-lg ${
                  isActive(l.href)
                    ? 'text-brand-purple font-semibold bg-brand-purple-light'
                    : 'text-brand-slate hover:text-brand-ink hover:bg-surface-muted'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 mt-3">
              <Link href="/style-quiz" className="block bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-display font-semibold text-center px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                Submit a Tool
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
