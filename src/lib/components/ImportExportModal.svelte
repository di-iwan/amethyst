<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';

  // svelte-ignore export_let_unused
    export let open: boolean;
  // svelte-ignore export_let_unused
    export let noteContent: string;

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

  function handleExport() {
    dispatch('export');
  }

  function handleImport() {
    if (file) {
      dispatch('import', { file });
    }
  }
</script>

  
  <div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <Card.Root class="mx-auto max-w-sm w-full">
      <Card.Header>
        <Card.Title class="text-2xl">Импорт / Экспорт</Card.Title>
        <Card.Description>Вы можете импортировать файл заметок или экспортировать текущие данные</Card.Description>
      </Card.Header>
  
      <Card.Content class="grid gap-4">
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
          <Input type="file" accept=".json" on:change={handleFileChange} />
          <Button on:click={handleImport} disabled={!file} class="w-full">Импортировать</Button>
        </div>
  
        <div class="border-t pt-4">
          <Label>Экспортировать заметки</Label>
          <Button on:click={handleExport} class="w-full mt-2">Экспортировать</Button>
        </div>
      </Card.Content>
    </Card.Root>
  </div>
  
  <style>
    :global(body) {
      @apply bg-muted/45;
    }
  </style>
  