"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { quickActionsData } from "@/lib/constants/nav";

export function AppSidebarQuickActions({ slug }: { slug: string }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const quickActions = quickActionsData({ slug });

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="bg-accent/60 hover:bg-accent border"
            onClick={() => setOpen(true)}
          >
            <Search className="text-muted-foreground" />
            Quick actions
            <Kbd className="ml-auto border">⌘K</Kbd>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search quick actions..." />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            {quickActions.map((group, index) => (
              <React.Fragment key={index}>
                <CommandGroup heading={group.title}>
                  {group.items.map((item, indexItem) => (
                    <CommandItem
                      key={indexItem}
                      onSelect={() => {
                        runCommand(() => router.push(item.url as string));
                      }}
                      className="cursor-pointer"
                    >
                      {item.icon && (
                        <item.icon className="text-muted-foreground" />
                      )}
                      {item.title}
                    </CommandItem>
                  ))}
                </CommandGroup>

                {index !== quickActions.length - 1 && <CommandSeparator />}
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
