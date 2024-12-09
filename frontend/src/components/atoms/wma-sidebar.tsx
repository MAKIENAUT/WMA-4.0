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
import { NavbarProps } from "../organisms/navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export default function WMASidebar({ data }: NavbarProps) {
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
                {data.map((datum) => (
                  <SidebarMenuItem key={datum.title}>
                    <SidebarMenuButton asChild variant="outline">
                      <Link href={datum.url} onClick={toggleSidebar}>
                        {datum.title}
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
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                variant="outline"
                onClick={toggleSidebar}
              >
                <Link href="/login">Sign in</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Username <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top">
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    );
  }
}
