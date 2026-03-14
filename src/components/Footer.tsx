import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand-purple rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span className="font-display font-bold text-white text-sm">SmartToolPicks</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Find the right tools for your business.</p>
            <a href="mailto:contact@smarttoolpicks.net" className="inline-block mt-3 text-sm text-gray-500 hover:text-brand-orange transition-colors">
              contact@smarttoolpicks.net
            </a>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">Explore</h4>
            <div className="space-y-2.5">
              <Link href="/guides" className="block text-sm text-gray-400 hover:text-white transition-colors">Reviews</Link>
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">Popular</h4>
            <div className="space-y-2.5">
              <Link href="/guides/best-ai-writing-tools-2026" className="block text-sm text-gray-400 hover:text-white transition-colors">AI Writing Tools</Link>
              <Link href="/guides/top-project-management-apps-2026" className="block text-sm text-gray-400 hover:text-white transition-colors">Project Management</Link>
              <Link href="/guides/best-crm-software-2026" className="block text-sm text-gray-400 hover:text-white transition-colors">CRM Software</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">Company</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/disclaimer" className="block text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Our Network */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mb-4">Our Network</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://securechoiceguide.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">SecureChoiceGuide</a>
            <a href="https://stylemedaily.org" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">StyleMeDaily</a>
            <a href="https://trendloopusa.net" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">TrendLoop USA</a>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-400">Affiliate Disclosure:</span> SmartToolPicks is a participant in affiliate programs. Some links on this site are affiliate links, meaning we may earn a small commission at no extra cost to you.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} SmartToolPicks. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="text-xs text-gray-500 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
