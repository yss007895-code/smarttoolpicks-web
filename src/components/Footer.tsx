import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Newsletter signup */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <h3 className="font-display font-bold text-2xl text-white mb-2">Stay ahead of the curve</h3>
          <p className="text-sm text-gray-400 mb-5 max-w-md mx-auto">Get weekly picks of the best tools, delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 text-sm bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
            />
            <button type="submit" className="bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-display font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span className="font-display font-bold text-white">SmartToolPicks</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Find the right tools for your business.</p>
            <a href="mailto:contact@smarttoolpicks.net" className="inline-block mt-3 text-sm text-gray-500 hover:text-brand-purple transition-colors">
              contact@smarttoolpicks.net
            </a>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Explore</h4>
            <div className="space-y-2.5">
              <Link href="/shop" className="block text-sm text-gray-400 hover:text-white transition-colors">Browse Tools</Link>
              <Link href="/guides" className="block text-sm text-gray-400 hover:text-white transition-colors">Reviews</Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/style-quiz" className="block text-sm text-gray-400 hover:text-white transition-colors">Tool Finder</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Popular</h4>
            <div className="space-y-2.5">
              <Link href="/guides/best-ai-writing-assistants-2026" className="block text-sm text-gray-400 hover:text-white transition-colors">AI Writing Tools</Link>
              <Link href="/guides/best-project-management-tools-2026" className="block text-sm text-gray-400 hover:text-white transition-colors">Project Management</Link>
              <Link href="/guides/best-crm-software-small-business-2026" className="block text-sm text-gray-400 hover:text-white transition-colors">CRM Software</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Company</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="block text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/affiliate-disclosure" className="block text-sm text-gray-400 hover:text-white transition-colors">Affiliate Disclosure</Link>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 p-4 bg-white/5 rounded-xl border border-white/10">
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
