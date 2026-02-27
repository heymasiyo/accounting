"use client";

import { useParams } from "next/navigation";
import * as React from "react";

import { AppSidebarHeader } from "@/components/app/workspace/layout/app-sidebar-header";
import { AppSidebarNav } from "@/components/app/workspace/layout/app-sidebar-nav";
import { AppSidebarQuickActions } from "@/components/app/workspace/layout/app-sidebar-quick-actions";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarNavData } from "@/lib/constants/nav";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const params = useParams<{ slug: string }>();
  const sidebarNav = sidebarNavData({ slug: params.slug });

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <AppSidebarHeader slug={params.slug} />

        <AppSidebarQuickActions slug={params.slug} />
      </SidebarHeader>

      <SidebarContent>
        {sidebarNav.map((group, index) => (
          <AppSidebarNav key={index} title={group.title} items={group.items} />
        ))}
      </SidebarContent>

      <SidebarFooter></SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
