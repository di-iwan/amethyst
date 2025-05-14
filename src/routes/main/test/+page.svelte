<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Menu } from 'lucide-svelte';
  import { Sheet, SheetTrigger, SheetContent } from '$lib/components/ui/sheet';
  import type { Folder, Note, Tab } from '$lib/types';
	import LeftMenu from '$lib/components/LeftMenu.svelte';
	import { onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import Editor from '$lib/components/Editor.svelte';

  let isSheetOpen = false;

  function handleResize() {
    let width = window.innerWidth;

    if (width > 768) isSheetOpen = false
  }

  onMount(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  let tree: Writable<(Note|Folder)[]> = writable([
    {
      id: 1,
      name: 'Общие',
      elements: [
        {
          id: 2,
          name: 'ПГУТИ',
          elements: [{ id: 1, name: '3 курс', isFolder: false }, { id: 2, name: '4 курс', isFolder: false }],
          isFolder: true
        },
        {
          id: 3,
          name: 'Работа',
          elements: [{ id: 3, name: 'Проект', isFolder: false }, { id: 4, name: 'Реализация', isFolder: false }],
          isFolder: true
        },
        { id: 5, name: 'Саморазвитие', isFolder: false }, { id: 6, name: 'Заметка', isFolder: false }
      ],
      isFolder: true
    },
    { id: 7, name: 'Заметка 1', isFolder: false }, { id: 8, name: 'Заметка 2', isFolder: false },
        {
      id: 1,
      name: 'Дом',
      elements: [
        {
          id: 2,
          name: 'ПГУТИ',
          elements: [{ id: 1, name: '3 курс', isFolder: false }, { id: 2, name: '4 курс', isFolder: false }],
          isFolder: true
        },
        {
          id: 3,
          name: 'Работа',
          elements: [{ id: 3, name: 'Проект', isFolder: false }, { id: 4, name: 'Реализация', isFolder: false }],
          isFolder: true
        },
        { id: 5, name: 'Саморазвитие', isFolder: false }, { id: 6, name: 'Заметка', isFolder: false }
      ],
      isFolder: true
    },
  ]);

  setContext("editor:tree", tree)

  let activeFolder: Writable<Folder|null> = writable(null);
  let activeElement: Writable<Folder|Note|null> = writable(null);
  let tabs: Writable<Tab[]> = writable([]);
  let activeTab: Writable<null> = writable(null);

  setContext("editor:data", {
    activeFolder,
    activeElement,
    activeTab,
    tabs
  })
</script>

<div class="grid sm:grid-cols-[16rem_auto] h-dvh w-full overflow-hidden">
  <LeftMenu class="hidden sm:flex" />
  <div class="flex relative h-full w-full flex-col justify-center items-center bg-muted text-foreground p-4 sm:p-6 max-sm:pt-16">
    <div class="fixed flex left-0 top-0 sm:hidden z-10 w-full items-center bg-background py-1 px-2">
      <Sheet open={isSheetOpen} onOpenChange={v => isSheetOpen = v}>
        <SheetTrigger let:builder={builder} asChild>
          <Button builders={[builder]} variant="ghost" size="icon">
            <Menu class="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" class="w-64 p-0">
          <LeftMenu inSheet />
        </SheetContent>
      </Sheet>
      <span class="w-full text-center text-xl font-semibold">
        NoteForge
      </span>
      <div class="size-10"></div>
    </div>
    <Editor />
  </div>
</div>
