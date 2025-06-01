<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
  import { cn } from '$lib/utils';
	import type { EditorData, Folder, Note } from '$lib/types';
	import { getContext } from 'svelte';
	import { addFolder, findFolder, getTree, hasElement, renameFolder, renameNote } from '$lib/tree.client';
	import type { Writable } from 'svelte/store';

  let { tabs, activeTab, activeFolder, activeElement }: EditorData = getContext("editor:data");
  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");

  let name: string = $activeElement?.name ?? "";

  async function submit() {
    if (!$activeElement) return;
    if ($activeElement?.isFolder) {
      await renameFolder($activeElement.id, name)
    } else {
      await renameNote($activeElement.id, name)
    }
    tree.set(await getTree());
    tabs.update(v => v.filter(t => hasElement($tree, t)));
    if (!$activeElement?.isFolder) {
      tabs.update(v => v.map(t => t.id === $activeElement?.id ? { ...t, name } : t));
    }
    activeTab.update(v => $tabs.find(t => t.id === v?.id) ?? $tabs[0] ?? null);
  }
</script>

  

<DialogHeader>
  <DialogTitle class="text-2xl">Переименовать {$activeElement?.isFolder ? "папку" : "заметку"}</DialogTitle>
  <DialogDescription>Укажите новое название {$activeElement?.isFolder ? "папки" : "заметки"}</DialogDescription>
</DialogHeader>


<div class="grid gap-2">
  <Input type="text" placeholder={"Название " + ($activeElement?.isFolder ? "папки" : "заметки")} bind:value={name} />
</div>

<DialogFooter>
  <DialogClose
    class={cn(buttonVariants(), "w-full")}
    on:click={submit}
    disabled={!name || name.trim()?.length === 0}
  >
    Переименовать
  </DialogClose>
</DialogFooter>
  