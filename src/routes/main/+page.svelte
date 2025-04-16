<script lang="ts">
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { Triangle, SquareUser, Menu } from 'lucide-svelte';
  import ThemeSwitch from '$lib/components/navbar/theme-switch.svelte';
  import * as Sheet from '$lib/components/ui/sheet';
  import { FilePlus2 } from 'lucide-svelte';

  let isSheetOpen = false;
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
              Пример №2
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
          Пример №2
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

  <main class="ml-0 flex h-full w-full flex-col md:ml-64">
    <div class="mx-auto p-4 border-b bg-background">
      NoteForge
    </div>

    <div class="flex-1 p-4">
      <Textarea
        class="w-full h-full shadow-lg shadow-foreground/30 border resize-none text-base font-mono bg-background"
        rows={30}
      />
    </div>
  </main>
</div>
