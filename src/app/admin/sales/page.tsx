import { TransactionFilter } from "@/components/transactions/TransactionFilter";
import { Heading } from "@/components/ui/Heading";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function SalesPage() {

  const queryClient = new QueryClient();



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
