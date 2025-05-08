<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import type { EditorData, Folder, Note } from "$lib/types";
	import { X } from "lucide-svelte";
  import { getContext } from "svelte";

  let { activeTab, tabs, activeFolder, activeNote }: EditorData = getContext("editor:data");
</script>

<div class="relative m-4 sm:m-6 max-w-4xl rounded-2xl border bg-background p-4 sm:p-6 shadow-md">
  <div class="flex items-center border-b mb-4 whitespace-nowrap overflow-hidden overflow-x-auto">
    {#each $tabs as tab}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="relative flex items-center px-3 py-2 text-sm cursor-pointer transition-colors"
        class:border-b-2={tab.id === $activeTab?.id}
        class:border-foreground={tab.id === $activeTab?.id}
        on:click={() => activeTab.set(tab)}
      >
        <span class={tab.id === $activeTab?.id ? 'text-foreground' : 'text-muted-foreground'}>
          {tab.name}
        </span>
        {#if $tabs.length > 1}
          <Button
            class="ml-2 size-6"
            variant="ghost"
            size="icon"
            on:click={() => {
              let activeTabId = $activeTab?.id;
              tabs.update(notes => notes.filter((note) => note.id !== activeTabId))
              activeTab.set($tabs.at(0) ?? null)
            }}
          >
            <X class="size-4" />
          </Button>
        {/if}
      </div>
    {/each}
  </div>
</div>