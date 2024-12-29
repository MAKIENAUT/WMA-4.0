import { UseMutationResult } from "@tanstack/react-query";

export type SignupMutationProps = UseMutationResult<
  {
    message: string;
  },
  Error,
  {
    email: string;
    password: string;
    full_name: string;
    confirmPassword: string;
  },
  unknown
>;
