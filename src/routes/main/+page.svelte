<script lang="ts">
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { Triangle, SquareUser, Menu, FilePlus2 } from 'lucide-svelte';
  import ThemeSwitch from '$lib/components/navbar/theme-switch.svelte';
  import * as Sheet from '$lib/components/ui/sheet';

  let isSheetOpen = false;
  let noteTitle = 'Новая заметка';
  let noteContent = '';
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
        <div class="p-4 border-b flex items-center gap-3">
          <Button>
            <FilePlus2 class="w-full" />
          </Button>
          <ThemeSwitch class="ml-auto" />
        </div>
        <div class="flex-1 overflow-auto">
          <nav class="p-4 space-y-2">
            <Button variant="ghost" class="w-full justify-start">
              Пример
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              Пример
            </Button>
          </nav>
        </div>
        <div class="border-t p-4">
          <Button variant="ghost" class="w-full justify-start">
            <SquareUser class="mr-2 size-4" />
            Аккаунт
          </Button>
        </div>
      </aside>
    </Sheet.Content>
  </Sheet.Root>

  <aside class="inset-y fixed left-0 z-20 hidden h-full w-64 flex-col border-r bg-background md:flex">
    <div class="p-4 border-b flex items-center gap-3">
      <Button>
        <FilePlus2 class="w-full" />
      </Button>
      <ThemeSwitch class="ml-auto" />
    </div>
    <div class="flex-1 overflow-auto">
      <nav class="p-4 space-y-2">
        <Button variant="ghost" class="w-full justify-start">
          Пример
        </Button>
        <Button variant="ghost" class="w-full justify-start">
          Пример
        </Button>
      </nav>
    </div>
    <div class="border-t p-4">
      <Button variant="ghost" class="w-full justify-start">
        <SquareUser class="mr-2 size-4" />
        Аккаунт
      </Button>
    </div>
  </aside>

  <main class="ml-0 flex h-full w-full flex-col md:ml-64 bg-muted text-foreground">
    <div class="p-4 border-b bg-background text-center text-xl font-semibold tracking-tight">
      NoteForge
    </div>

    <div class="flex-1 overflow-auto p-6">
      <div class="mx-auto max-w-4xl rounded-2xl border bg-background p-6 shadow-md">
        <input
          type="text"
          bind:value={noteTitle}
          placeholder="Заголовок заметки..."
          class="mb-4 w-full border-none bg-transparent text-2xl font-bold text-foreground outline-none placeholder:text-muted-foreground"
        />

        <div class="mb-4 flex gap-2 border-b pb-2 text-muted-foreground">
          <button class="hover:text-foreground font-bold">B</button>
          <button class="hover:text-foreground italic">I</button>
          <button class="hover:text-foreground">H1</button>
          <button class="hover:text-foreground">•</button>
        </div>

        <Textarea
          bind:value={noteContent}
          class="h-[60vh] w-full resize-none border-none bg-transparent font-mono text-base text-foreground outline-none placeholder:text-muted-foreground"
          placeholder="Начните писать заметку..."
          rows={20}
        />
      </div>
    </div>
  </main>
</div>
