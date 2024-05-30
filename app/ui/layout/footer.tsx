import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className="h-auto w-full bg-black">
      <div className="m-auto flex w-3/4 flex-row justify-between py-5">
        <AcmeLogo text="light" />
        <>
          <div className="flex flex-col gap-4">
            <span className=" text-sky-500">Product</span>
            <Link className="pt-2 text-white hover:underline" href={'/'}>
              Nitro
            </Link>
            <Link className=" text-white hover:underline" href={'/login'}>
              Status
            </Link>
            <Link className=" text-white hover:underline" href={'/'}>
              App
            </Link>
          </div>
        </>
        <>
          <div className="flex flex-col gap-4">
            <span className=" text-sky-500">Company</span>
            <Link className="pt-2 text-white hover:underline" href={'/'}>
              About
            </Link>
            <Link className=" text-white hover:underline" href={'/'}>
              Brand
            </Link>
            <Link className=" text-white hover:underline" href={'/'}>
              Job
            </Link>
          </div>
        </>
        <>
          <div className="flex flex-col gap-4">
            <span className=" text-sky-500">Resources</span>
            <Link className="pt-2 text-white hover:underline" href={'/'}>
              Gaming
            </Link>
            <Link className=" text-white hover:underline" href={'/'}>
              Developer
            </Link>
            <Link className=" text-white hover:underline" href={'/'}>
              Official 3rd Party Merch
            </Link>
          </div>
        </>
      </div>
    </div>
  );
}
