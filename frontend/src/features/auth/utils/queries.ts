import { queryOptions } from "@tanstack/react-query";

export const userQueryOptions = queryOptions({
  queryKey: ["userAuthMe"],
  queryFn: async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/me`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    return response.json();
  },
  retry: false,
});
