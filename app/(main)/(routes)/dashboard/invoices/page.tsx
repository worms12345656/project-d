import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import InvoicesTable from '@/app/ui/invoices/table';
import { fetchInvoicesPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

import { Metadata } from 'next';
import CardWrapper, { Card } from '@/app/ui/dashboard/cards';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        KanBan
      </h1>
      <div className="grid w-full grid-cols-3 gap-5">
        <section className=" rounded-lg border border-solid border-blue-700 bg-blue-400">
          <h3
            className={`${lusitana.className} text-l mb-2 text-center md:text-xl`}
          >
            To do
          </h3>
          <Card title="abcd" type="pending" value={'aasdb'} />
        </section>
        <section className=" rounded-lg border border-solid border-red-700 bg-red-400">
          <h3
            className={`${lusitana.className} text-l mb-2 text-center md:text-xl`}
          >
            Pending
          </h3>
          <Card title="abcd" type="pending" value={'aasdb'} />
        </section>
        <section className=" rounded-lg border border-solid border-green-700 bg-green-400">
          <h3
            className={`${lusitana.className} text-l mb-2 text-center md:text-xl`}
          >
            Done
          </h3>
          <Card title="abcd" type="pending" value={'aasdb'} />
        </section>
      </div>
    </main>
  );
}
