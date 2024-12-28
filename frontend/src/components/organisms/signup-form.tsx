"use client";
import {
  InferredSignupSchemaType,
  SIGNUP_DEFAULT_VALUES,
  signupSchema,
} from "@/types/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/ui/form";
import { Input } from "../atoms/ui/input";
import { Button } from "../atoms/ui/button";
import FormFooter from "../molecules/form-footer";
import FormContent from "../molecules/form-content";
import FormTitle from "../molecules/form-title";
import InputGroup from "../molecules/input-group";
import FormWrapper from "../molecules/form-wrapper";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

export default function SignupForm() {
  const router = useRouter();
  const form = useForm<InferredSignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: SIGNUP_DEFAULT_VALUES,
    mode: "onBlur",
  });

  const signupMutation = useMutation({
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
      toast({ title: data.message });
      router.push("/");
    },
    onError: (err) => {
      toast({ title: err.message, variant: "destructive" });
    },
  });

  async function onSubmit(values: InferredSignupSchemaType) {
    signupMutation.mutate(values);
  }

  return (
    <>
      <FormContent>
        <FormTitle title="Create an account" />
        <Form {...form}>
          <FormWrapper onSubmit={form.handleSubmit(onSubmit)}>
            <InputGroup>
              <FormField
                name="full_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Re-enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </InputGroup>
            <Button
              type="submit"
              variant="secondary"
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? "Signing up" : "Sign Up"}
            </Button>
          </FormWrapper>
        </Form>
      </FormContent>
      <FormFooter variant="signup" />
    </>
  );
}
