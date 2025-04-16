<script lang="ts">
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { Triangle, Mic, Paperclip, Send, SquareUser, Menu } from 'lucide-svelte';
  import ThemeSwitch from '$lib/components/navbar/theme-switch.svelte';
  import * as Sheet from '$lib/components/ui/sheet';

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
        <div class="p-4 border-b">
          <Button class="w-full justify-start">
            <Triangle class="mr-2 size-4" />
            Новый чат
          </Button>
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
          <ThemeSwitch class="ml-auto" />
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
    <div class="p-4 border-b">
      <Button class="w-full justify-start">
        <Triangle class="mr-2 size-4" />
        Новый чат
      </Button>
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
      <ThemeSwitch class="ml-auto" />
    </div>
    <div class="border-t p-4">
      <Button variant="ghost" class="w-full justify-start">
        <SquareUser class="mr-2 size-4" />
        Аккаунт
      </Button>
    </div>
  </aside>

  <main class="ml-0 flex h-full w-full flex-col md:ml-64">
    <div class="flex-1 overflow-auto space-y-4 p-4">
    </div>

    <form
      on:submit|preventDefault
      class="flex w-full gap-2 border-t bg-background p-4"
    >
      <Button variant="ghost" size="icon">
        <Mic class="size-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Paperclip class="size-4" />
      </Button>
      <Textarea
        class="flex-1 resize-none"
        placeholder="Введите сообщение"
        rows={1}
      />
      <Button type="submit" size="icon">
        <Send class="size-4" />
      </Button>
    </form>
  </main>
</div>
