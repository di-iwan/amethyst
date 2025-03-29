<script>
    import { ArrowUpRight, CirclePlay } from 'lucide-svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import Badge from '$lib/components/ui/badge/badge.svelte';
    import { Rocket, Sparkle, Sparkles, Star, Github } from "@lucide/svelte"
        const openGitHub = () => {
            window.open("https://github.com/di-iwan/amethyst", "_blank", "noopener,noreferrer");
    };
</script>

<div class="min-h-[calc(100dvh-7rem)] flex items-center justify-center">
    <div class="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
            <h1 class="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
                Леликов Иван Сергеевич
            </h1>
            <p class="mt-6 max-w-[60ch] text-lg">
                Этот проект создан для тех, кто хочет преобразовывать свои мысли в чёткие и структурированные идеи.
                Здесь каждая задумка, словно металл в кузнице, обретает форму, а хаотичные мысли выстраиваются в созвездия смысла.
                Сайт предоставляет удобные инструменты для записи, редактирования и организации идей, помогая вам создавать свою собственную вселенную знаний.
            </p>
            <p class="mt-6 max-w-[60ch] text-lg">
                Для данного проекта были использованы следующие framework: SvelteKit, Shadcn-svelte, TypeScript, JavaScript,
            </p>
            <div class="mt-12 flex items-center gap-4">
                <Button on:click={openGitHub} size="lg" class="grid grid-cols-[2rem_auto] items-center gap-4">
                    Github <Github class="w-full" />
                </Button>
            </div>
        </div>
        <div class="w-full bg-accent rounded-xl"><img src="/photo.jpg" alt="" class="w-full h-full object-cover rounded-xl"></div>
    </div>
</div>
<div class="fixed w-full min-h-dvh top-0 left-0 -z-50 main-background">
    <svg class="absolute w-full h-full">
        <circle cx="25%" cy="80%" r="2" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="50%" cy="30%" r="1" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="75%" cy="60%" r="2.5" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="88.56%" cy="23.12%" r="2.11" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="34.21%" cy="78.93%" r="1.78" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="56.78%" cy="12.45%" r="0.92" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="72.15%" cy="89.01%" r="1.67" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="41.73%" cy="5.29%" r="1.05" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="93.47%" cy="54.18%" r="0.58" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="27.61%" cy="91.25%" r="2.17" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="63.84%" cy="43.72%" r="1.89" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="85.12%" cy="77.94%" r="2.42" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="49.35%" cy="28.67%" r="1.31" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="76.28%" cy="62.39%" r="0.85" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="15.43%" cy="83.76%" r="2.08" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="37.59%" cy="47.25%" r="1.54" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="68.91%" cy="19.82%" r="0.67" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="92.74%" cy="95.38%" r="2.27" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="24.86%" cy="59.41%" r="1.96" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="53.17%" cy="72.84%" r="0.79" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="81.29%" cy="35.67%" r="2.15" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="7.52%" cy="88.93%" r="1.42" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="45.68%" cy="14.27%" r="0.63" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="79.31%" cy="53.89%" r="2.36" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="32.74%" cy="26.58%" r="1.17" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="61.85%" cy="81.72%" r="0.54" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="87.46%" cy="68.19%" r="1.29" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="29.57%" cy="75.83%" r="0.71" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="64.82%" cy="37.24%" r="2.21" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="52.43%" cy="89.47%" r="0.49" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="96.18%" cy="46.72%" r="2.09" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="38.25%" cy="63.85%" r="1.35" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="71.68%" cy="12.78%" r="0.82" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="23.91%" cy="94.26%" r="2.44" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="57.34%" cy="55.67%" r="1.63" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="84.17%" cy="29.41%" r="0.76" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="46.75%" cy="38.92%" r="1.47" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="78.29%" cy="84.65%" r="0.61" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="35.62%" cy="17.84%" r="2.18" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="67.13%" cy="66.27%" r="1.79" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="94.86%" cy="82.39%" r="0.53" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="21.47%" cy="53.76%" r="2.06" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="59.38%" cy="24.89%" r="1.24" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="82.71%" cy="97.12%" r="0.68" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="43.96%" cy="69.81%" r="1.52" fill="hsl(var(--foreground) / 0.5)"/>
        <circle cx="75.28%" cy="41.53%" r="0.87" fill="hsl(var(--foreground) / 0.5)"/>
    </svg>
</div>

<style>
    .main-background {
        background: radial-gradient(circle at 10% 25% , black, grey, hsl(var(--background)) 15%, black 150%);
    }
</style>