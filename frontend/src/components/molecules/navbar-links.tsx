"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "../atoms/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/ui/dropdown-menu";
import Link from "next/link";
import { useAuthMe } from "@/hooks/use-auth-me";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type NavbarLinksProps = {
  items: { title: string; url: string }[];
};

export default function NavbarLinks({ items }: NavbarLinksProps) {
  const router = useRouter();
  const { data, isLoading, isError } = useAuthMe();
  const logoutMutation = useMutation({
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

  return (
    <ul className="hidden md:inline-flex md:gap-4">
      {items.map((item) => (
        <li key={item.title}>
          <Button asChild variant="link">
            <Link href={item.url}>{item.title}</Link>
          </Button>
        </li>
      ))}
      {isLoading && <div>loading...</div>}
      {isError || !data ? (
        <li>
          <Button variant="link" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
        </li>
      ) : (
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium">
                {data.user.name} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom">
              <DropdownMenuItem onClick={() => logoutMutation.mutate()}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      )}
    </ul>
  );
}
