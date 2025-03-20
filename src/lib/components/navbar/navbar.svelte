<script>
	import Button from "../ui/button/button.svelte";
	import NavMenu from "./nav-menu.svelte";
	import NavigationSheet from "./navigation-sheet.svelte";
</script>

<header class="sticky my-6 top-6 min h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
    <nav class="h-full flex items-center justify-between mx-auto px-4">
        <NavMenu class="hidden md:block" />
        <div class="flex items-center gap-3">
            <Button class="rounded-full">
                Вход
            </Button>
            <div class="md:hidden">
                <NavigationSheet />
            </div>
        </div>
    </nav>
</header>
