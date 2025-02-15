import { TransactionFilter } from "@/components/transactions/TransactionFilter";
import { Heading } from "@/components/ui/Heading";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { format } from "date-fns";

export default async function SalesPage() {

  const queryClient = new QueryClient();

  const today = new Date();

  const formattedDate = today instanceof Date
      ? format(today, 'yyyy-MM-dd')
      : format(new Date(), 'yyyy-MM-dd')

  await queryClient.prefetchQuery({
    queryKey: ['sales', formattedDate],
    queryFn:
  })



  return (
    <>
      <Heading>Ventas</Heading>
      <p className="text-lg">En esta sección aparecerán las ventas, utiliza el calendario para filtrar por fecha.</p>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <TransactionFilter />
      </HydrationBoundary>
    </>
  );
}
