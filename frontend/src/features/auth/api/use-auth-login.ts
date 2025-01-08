import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../../../hooks/use-toast";
import { InferredLoginSchemaType } from "@/types/login-schema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

export function useAuthLogin(
  router: AppRouterInstance,
  setDisabled: Dispatch<SetStateAction<boolean>>
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: InferredLoginSchemaType) => {
      try {
        setDisabled(true);
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
      setDisabled(false);
      queryClient.invalidateQueries({ queryKey: ["userAuthMe"] });
      toast({ title: data.message });
      router.push("/");
    },
    onError: (err) => {
      setDisabled(false);
      toast({ title: err.message, variant: "destructive" });
    },
  });
}
