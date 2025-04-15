<script lang="ts">
    import { Textarea } from '$lib/components/ui/textarea';
    import { Button } from '$lib/components/ui/button';
    import { Triangle, Mic, Paperclip, Send, SquareUser } from 'lucide-svelte';
	import ThemeSwitch from '$lib/components/navbar/theme-switch.svelte';
  </script>
  
  <div class="flex h-screen">
    <aside class="inset-y fixed left-0 z-20 flex h-full w-64 flex-col border-r bg-background">
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
        <Button variant="ghost" class="w-full justify-start">
          <SquareUser class="mr-2 size-4" />
          Аккаунт
        </Button>
      </div>
    </aside>
  
    <main class="ml-64 flex h-full w-full flex-col">
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
  