<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button';
	import { OctagonAlert } from 'lucide-svelte';
  import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
	import type { EditorData, Note, Folder } from '$lib/types';
	import { getContext } from 'svelte';
	import { deleteFolder, deleteNote, findFolder, getTree, hasElement } from '$lib/tree.client';
	import type { Writable } from 'svelte/store';

  let { tabs, activeTab, activeFolder, activeElement }: EditorData = getContext("editor:data");
  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");

  async function remove() {
    if (!$activeElement) return;

    if ($activeElement?.isFolder) {
      await deleteFolder($activeElement.id)
    } else {
      await deleteNote($activeElement.id)
    }
    tree.set(await getTree());
    tabs.update(v => v.filter(t => hasElement($tree, t)));
    activeElement.set($activeFolder ?? null);
    activeFolder.set(findFolder($tree, $activeElement?.id));
    activeTab.update(v => $tabs.find(t => t.id === v?.id) ?? $tabs[0] ?? null);
  }
</script>

<DialogHeader class="items-center">
  <DialogTitle>
    <div class="mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
      <OctagonAlert class="h-7 w-7 text-destructive" />
    </div>
    Вы уверены в удалении?
  </DialogTitle>
  <DialogDescription class="text-[15px] text-center">
    Это действие нельзя отменить.{$activeElement?.isFolder && " Это удалит все вложенные элементы."}
  </DialogDescription>
</DialogHeader>
<DialogFooter class="mt-2 sm:justify-center gap-4">
  <DialogClose
    class={buttonVariants({ variant: "outline" })}
  >
    Отмена
  </DialogClose>
  <DialogClose
    class={buttonVariants({ variant: "destructive" })}
    on:click={remove}
  >
    Удалить
  </DialogClose>
</DialogFooter>