import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      className={`${lusitana.className} flex h-fit flex-row items-center leading-none text-black`}
      href={'/'}
    >
      <p className="bg-logo bg-no-repeat pl-8 text-[32px]">Saber Chat</p>
    </Link>
  );
}
