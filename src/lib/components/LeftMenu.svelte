<script lang="ts">
	import type { Folder, Note } from "$lib/types";
	import TreeElements from "./TreeElements.svelte";
  import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator
  } from '$lib/components/ui/dropdown-menu';
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import ThemeSwitch from "./navbar/theme-switch.svelte";
  import { FilePlus, FolderPlus, HardDriveUpload } from '@lucide/svelte';
  import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
	import ImportModal from "./ImportModal.svelte";
	import { type PageData } from "../../routes/main/$types";
	import Logo from "./images/logo.svelte";
	import { goto } from "$app/navigation";
  
  let className: string = "";
  export { className as class }

  export let inSheet: boolean = false;

  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");

  let user: PageData["user"] = getContext("auth");
  let shortName = user.email.substring(0, 2).toUpperCase();

	function handleImport(e: CustomEvent<any>): void {
		throw new Error("Function not implemented.");
	}
</script>

<Dialog>
  <aside class={cn("inset-y left-0 z-20 flex h-dvh w-64 flex-col border-r bg-background", className)}>
    <div class="p-4 border-b text-xl font-semibold tracking-tight flex justify-center items-center"><Logo class="size-8" /> NoteForge </div>
    <div class="border-b flex justify-center gap-2 py-2 *:size-8">
    <Button size="icon" variant="ghost"><FilePlus /></Button>
    <Button size="icon" variant="ghost"><FolderPlus /></Button>
      <DialogTrigger class={buttonVariants({variant: "ghost", size: "icon"})}>
        <HardDriveUpload /> 
      </DialogTrigger>
      <ThemeSwitch variant="ghost" />
    </div>
    <div class="flex-1 p-4 space-y-2 w-full overflow-x-hidden overflow-y-auto">
      <TreeElements elements={$tree} />
    </div>
    <div class="border-t">
      <DropdownMenu>
        <DropdownMenuTrigger class="w-full">
          <div class="flex items-center gap-3 px-3 py-2 hover:bg-muted cursor-pointer">
            <Avatar class="size-8">
              <AvatarImage src="" alt={shortName} />
              <AvatarFallback>{shortName}</AvatarFallback>
            </Avatar>
            <div class="flex flex-col text-left text-sm leading-tight overflow-hidden">
              <span class="font-medium text-foreground truncate">{user.lastName} {user.firstName}</span>
              <span class="text-muted-foreground text-xs truncate">{user.email}</span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" side={inSheet ? "top" : "right"}>
          <DropdownMenuLabel class="flex items-center gap-2 px-3 py-2">
            <Avatar class="size-8">
              <AvatarImage src="" alt={shortName} />
              <AvatarFallback>{shortName}</AvatarFallback>
            </Avatar>
            <div class="flex flex-col text-sm overflow-hidden">
              <span class="font-medium truncate">{user.lastName} {user.firstName}</span>
              <span class="text-muted-foreground text-xs truncate">{user.email}</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem href="/">Главная страница</DropdownMenuItem>
          <DropdownMenuItem href="/pricing">Обновить до Pro</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            on:click={() => fetch("/api/auth/logout", { method: "POST" }).then(r => r.ok ? goto("/") : null)}
            class="text-red-500"
          >
            Выйти
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </aside>
  <DialogContent>
    <ImportModal
      on:import={handleImport}
    />
  </DialogContent>
</Dialog>
