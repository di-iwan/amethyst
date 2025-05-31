<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
  import { cn } from '$lib/utils';
	import type { EditorData, Folder, Note } from '$lib/types';
	import { getContext } from 'svelte';
	import { addFile, findFolder, findNote, getTree } from '$lib/tree.client';
	import type { Writable } from 'svelte/store';

  let file: string = "";

  let { activeTab, tabs, activeFolder, activeElement }: EditorData = getContext("editor:data");
  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");
</script>

  

<DialogHeader>
  <DialogTitle class="text-2xl">Новый файл</DialogTitle>
  <DialogDescription>Укажите название файла</DialogDescription>
</DialogHeader>


<div class="grid gap-2">
  <Input type="text" placeholder="Название файла" bind:value={file} />
</div>

<DialogFooter>
  <DialogClose
    class={cn(buttonVariants(), "w-full")}
    on:click={async () => {
      const res = await addFile(file, $activeFolder);
      
      tree.set(await getTree());
      activeElement.set({
        id: res.id,
        isFolder: false,
        name: res.title
      });

      const note = findNote($tree, res.id);
      const folder = findFolder($tree, res.parentId);

      activeElement.set(note);
      activeFolder.set(folder);

      activeTab.set(note);
      tabs.update((items) => [...items, {
        id: res.id,
        name: res.title,
        isFolder: false,
        folder: folder
      }]);
    }}
    disabled={!file || file.trim()?.length === 0}
  >
    Создать
  </DialogClose>
</DialogFooter>
  