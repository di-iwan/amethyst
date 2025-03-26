<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <article>
        <h1 class="text-center scroll-m-20 text-5xl font-extrabold tracking-tight md:text-8xl">
            NoteForge
        </h1>
        <Separator class="mt-5 bg-foreground/60" />
        <p class="text-center text-3xl text-foreground/70 dark:text-muted-foreground px-3">
            <b class="text-foreground/65 dark:text-foreground/80">кузница заметок</b> - это место, где идеи обретают форму
        </p>
        <div class="mt-5 grid grid-cols-2 px-9 justify-center gap-5">
            <Button class="uppercase">
                Опробовать
            </Button>
            <Button class="uppercase" variant="outline">
                Подробнее 
            </Button>
        </div>
    </article>
</div>
<div class="absolute w-full h-dvh top-0 left-0 -z-50 main-background"></div>

<style>
    .main-background {
        background: radial-gradient(circle at 90% 25% , black, grey, hsl(var(--background)) 25%, black 150%);
    }
</style>
