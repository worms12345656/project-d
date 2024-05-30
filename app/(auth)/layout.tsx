import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/components/templates/auth/auth-form';
import { JsxElement } from 'typescript';

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-black p-3 md:h-36">
          <div>
            <AcmeLogo text="light" />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
