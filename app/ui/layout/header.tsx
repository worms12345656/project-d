'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname();

  return pathname !== '/login' ? (
    <div className="flex h-14 w-full flex-row items-center justify-between p-6">
      <AcmeLogo />
      <ul className="flex flex-row pl-3">
        <li className="pr-8 hover:underline">Getting Started</li>
        <li className="pr-8 hover:underline">Discover</li>
        <li className="pr-8 hover:underline">Support</li>
        <li className="pr-8 hover:underline">Blog</li>
      </ul>
      <Link
        href="/login"
        className="flex -translate-y-1/2 items-center gap-5 self-start rounded-[20px] bg-blue-500 px-4 py-1 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span>
      </Link>
    </div>
  ) : (
    <></>
  );
}
