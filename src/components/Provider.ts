import { createClient } from '@trpc/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, useState } from 'react';

export const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(
    () =>
      createClient({
        links: [
          httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
            fetch(url, options) {
              return fetch(url, {
                ...options,
                credentials: 'include',
              });
            },
          }),
        ],
      })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};