import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 pb-20 text-center max-w-lg mx-auto">
      <p className="font-display text-7xl font-black text-brand-purple mb-4">404</p>
      <h1 className="font-display text-2xl font-bold text-brand-ink mb-3">
        Page not found
      </h1>
      <p className="text-brand-slate mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-primary text-sm">Go Home</Link>
        <Link href="/guides" className="btn-secondary text-sm">Browse Reviews</Link>
        <Link href="/shop" className="btn-secondary text-sm">Browse Tools</Link>
      </div>

      <div className="mt-12 bg-white border border-surface-border rounded-lg p-6">
        <h2 className="font-display font-bold text-brand-ink text-sm mb-4">Popular right now</h2>
        <div className="space-y-0 text-left">
          {[
            { title: 'Best Project Management Tools 2026', href: '/guides/best-project-management-tools-2026' },
            { title: 'Top CRM Software Compared', href: '/guides/top-crm-software-compared' },
            { title: 'No-Code AI Tools Guide', href: '/guides/rise-of-no-code-ai-tools-build-automate' },
            { title: 'Best Design Tools 2026', href: '/guides/best-design-tools-2026' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-3 py-3 text-sm text-brand-slate hover:text-brand-purple transition-colors border-b border-surface-border">
              <span className="text-brand-orange">&rarr;</span>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
