export default function NewsletterCTA() {
  return (
    <div className="border border-gray-100 rounded-xl p-8 text-center bg-white">
      <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">The Weekly Tool Brief</h3>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
        SaaS reviews, software deals, and productivity tips delivered every Thursday.
      </p>
      <div className="max-w-md mx-auto">
        <a href="https://smarttoolpicks.substack.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Subscribe Free</a>
      </div>
      <p className="text-[11px] text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
