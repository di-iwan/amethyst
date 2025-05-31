<script lang="ts">
	import type { EditorData, Folder, Note } from "$lib/types";
	import { ChevronRight, FolderIcon, FileIcon, FolderOpenIcon } from "lucide-svelte";
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
	import { Button } from "./ui/button";
	import { buttonVariants } from "./ui/button";
	import { getContext } from "svelte";
	import { cn } from "$lib/utils";
	import { writable, type Writable } from "svelte/store";
  
  export let element: Folder;

  let { activeTab, tabs, activeFolder, activeElement }: EditorData = getContext("editor:data");

  let opened: Writable<Set<number>> = writable(new Set());

  function hasActiveChild(element: Folder): boolean {
    console.log(element)
    if (element.elements.some(v => $activeElement?.id === v.id && $activeElement?.isFolder === v.isFolder)) return true;
    return element.elements.filter(v => v.isFolder).some(v => hasActiveChild(v));
  }
  
  let lastActiveElement: Writable<Note|Folder|null> = writable(null);

  
</script>

<Collapsible class="w-full overflow-x-hidden" open={$opened.has(element.id)} onOpenChange={e => $opened = e ? new Set([...$opened, element.id]) : new Set([...$opened].filter(id => id !== element.id))}>
    <CollapsibleTrigger
    class={cn(buttonVariants({
        class: "w-full justify-start group flex gap-2 py-1 px-0 cursor-default my-1",
        variant: "ghost",
        size: "sm"
    }), $activeElement?.isFolder && $activeElement.id === element.id && "bg-accent/60")}
    onclick={() => {
        activeFolder.set(element);
        activeElement.set(element);
    }}
    >
    <ChevronRight class="size-4 min-w-4 group-data-[state=open]:rotate-90 transition-transform" />
    <span class="flex items-center gap-2 truncate">
        <FolderIcon class="size-4 min-w-4 group-data-[state=open]:hidden" />
        <FolderOpenIcon class="size-4 min-w-4 hidden group-data-[state=open]:block" />
        <span class="truncate">{element.name}</span>
    </span>
    </CollapsibleTrigger>
    <CollapsibleContent class={cn("border-l ml-2", $activeFolder?.id === element.id && "border-l-foreground")}>
        <TreeElements elements={element.elements} parent={element} />
    </CollapsibleContent>
</Collapsible>