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
  
  let className: string = "";
  export { className as class }

  export let inSheet: boolean = false;

  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");


	function handleImport(e: CustomEvent<any>): void {
		throw new Error("Function not implemented.");
	}
</script>

<aside class={cn("inset-y left-0 z-20 flex h-dvh w-64 flex-col border-r bg-background", className)}>
  <div class="p-4 border-b text-center text-xl font-semibold tracking-tight">NoteForge </div>
  <div class="border-b flex justify-center gap-2 py-2 *:size-8">
  <Button size="icon" variant="ghost"><FilePlus /></Button>
  <Button size="icon" variant="ghost"><FolderPlus /></Button>
  <Dialog>
  <DialogTrigger class={buttonVariants({variant: "ghost", size: "icon"})}>
    <HardDriveUpload /> 
  </DialogTrigger>
  <DialogContent>
    <ImportModal
      on:import={handleImport}
    />
  </DialogContent>
</Dialog>
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
            <AvatarImage src="" alt="@DI_Ivan" />
            <AvatarFallback>DI</AvatarFallback>
          </Avatar>
          <div class="flex flex-col text-left text-sm leading-tight overflow-hidden">
            <span class="font-medium text-foreground truncate">DI_Ivan</span>
            <span class="text-muted-foreground text-xs truncate">ivan.lelikov@gmail.com</span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56" side={inSheet ? "top" : "right"}>
        <DropdownMenuLabel class="flex items-center gap-2 px-3 py-2">
          <Avatar class="size-8">
            <AvatarImage src="" alt="@DI_Ivan" />
            <AvatarFallback>DI</AvatarFallback>
          </Avatar>
          <div class="flex flex-col text-sm overflow-hidden">
            <span class="font-medium truncate">DI_Ivan</span>
            <span class="text-muted-foreground text-xs truncate">ivan.lelikov@gmail.com</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem href="/">Главная страница</DropdownMenuItem>
        <DropdownMenuItem href="">Обновить до Pro</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-red-500">Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</aside>