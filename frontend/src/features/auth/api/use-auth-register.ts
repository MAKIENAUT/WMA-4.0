import { InferredSignupSchemaType } from "@/types/signup-schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../../../hooks/use-toast";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function useAuthRegister(router: AppRouterInstance) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: InferredSignupSchemaType) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/register`,
          {
            method: "POST",
            body: JSON.stringify({
              name: values.full_name,
              email: values.email,
              password: values.password,
            }),
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        return data;
      } catch (err) {
        throw err;
      }
    },
    onSuccess: (data: { message: string }) => {
      queryClient.invalidateQueries({ queryKey: ["userAuthMe"] });
      toast({ title: data.message });
      router.push("/");
    },
    onError: (err) => {
      toast({ title: err.message, variant: "destructive" });
    },
  });
}
