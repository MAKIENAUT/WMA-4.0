"use client";

import { userQueryOptions } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export function useAuthMe() {
  return useQuery(userQueryOptions);
}
