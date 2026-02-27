"use client";

import {
  ArrowRightLeft,
  Check,
  ChevronDown,
  CreditCard,
  LogOut,
  PlusIcon,
  Settings,
  Users2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useWorkspaces } from "@/lib/swr/use-workspace";

export function AppSidebarHeader({ slug }: { slug: string }) {
  const router = useRouter();

  const { workspaces } = useWorkspaces();

  const activeWorkspace = React.useMemo(() => {
    return workspaces.find((workspace) => workspace.slug === slug);
  }, [workspaces, slug]);

  if (!activeWorkspace) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center justify-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="size-5 rounded-sm">
                <AvatarImage
                  src={activeWorkspace.logo}
                  alt={activeWorkspace.name}
                />

                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground rounded-sm border text-xs font-medium">
                  {activeWorkspace.name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>

              <span className="truncate text-sm font-medium">
                {activeWorkspace.name}
              </span>

              <ChevronDown className="text-muted-foreground ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0">
              <div className="px-2 py-1 text-left text-sm">
                <p className="text-foreground truncate">Satrio Wicaksono</p>

                <p className="text-muted-foreground truncate font-normal">
                  hello@satrioinc.com
                </p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push(`/workspace/${slug}/settings`)}
            >
              <Settings className="text-muted-foreground" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  <ArrowRightLeft className="text-muted-foreground" />
                  Switch workspaces
                </DropdownMenuSubTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>Workspaces</DropdownMenuLabel>

                    <DropdownMenuGroup>
                      {workspaces.map((workspace) => (
                        <DropdownMenuItem
                          key={workspace.id}
                          onClick={() =>
                            router.push(`/workspace/${workspace.slug}`)
                          }
                          className="cursor-pointer"
                        >
                          <Avatar className="size-5 rounded-sm">
                            <AvatarImage
                              src={workspace.logo}
                              alt={workspace.name}
                            />

                            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground! rounded-sm border text-xs font-medium">
                              {workspace.name.slice(0, 1)}
                            </AvatarFallback>
                          </Avatar>

                          <span className="truncate text-sm font-medium">
                            {workspace.name}
                          </span>

                          {workspace.id === activeWorkspace.id && (
                            <Check className="ml-auto" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-muted-foreground cursor-pointer">
                      <PlusIcon />
                      Create new workspace
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() =>
                  router.push(`/workspace/${slug}/settings/members`)
                }
              >
                <Users2 className="text-muted-foreground" />
                Manage members
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() =>
                  router.push(`/workspace/${slug}/settings/billing`)
                }
              >
                <CreditCard className="text-muted-foreground" />
                Billing
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push(`/login`)}
            >
              <LogOut className="text-muted-foreground" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <SidebarTrigger className="text-muted-foreground size-8" />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
