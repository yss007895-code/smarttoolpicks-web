'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.replace('/compare/clickup-vs-monday/');
  }, []);
  return (
    <div className="pt-8 max-w-3xl mx-auto text-center text-gray-400 text-sm">
      Redirecting...
    </div>
  );
}
