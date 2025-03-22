<script>
	import Button from "../ui/button/button.svelte";
	import NavMenu from "./nav-menu.svelte";
	import NavigationSheet from "./navigation-sheet.svelte";
    import Logo from "../images/logo.svelte";
	import ThemeSwitch from "./theme-switch.svelte";
</script>

<header class="sticky my-6 top-6 min h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
    <nav class="h-full flex items-center justify-between mx-auto px-4">
        <Logo class="h-2/3 dark:fill-white" />
        <NavMenu class="max-md:hidden" />
        <div class="flex items-center gap-3">
            <Button class="rounded-full">
                Вход
            </Button>
            <ThemeSwitch class="rounded-full max-md:hidden" />
            <div class="md:hidden">
                <NavigationSheet />
            </div>
        </div>
    </nav>
</header>
