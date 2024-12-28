import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { InferredLoginSchemaType } from "@/types/login-schema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function useAuthLogin(router: AppRouterInstance) {
  return useMutation({
    mutationFn: async (values: InferredLoginSchemaType) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
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
      toast({ title: data.message });
      router.push("/");
    },
    onError: (err) => {
      toast({ title: err.message, variant: "destructive" });
    },
  });
}
