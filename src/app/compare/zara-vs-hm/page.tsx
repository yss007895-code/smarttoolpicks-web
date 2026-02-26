import { redirect } from 'next/navigation';

export const metadata = {};

export default function Page() {
  redirect('/compare/hubspot-vs-mailchimp');
}
