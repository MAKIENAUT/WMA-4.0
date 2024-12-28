"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/atoms/ui/sidebar";
import { Button } from "./ui/button";
import { ChevronUp, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { UseMutationResult } from "@tanstack/react-query";
import { DataProps } from "@/types/user-data";

type WMASidebarProps = {
  items: { title: string; url: string }[];
  data: DataProps;
  isPending: boolean;
  isError: boolean;
  logoutMutation: UseMutationResult<
    {
      message: string;
    },
    Error,
    void,
    unknown
  >;
};

export default function WMASidebar({
  items,
  data,
  isPending,
  isError,
  logoutMutation,
}: WMASidebarProps) {
  const { toggleSidebar, isMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sidebar side="right">
        <SidebarHeader>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X />
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild variant="outline">
                      <Link href={item.url} onClick={toggleSidebar}>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            {isPending ? (
              <div>loading...</div>
            ) : isError || !data ? (
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  variant="outline"
                  onClick={toggleSidebar}
                >
                  <Link href="/login">Sign in</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ) : (
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                      {data.user.name} <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top">
                    <DropdownMenuItem onClick={() => logoutMutation.mutate()}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    );
  }
}
