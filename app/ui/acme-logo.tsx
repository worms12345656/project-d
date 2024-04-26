import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      className={`${lusitana.className}  flex flex-row items-center leading-none text-black`}
      href={'/'}
    >
      <p className="-my-1 bg-logo bg-no-repeat pl-8 text-[32px]">Saber Chat</p>
    </Link>
  );
}
