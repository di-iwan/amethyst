<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Menu } from 'lucide-svelte';
  import { Sheet, SheetTrigger, SheetContent } from '$lib/components/ui/sheet';
  import type { Folder, Note } from '$lib/types';
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
          name: 'Общие',
          elements: [{ id: 1, name: 'Заметка 1', isFolder: false }, { id: 2, name: 'Заметка 1', isFolder: false }],
          isFolder: true
        },
        {
          id: 3,
          name: 'Общие',
          elements: [{ id: 3, name: 'Заметка 1', isFolder: false }, { id: 4, name: 'Заметка 1', isFolder: false }],
          isFolder: true
        },
        { id: 5, name: 'Заметка 1', isFolder: false }, { id: 6, name: 'Заметка 1', isFolder: false }
      ],
      isFolder: true
    },
    { id: 7, name: 'Заметка 1', isFolder: false }, { id: 8, name: 'Заметка 1', isFolder: false },
    {
      id: 4,
      name: 'Общие',
      elements: [{ id: 1, name: 'Заметка 1', isFolder: false }, { id: 1, name: 'Заметка 1', isFolder: false }],
      isFolder: true
    },
  ]);

  setContext("editor:tree", tree)

  let activeFolder: Writable<Folder|null> = writable(null);
  let activeNote: Writable<Note|null> = writable(null);
  let tabs: Writable<Note[]> = writable([]);
  let activeTab: Writable<null> = writable(null);

  setContext("editor:data", {
    activeFolder,
    activeNote,
    activeTab,
    tabs
  })
</script>

<div class="grid md:grid-cols-[16rem_auto] h-dvh w-full overflow-hidden">
  <LeftMenu class="hidden md:flex" />
  <div class="flex relative h-full w-full flex-col justify-center items-center bg-muted text-foreground">
    <Sheet open={isSheetOpen} onOpenChange={v => isSheetOpen = v}>
      <SheetTrigger let:builder={builder} asChild>
        <Button builders={[builder]} class="fixed left-2 top-2 md:hidden" variant="ghost" size="icon">
          <Menu class="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="w-64 p-0">
        <LeftMenu />
      </SheetContent>
    </Sheet>
    <Editor />
  </div>
</div>
