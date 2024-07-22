import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 10 * 60 * 1000, // 10 minutes
			staleTime: 5 * 60 * 1000, // 5 minutes
			retry: 3,
			retryDelay: (attemptIndex) =>
				Math.min(1000 * 2 ** attemptIndex, 30000),
			refetchOnWindowFocus: true,
			refetchOnMount: true,
			refetchInterval: 60000, // 60 seconds
			refetchOnReconnect() {
				return true;
			},
		},
	},
});

const QueryClientConfig = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default QueryClientConfig;
