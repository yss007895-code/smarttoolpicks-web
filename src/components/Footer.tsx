import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Newsletter signup */}
        <div className="text-center mb-12 pb-12 border-b border-border">
          <h3 className="font-display font-bold text-xl text-[#1F2937] mb-2">Stay in the loop</h3>
          <p className="text-sm text-gray-500 mb-5 max-w-md mx-auto">Get weekly picks of the best tools, delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-2.5 text-sm bg-white border border-border rounded-full focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            <button type="submit" className="bg-accent text-white text-sm font-display font-semibold px-6 py-2.5 rounded-full hover:bg-accent-hover transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span className="font-display font-bold text-[#1F2937]">SmartToolPicks</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Find the right tools for your business.</p>
            <a href="mailto:contact@smarttoolpicks.net" className="inline-block mt-3 text-sm text-gray-400 hover:text-accent transition-colors">
              contact@smarttoolpicks.net
            </a>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#1F2937] text-sm mb-3">Explore</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-sm text-gray-500 hover:text-accent transition-colors">Browse Tools</Link>
              <Link href="/guides" className="block text-sm text-gray-500 hover:text-accent transition-colors">Reviews</Link>
              <Link href="/blog" className="block text-sm text-gray-500 hover:text-accent transition-colors">Blog</Link>
              <Link href="/style-quiz" className="block text-sm text-gray-500 hover:text-accent transition-colors">Tool Finder</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#1F2937] text-sm mb-3">Popular</h4>
            <div className="space-y-2">
              <Link href="/guides/best-ai-writing-assistants-2026" className="block text-sm text-gray-500 hover:text-accent transition-colors">AI Writing Tools</Link>
              <Link href="/guides/best-project-management-tools-2026" className="block text-sm text-gray-500 hover:text-accent transition-colors">Project Management</Link>
              <Link href="/guides/best-crm-software-small-business-2026" className="block text-sm text-gray-500 hover:text-accent transition-colors">CRM Software</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[#1F2937] text-sm mb-3">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-500 hover:text-accent transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-gray-500 hover:text-accent transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-sm text-gray-500 hover:text-accent transition-colors">Privacy</Link>
              <Link href="/terms" className="block text-sm text-gray-500 hover:text-accent transition-colors">Terms</Link>
              <Link href="/affiliate-disclosure" className="block text-sm text-gray-500 hover:text-accent transition-colors">Affiliate Disclosure</Link>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-border">
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="font-semibold text-gray-500">Affiliate Disclosure:</span> SmartToolPicks is a participant in affiliate programs. Some links on this site are affiliate links, meaning we may earn a small commission at no extra cost to you.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} SmartToolPicks. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-accent transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="text-xs text-gray-400 hover:text-accent transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
