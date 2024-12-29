import { UseMutationResult } from "@tanstack/react-query";

export type LoginMutationProps = UseMutationResult<
  {
    message: string;
  },
  Error,
  {
    email: string;
    password: string;
  },
  unknown
>;
