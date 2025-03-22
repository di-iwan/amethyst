<script lang="ts">
	import { cn } from "$lib/utils";

    export let vertical: boolean = false;
    let className: string = "";
    export { className as class }
</script>

<ul
    class={cn(
        "flex gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
        className
    )}
    data-orientation={vertical ? "vertical" : ""}    
>
    <li>
        <a href="/">
            Главная
        </a>
    </li>
    <li>
        <a href="/">
            О сайте
        </a>
    </li>
    <li>
        <a href="/">
            Pазроботка
        </a>
    </li>
</ul>