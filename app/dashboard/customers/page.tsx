import { Metadata } from 'next';

const Customers = () => {
  return <p>Customers Page</p>;
};

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return <Customers />;
}
