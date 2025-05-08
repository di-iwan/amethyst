<script lang="ts">
	import type { EditorData, Folder, Note } from "$lib/types";
	import { ChevronRight, FolderIcon, FileIcon, FolderOpenIcon } from "lucide-svelte";
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
	import { Button } from "./ui/button";
	import { buttonVariants } from "./ui/button";
	import { getContext } from "svelte";
	import { cn } from "$lib/utils";
  
  export let elements: (Note|Folder)[];
  export let parent: Folder|null = null;

  let { activeTab, tabs, activeFolder, activeNote }: EditorData = getContext("editor:data");
</script>

{#each elements as element}
  {#if element.isFolder}
    <Collapsible class="w-full overflow-x-hidden">
      <CollapsibleTrigger
        class={cn(buttonVariants({
          class: "w-full justify-start group flex gap-2 py-1 px-0 cursor-default my-1",
          variant: "ghost",
          size: "sm"
        }), $activeFolder?.id === element.id && "bg-accent/60")}
        onclick={() => {
          activeFolder.set(element);
          activeNote.set(null);
        }}
      >
        <ChevronRight class="size-4 min-w-4 group-data-[state=open]:rotate-90 transition-transform" />
        <span class="flex items-center gap-2 truncate">
          <FolderIcon class="size-4 min-w-4 group-data-[state=open]:hidden" />
          <FolderOpenIcon class="size-4 min-w-4 hidden group-data-[state=open]:block" />
          <span class="truncate">{element.name}</span>
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent class="border-l ml-2">
        <svelte:self elements={element.elements} parent={element} />
      </CollapsibleContent>
    </Collapsible>
  {:else}
    <Button
      class={cn(
        "flex justify-start gap-2 pl-6 py-1 cursor-default w-full my-1",
        $activeNote?.id === element.id && "bg-accent/60"
      )}
      variant="ghost"
      size="sm"
      onclick={() => {
        activeFolder.set(parent);
        activeNote.set(element);
        tabs.update(notes => {
          if (!notes.find((v) => v.id === element.id))
            notes.push(element)

          return notes;
        });
        activeTab.set(element);
      }}
    >
      <FileIcon class="size-4 min-w-4" /> <span class="truncate">{element.name}</span>
    </Button>
  {/if}
{/each}