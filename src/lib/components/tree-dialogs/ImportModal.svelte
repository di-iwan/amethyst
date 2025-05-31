<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { Button, buttonVariants } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
	import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
	import { cn } from '$lib/utils';

  const dispatch = createEventDispatcher();

  let file: File | null = null;
  let dragOver = false;

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    dragOver = false;
    if (event.dataTransfer?.files?.length) {
      file = event.dataTransfer.files[0];
    }
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    file = target.files?.[0] ?? null;
  }

  function handleImport() {
    if (file) {
      dispatch('import', { file });
    }
  }
</script>

  

<DialogHeader>
  <DialogTitle class="text-2xl">Импорт</DialogTitle>
  <DialogDescription>Вы можете импортировать файл заметок или экспортировать текущие данные</DialogDescription>
</DialogHeader>


<div class="grid gap-2">
  <Label>Импортировать файл</Label>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="border-2 border-dashed rounded-md px-4 py-8 text-center text-sm transition-colors"
    class:bg-muted={dragOver}
    on:dragover|preventDefault={() => (dragOver = true)}
    on:dragleave={() => (dragOver = false)}
    on:drop={handleDrop}
  >
    {#if file}
      <p class="text-foreground">{file.name}</p>
    {:else}
      <p class="text-muted-foreground">Перетащите файл сюда или выберите его ниже</p>
    {/if}
  </div>
  <Input type="file" on:change={handleFileChange} />
</div>

<DialogFooter>
  <DialogClose class={cn(buttonVariants(), "w-full")} on:click={handleImport} disabled={!file}>Импортировать</DialogClose>
</DialogFooter>
  