<script lang="ts">
	import type { EditorData, Folder, Note } from "$lib/types";
	import { ChevronRight, FolderIcon, FileIcon, FolderOpenIcon } from "lucide-svelte";
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
	import { Button } from "./ui/button";
	import { buttonVariants } from "./ui/button";
	import { getContext } from "svelte";
	import { cn } from "$lib/utils";
	import { writable, type Writable } from "svelte/store";
  
  export let elements: (Note|Folder)[];
  export let parent: Folder|null = null;

  let { activeTab, tabs, activeFolder, activeElement }: EditorData = getContext("editor:data");
</script>

{#each elements as element}
  {#if element.isFolder}
    <Collapsible class="w-full overflow-x-hidden">
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
        <svelte:self elements={element.elements} parent={element} />
      </CollapsibleContent>
    </Collapsible>
  {:else}
    <Button
      class={cn(
        "flex justify-start gap-2 pl-6 py-1 cursor-default w-full my-1",
        $activeElement?.id === element.id && "bg-accent/60"
      )}
      variant="ghost"
      size="sm"
      onclick={() => {
        activeFolder.set(parent);
        activeElement.set(element);
        tabs.update(notes => {
          if (!notes.find((v) => v.id === element.id))
            notes.push({ ...element, folder: parent });

          return notes;
        });
        activeTab.set(element);
      }}
    >
      <FileIcon class="size-4 min-w-4" /> <span class="truncate">{element.name}</span>
    </Button>
  {/if}
{/each}