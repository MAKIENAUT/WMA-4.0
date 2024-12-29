import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function useAuthLogout(router: AppRouterInstance) {
  return useMutation({
    mutationFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/logout`,
          {
            method: "POST",
          }
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error);
        }
        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data: { message: string }) => {
      toast({ title: data.message });
      router.push("/login");
    },
    onError: (err) => {
      toast({ title: err.message, variant: "destructive" });
    },
  });
}
