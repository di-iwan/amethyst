<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
  import { cn } from '$lib/utils';
	import type { EditorData, Folder, Note } from '$lib/types';
	import { getContext } from 'svelte';
	import { addFolder, findFolder, getTree } from '$lib/tree.client';
	import type { Writable } from 'svelte/store';

  let { activeFolder, activeElement }: EditorData = getContext("editor:data");
  let tree: Writable<(Note|Folder)[]> = getContext("editor:tree");

  let file: string = $activeElement?.name ?? "";
</script>

  

<DialogHeader>
  <DialogTitle class="text-2xl">Переименовать {$activeElement?.isFolder ? "папку" : "заметку"}</DialogTitle>
  <DialogDescription>Укажите новое название {$activeElement?.isFolder ? "папки" : "заметки"}</DialogDescription>
</DialogHeader>


<div class="grid gap-2">
  <Input type="text" placeholder={"Название " + ($activeElement?.isFolder ? "папки" : "заметки")} bind:value={file} />
</div>

<DialogFooter>
  <DialogClose
    class={cn(buttonVariants(), "w-full")}
    on:click={async () => {
      
    }}
    disabled={!file || file.trim()?.length === 0}
  >
    Переименовать
  </DialogClose>
</DialogFooter>
  