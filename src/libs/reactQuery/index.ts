import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: Infinity,
    staleTime: Infinity,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});
