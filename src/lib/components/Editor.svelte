<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import type { EditorData, Folder, Note } from "$lib/types";
	import { Eye, Save, SquarePen, X } from "lucide-svelte";
  import { getContext } from "svelte";
	import { Input } from './ui/input';
	import { Textarea } from './ui/textarea';
	import { Separator } from './ui/separator';
	import { marked } from 'marked';
	import { changeNote, getNote, getTree, hasElement } from '$lib/tree.client';
	import type { Writable } from 'svelte/store';

  let { activeTab, tabs, activeElement, activeFolder }: EditorData = getContext("editor:data");
  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");

  let isPreviewMode: boolean = false;
  $: name = $activeTab?.name ?? '';
  $: content = ""
  $: renderedMarkdown = marked(content ?? '');

  activeTab.subscribe((tab) => {
    if (!tab) return
    getNote(tab?.id).then((note) => {
      name = note.title
      content = note.content
    })
  })

  async function handleSave() {
    if (!$activeTab) return
    await changeNote($activeTab?.id, name, content)
    tree.set(await getTree());
    tabs.update(v => v.filter(t => hasElement($tree, t)));
    activeTab.update(v => $tabs.find(t => t.id === v?.id) ?? $tabs[0] ?? null);
  }
</script>

{#if !$activeTab}
  <div class="flex items-center justify-center w-full h-full">
    <span class="text-foreground text-xl text-center md:text-4xl">Перед началом откройте или создайте заметку.</span>
  </div>
{:else}
  <div class="relative flex flex-col max-w-6xl rounded-2xl border bg-background p-4 sm:p-6 shadow-md w-full min-w-0 overflow-hidden h-full">
    <div class="flex items-center border-b mb-4 whitespace-nowrap overflow-hidden overflow-x-auto h-12">
      {#each $tabs as tab}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="relative flex items-center px-3 py-2 text-sm cursor-pointer transition-colors"
          class:border-b={tab.id === $activeTab?.id}
          class:border-foreground={tab.id === $activeTab?.id}
          on:click={() => {
            activeTab.set(tab)
            activeElement.set(tab)
            activeFolder.set(tab.folder)
          }}
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
                let newActiveTab = $tabs.at(0) ?? null;
                activeTab.set(newActiveTab)
                if (!newActiveTab) return
                activeElement.set(newActiveTab)
                activeFolder.set(newActiveTab.folder)
              }}
            >
              <X class="size-4" />
            </Button>
          {/if}
        </div>
      {/each}
    </div>
    <div class="flex items-center w-full gap-2">
      <Input
        type="text"
        class="border-none"
        bind:value={name}
        placeholder="Заголовок заметки..."
        readonly={isPreviewMode}
      />
      {#if isPreviewMode}
        <Button variant="ghost" size="icon" on:click={() => isPreviewMode = false}>
          <SquarePen />
        </Button>
      {:else}
        <Button variant="ghost" size="icon" on:click={() => isPreviewMode = true}>
          <Eye />
        </Button>
      {/if}
      <Button variant="ghost" size="icon" on:click={handleSave}>
        <Save />
      </Button>
    </div>
    <Separator class="my-2" />
    {#if isPreviewMode}
      <div class="prose font-mono prose-zinc max-w-none p-4 whitespace-pre-wrap break-all">
        {@html renderedMarkdown}
      </div>
    {:else}
      <Textarea
      bind:value={content}
      class="w-full h-full resize-none border-none bg-transparent font-mono text-base text-foreground outline-none placeholder:text-muted-foreground"
      placeholder="Начните писать заметку..."
    />
    {/if}
  </div>
{/if}
