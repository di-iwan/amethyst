<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
  import { cn } from '$lib/utils';
	import type { EditorData, Folder, Note } from '$lib/types';
	import { getContext } from 'svelte';
	import { addFolder, findFolder, getTree } from '$lib/tree.client';
	import type { Writable } from 'svelte/store';

  let file: string = "";

  let { activeFolder, activeElement }: EditorData = getContext("editor:data");
  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");
</script>

  

<DialogHeader>
  <DialogTitle class="text-2xl">Новая папка</DialogTitle>
  <DialogDescription>Укажите название папки</DialogDescription>
</DialogHeader>


<div class="grid gap-2">
  <Input type="text" placeholder="Название папки" bind:value={file} />
</div>

<DialogFooter>
  <DialogClose
    class={cn(buttonVariants(), "w-full")}
    on:click={async () => {
      const res = await addFolder(file, $activeFolder);
      
      tree.set(await getTree());
      activeElement.set({
        id: res.id,
        isFolder: true,
        name: res.name,
        elements: []
      });

      activeElement.set(findFolder($tree, res.id));
      activeFolder.set(findFolder($tree, res.parentId));
    }}
    disabled={!file || file.trim()?.length === 0}
  >
    Создать
  </DialogClose>
</DialogFooter>
  