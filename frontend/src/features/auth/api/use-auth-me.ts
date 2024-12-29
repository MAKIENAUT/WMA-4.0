import { userQueryOptions } from "@/features/auth/utils/queries";
import { useQuery } from "@tanstack/react-query";

export function useAuthMe() {
  return useQuery(userQueryOptions);
}
