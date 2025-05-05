<script lang="ts">
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { X, Plus, Menu } from 'lucide-svelte';
  import ThemeSwitch from '$lib/components/navbar/theme-switch.svelte';
  import * as Sheet from '$lib/components/ui/sheet';
  import { marked } from 'marked';
  import { FilePlus, FolderPlus, HardDriveUpload } from '@lucide/svelte';
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator
  } from '$lib/components/ui/dropdown-menu';
  import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';

  let isSheetOpen = false;
  let isPreviewMode = false;

  type Note = {
    id: number;
    title: string;
    content: string;
  };

  type Folder = {
    id: number;
    name: string;
    notes: Note[];
  };

  let folders: Folder[] = [
    {
      id: 1,
      name: 'Общие',
      notes: [{ id: 1, title: 'Заметка 1', content: '' }]
    }
  ];
  let activeFolderId = 1;
  let activeNoteId = 1;

  $: activeFolder = folders.find(f => f.id === activeFolderId) || folders[0];
  $: notes = activeFolder?.notes || [];
  $: activeNote = notes.find(n => n.id === activeNoteId) || notes[0];
  $: renderedMarkdown = marked(activeNote?.content ?? '');

  function addFolder() {
    const newFolder: Folder = {
      id: Date.now(),
      name: `Папка ${folders.length + 1}`,
      notes: []
    };
    folders = [...folders, newFolder];
    activeFolderId = newFolder.id;
  }

  function addNoteToActiveFolder() {
    const folder = folders.find(f => f.id === activeFolderId);
    if (!folder) return;
    const newNote: Note = {
      id: Date.now(),
      title: `Заметка ${folder.notes.length + 1}`,
      content: ''
    };
    folder.notes = [...folder.notes, newNote];
    folders = [...folders];
    activeNoteId = newNote.id;
  }

  function closeNote(noteId: number) {
    const folder = folders.find(f => f.id === activeFolderId);
    if (!folder || folder.notes.length <= 1) return;

    folder.notes = folder.notes.filter(n => n.id !== noteId);
    if (activeNoteId === noteId) {
      activeNoteId = folder.notes[0].id;
    }
    folders = [...folders];
  }

  function html(node: HTMLElement, html: string) {
    node.innerHTML = html;
  }
</script>

<div class="flex h-screen">
  <!-- Sidebar -->
  <aside class="inset-y fixed left-0 z-20 hidden h-full w-64 flex-col border-r bg-background md:flex">
    <div class="p-4 border-b text-center text-xl font-semibold tracking-tight">NoteForge</div>

    <div class="flex-1 overflow-auto p-4 space-y-2">
      {#each folders as folder}
        <div>
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="font-semibold px-2 py-1 cursor-pointer hover:bg-muted rounded"
            on:click={() => (activeFolderId = folder.id)}
          >
            {folder.name}
          </div>
          {#if folder.id === activeFolderId}
            <div class="ml-2 mt-1 space-y-1">
              {#each folder.notes as note}
                <Button
                  variant={note.id === activeNoteId ? 'secondary' : 'ghost'}
                  class="w-full justify-start text-left"
                  on:click={() => (activeNoteId = note.id)}
                >
                  {note.title}
                </Button>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="border-b flex justify-center gap-2 py-2">
      <Button size="icon" variant="outline" on:click={addNoteToActiveFolder}><FilePlus /></Button>
      <Button size="icon" variant="outline" on:click={addFolder}><FolderPlus /></Button>
      <Button size="icon" variant="outline"><HardDriveUpload /></Button>
      <ThemeSwitch />
    </div>

    <div class="border-t">
      <DropdownMenu>
        <DropdownMenuTrigger class="w-full">
          <div class="flex items-center gap-3 px-3 py-2 hover:bg-muted cursor-pointer">
            <Avatar class="h-8 w-8">
              <AvatarImage src="" alt="@DI_Iwan" />
              <AvatarFallback>DI</AvatarFallback>
            </Avatar>
            <div class="flex flex-col text-left text-sm leading-tight">
              <span class="font-medium text-foreground">DI_Iwan</span>
              <span class="text-muted-foreground text-xs">iwan.lelikov@gmail.com</span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" side="right">
          <DropdownMenuLabel class="flex items-center gap-2 px-3 py-2">
            <Avatar class="h-8 w-8">
              <AvatarImage src="" alt="@DI_Iwan" />
              <AvatarFallback>DI</AvatarFallback>
            </Avatar>
            <div class="flex flex-col text-sm">
              <span class="font-medium">DI_Iwan</span>
              <span class="text-muted-foreground text-xs">iwan.lelikov@gmail.com</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Upgrade to Pro</DropdownMenuItem>
          <DropdownMenuItem>Account</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="text-red-500">Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </aside>

  <!-- Mobile Sheet Sidebar -->
  <Sheet.Root open={isSheetOpen} onOpenChange={(val) => (isSheetOpen = val)}>
    <Sheet.Content side="left" class="w-64 p-0"></Sheet.Content>
  </Sheet.Root>

  <!-- Main content -->
  <main class="flex h-full w-full flex-col bg-muted text-foreground md:ml-64">
    <div class="sticky top-0 z-10 p-4 border-b bg-background flex items-center justify-between">
      <Button class="md:hidden" variant="ghost" size="icon" on:click={() => (isSheetOpen = true)}>
        <Menu class="size-6" />
      </Button>
    </div>

    <div class="overflow-auto p-4 sm:p-6">
      <div class="mx-auto max-w-4xl rounded-2xl border bg-background p-4 sm:p-6 shadow-md">
        <!-- Note Tabs -->
        <div class="flex items-center border-b mb-4 overflow-x-auto whitespace-nowrap">
          {#each notes as note}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
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
          <button class="ml-2 text-muted-foreground hover:text-foreground shrink-0" on:click={addNoteToActiveFolder}>
            <Plus class="size-4" />
          </button>
        </div>

        <!-- Note Title -->
        <input
          type="text"
          bind:value={activeNote.title}
          placeholder="Заголовок заметки..."
          class="mb-4 w-full border-none bg-transparent text-xl sm:text-2xl font-bold text-foreground outline-none placeholder:text-muted-foreground"
          readonly={isPreviewMode}
        />

        <!-- Toolbar -->
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

        <!-- Note Content -->
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
