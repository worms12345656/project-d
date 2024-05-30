import AcmeLogo from '@/app/ui/acme-logo';
import LoginPage from '@/app/(auth)/layout';
import LoginForm from '@/components/templates/auth/auth-form';
import SignupForm from '@/components/templates/auth/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Signup() {
  return <LoginForm formType="register" />;
}
