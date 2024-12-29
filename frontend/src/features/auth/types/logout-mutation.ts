import { UseMutationResult } from "@tanstack/react-query";

export type LogoutMutationProps = UseMutationResult<
  {
    message: string;
  },
  Error,
  void,
  unknown
>;
