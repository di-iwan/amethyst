<script>
	import { Menu } from "@lucide/svelte";
	import Button from "../ui/button/button.svelte";
	import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
	import NavMenu from "./nav-menu.svelte";
</script>

<Sheet>
    <SheetTrigger asChild let:builder>
        <Button builders={[builder]} variant="outline" size="icon" class="rounded-full">
            <Menu />
        </Button>
    </SheetTrigger>
    <SheetContent>
        <NavMenu vertical />
    </SheetContent>
</Sheet>