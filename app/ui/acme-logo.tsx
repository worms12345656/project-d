import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { cn } from '../lib/utils';

type Props = {
  text?: 'dark' | 'light';
};

export default function Logo({ text = 'dark' }: Props) {
  return (
    <Link
      className={`${lusitana.className} flex h-fit flex-row items-center leading-none text-black`}
      href={'/'}
    >
      <p
        className={cn(
          `bg-logo bg-no-repeat pl-8 text-[32px]`,
          text === 'light' ? 'text-white' : 'text-black',
        )}
      >
        Saber Chat
      </p>
    </Link>
  );
}
