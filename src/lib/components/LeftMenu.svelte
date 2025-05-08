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
  
  let className: string = "";
  export { className as class }

  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");
</script>

<aside class={cn("inset-y left-0 z-20 flex h-full w-64 flex-col border-r bg-background", className)}>
  <div class="p-4 border-b text-center text-xl font-semibold tracking-tight">NoteForge </div>
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
      <DropdownMenuContent class="w-56" side="right">
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
        <DropdownMenuItem>Upgrade to Pro</DropdownMenuItem>
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-red-500">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</aside>