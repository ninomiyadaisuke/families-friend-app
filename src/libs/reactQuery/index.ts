import { DefaultOptions, QueryClient, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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

export type ExtractFnReturnType<FnType extends (...args: any) => any> = ReturnType<FnType> extends Promise<infer T>
  ? T
  : never;

export type QueryConfig<FnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<FnType>>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
