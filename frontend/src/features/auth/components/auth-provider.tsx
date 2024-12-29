"use client";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import { useAuthMe } from "../api/use-auth-me";
import { useAuthLogout } from "@/features/auth/api/use-auth-logout";
import { DataProps } from "../types/user-data";
import { LogoutMutationProps } from "../types/logout-mutation";
import { useAuthLogin } from "../api/use-auth-login";
import { LoginMutationProps } from "../types/login-mutation";
import { useAuthRegister } from "@/features/auth/api/use-auth-register";
import { SignupMutationProps } from "../types/signup-mutation";

type AuthContextProps = {
  data: DataProps;
  isPending: boolean;
  isError: boolean;
  loginMutation: LoginMutationProps;
  signupMutation: SignupMutationProps;
  logoutMutation: LogoutMutationProps;
};

const authContext = createContext<AuthContextProps | null>(null);

export function useAuthContext() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data, isPending, isError } = useAuthMe();
  const loginMutation = useAuthLogin(router);
  const signupMutation = useAuthRegister(router);
  const logoutMutation = useAuthLogout(router);
  const contextValue = {
    data,
    isPending,
    isError,
    loginMutation,
    signupMutation,
    logoutMutation,
  };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
