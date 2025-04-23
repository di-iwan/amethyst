<script lang="ts">
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { X, Plus, Menu, FileText, File, SquareUser, Text } from 'lucide-svelte';
  import ThemeSwitch from '$lib/components/navbar/theme-switch.svelte';
  import * as Sheet from '$lib/components/ui/sheet';
  import { marked } from 'marked';

  let isSheetOpen = false;
  let isPreviewMode = false;

  type Note = {
    id: number;
    title: string;
    content: string;
  };

  let notes: Note[] = [
    { id: 1, title: 'Заметка 1', content: '' },
    { id: 2, title: 'Заметка 2', content: '' }
  ];
  let activeNoteId = 1;

  $: activeNote = notes.find(n => n.id === activeNoteId) || notes[0];
  $: renderedMarkdown = marked(activeNote?.content ?? '');

  function addNote() {
    const newId = Date.now();
    notes = [...notes, { id: newId, title: `Заметка ${notes.length + 1}`, content: '' }];
    activeNoteId = newId;
  }

  function closeNote(id: number) {
    if (notes.length === 1) return;
    notes = notes.filter(note => note.id !== id);
    if (activeNoteId === id) {
      activeNoteId = notes[0].id;
    }
  }

  function html(node: HTMLElement, html: string) {
    node.innerHTML = html;
  }
</script>

<div class="flex h-screen">
  <div class="fixed left-2 top-2 z-30 md:hidden">
    <Button variant="ghost" size="icon" on:click={() => (isSheetOpen = true)}>
      <Menu class="size-6" />
    </Button>
  </div>

  <Sheet.Root open={isSheetOpen} onOpenChange={(val) => (isSheetOpen = val)}>
    <Sheet.Content side="left" class="w-64 p-0">
      <aside class="flex h-full flex-col border-r bg-background">
        <div class="p-4 border-b text-center text-xl font-semibold tracking-tight">
          <Button size="icon"><Text /></Button>
          <Button size="icon"><FileText /></Button>
          <Button size="icon"><File /></Button>
        </div>
        <div class="flex-1 overflow-auto">
          <nav class="p-4 space-y-2">
            <Button variant="ghost" class="w-full justify-start">Пример</Button>
            <Button variant="ghost" class="w-full justify-start">Пример</Button>
          </nav>
        </div>
        <div class="border-t p-4">
          <Button variant="ghost" class="w-full justify-start">
            <SquareUser class="mr-2 size-4" />Аккаунт
          </Button>
        </div>
      </aside>
    </Sheet.Content>
  </Sheet.Root>

  <aside class="inset-y fixed left-0 z-20 hidden h-full w-64 flex-col border-r bg-background md:flex">
    <div class="p-4 border-b text-center text-xl font-semibold tracking-tight">
      <Button size="icon"><Text /></Button>
      <Button size="icon"><FileText /></Button>
      <Button size="icon"><File /></Button>
    </div>
    <div class="flex-1 overflow-auto">
      <nav class="p-4 space-y-2">
        <Button variant="ghost" class="w-full justify-start">Пример</Button>
        <Button variant="ghost" class="w-full justify-start">Пример</Button>
      </nav>
    </div>
    <div class="border-t p-4">
      <Button variant="ghost" class="w-full justify-start">
        <SquareUser class="mr-2 size-4" />Аккаунт
      </Button>
    </div>
  </aside>

  <main class="flex h-full w-full flex-col bg-muted text-foreground md:ml-64">
    <div class="sticky top-0 z-10 p-4 border-b bg-background flex items-center justify-between">
      <div class="text-xl font-semibold tracking-tight">NoteForge</div>
      <ThemeSwitch />
    </div>

    <div class="flex-1 overflow-auto p-4 sm:p-6">
      <div class="mx-auto max-w-4xl rounded-2xl border bg-background p-4 sm:p-6 shadow-md">
        <div class="flex items-center border-b mb-4 overflow-x-auto whitespace-nowrap">
          {#each notes as note}
            <div
              class="relative flex items-center px-3 py-2 text-sm cursor-pointer transition-colors"
              class:border-b-2={note.id === activeNoteId}
              class:border-foreground={note.id === activeNoteId}
              on:click={() => (activeNoteId = note.id)}
            >
              <span class={note.id === activeNoteId ? 'text-foreground' : 'text-muted-foreground'}>
                {note.title}
              </span>
              {#if notes.length > 1}
                <button class="ml-2 text-muted-foreground hover:text-foreground" on:click={() => closeNote(note.id)}>
                  <X class="size-4" />
                </button>
              {/if}
            </div>
          {/each}
          <button class="ml-2 text-muted-foreground hover:text-foreground shrink-0" on:click={addNote}>
            <Plus class="size-4" />
          </button>
        </div>

        <input
          type="text"
          bind:value={activeNote.title}
          placeholder="Заголовок заметки..."
          class="mb-4 w-full border-none bg-transparent text-xl sm:text-2xl font-bold text-foreground outline-none placeholder:text-muted-foreground"
          readonly={isPreviewMode}
        />

        <div class="mb-4 flex justify-between flex-wrap items-center gap-2 border-b pb-2 text-muted-foreground text-sm">
          <div class="flex gap-2">
            <button on:click={() => (activeNote.content += '**жирный**')} class="hover:text-foreground font-bold">B</button>
            <button on:click={() => (activeNote.content += '_курсив_')} class="hover:text-foreground italic">I</button>
            <button on:click={() => (activeNote.content += '# Заголовок\n')} class="hover:text-foreground">H1</button>
            <button on:click={() => (activeNote.content += '\n- ')} class="hover:text-foreground">•</button>
          </div>
          <button on:click={() => (isPreviewMode = !isPreviewMode)} class="text-sm underline">
            {isPreviewMode ? 'Редактировать' : 'Предпросмотр'}
          </button>
        </div>

        {#if isPreviewMode}
          <div class="prose prose-invert max-w-none" use:html={renderedMarkdown as string}></div>
        {:else}
          <Textarea
            bind:value={activeNote.content}
            class="h-[60vh] w-full resize-none border-none bg-transparent font-mono text-base text-foreground outline-none placeholder:text-muted-foreground"
            placeholder="Начните писать заметку..."
            rows={20}
          />
        {/if}
      </div>
    </div>
  </main>
</div>
