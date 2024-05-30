import AcmeLogo from '@/app/ui/acme-logo';
import LoginPage from '@/app/(auth)/layout';
import LoginForm from '@/components/templates/auth/auth-form';
import { Metadata } from 'next';
import { auth } from '../../../api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Login() {
  const session = await auth();
  console.log('session', session);

  return <LoginForm formType="login" session={session || undefined} />;
}
