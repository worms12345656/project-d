import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default async function Page() {
  const likes = 100;

  return (
    <main className="mb-10 flex min-h-screen flex-col">
      <div className=" box-s flex h-96 shrink-0 border-spacing-2 items-start justify-between rounded-se-lg rounded-ss-lg p-4">
        <div className="flex w-full translate-y-32 flex-col items-center gap-2 text-center">
          <span
            className={`${lusitana.className} text-center text-2xl font-bold text-black`}
          >
            Best Message Application For Gamers and Friends
          </span>
          <Link
            href={'/register'}
            className="aria-disabled:opacity-50' flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-green-500 aria-disabled:cursor-not-allowed"
          >
            Getting Started
            <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-50" />
          </Link>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Saber Chat.</strong> This is the application for
            Gamer to share and chatting with friends, brought to you by Vercel.
          </p>
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent transition-opacity" />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            width={1000}
            height={600}
            src="/hero-desktop.png"
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            width={560}
            height={620}
            src="/hero-mobile.png"
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
