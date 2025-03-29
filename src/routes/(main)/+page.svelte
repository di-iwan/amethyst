<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { Rocket, Sparkle, Sparkles, Star, Telescope } from "@lucide/svelte";
    import { ArrowRight } from 'lucide-svelte';
  
    const features = [
        {
            category: 'Marketing and Sales',
            title: 'Collect and enrich leads your way',
            details:
                'Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and, from there, automatically send them personalized emails.',
            tutorialLink: '#'
        },
        {
            category: 'Project Management',
            title: 'Streamline your workflows effortlessly',
            details:
                'Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.',
            tutorialLink: '#'
        },
        {
            category: 'Customer Support',
            title: 'Deliver seamless customer experiences',
            details:
                'Track and resolve customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.',
            tutorialLink: '#'
        },
        {
            category: 'Team Collaboration',
            title: 'Stay connected with your team',
            details:
                'Simplify communication and align team efforts with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.',
            tutorialLink: '#'
        },
        {
            category: 'Product Development',
            title: 'Accelerate innovation with ease',
            details:
                'Bring your product ideas to life by managing prototypes, feedback, and iterations in one place. Collaborate with your team to refine features and release with confidence.',
            tutorialLink: '#'
        }
    ];
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
            <Button class="uppercase" href="/register">
                Опробовать
            </Button>
            <Button class="uppercase" variant="outline" href="/#details">
                Подробнее
            </Button>
        </div>
    </article>
</div>
<div class="absolute w-full h-dvh top-0 left-0 -z-50 main-background">
    <svg class="w-full h-full">
        <circle cx="10%" cy="15%" r="1.5" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="25%" cy="80%" r="2" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="50%" cy="30%" r="1" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="75%" cy="60%" r="2.5" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="12.34%" cy="45.67%" r="1.23" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="34.21%" cy="78.93%" r="1.78" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="56.78%" cy="12.45%" r="0.92" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="5.89%" cy="67.34%" r="2.49" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="72.15%" cy="89.01%" r="1.67" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="19.82%" cy="34.56%" r="2.34" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="41.73%" cy="5.29%" r="1.05" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="27.61%" cy="91.25%" r="2.17" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="63.84%" cy="43.72%" r="1.89" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="8.97%" cy="16.83%" r="0.73" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="85.12%" cy="77.94%" r="2.42" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="49.35%" cy="28.67%" r="1.31" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="76.28%" cy="62.39%" r="0.85" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="15.43%" cy="83.76%" r="2.08" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="37.59%" cy="47.25%" r="1.54" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="68.91%" cy="19.82%" r="0.67" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="92.74%" cy="95.38%" r="2.27" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="24.86%" cy="59.41%" r="1.96" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="53.17%" cy="72.84%" r="0.79" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="7.52%" cy="88.93%" r="1.42" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="45.68%" cy="14.27%" r="0.63" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="79.31%" cy="53.89%" r="2.36" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="32.74%" cy="26.58%" r="1.17" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="61.85%" cy="81.72%" r="0.54" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="18.93%" cy="42.65%" r="2.03" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="87.46%" cy="68.19%" r="1.29" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="29.57%" cy="75.83%" r="0.71" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="64.82%" cy="37.24%" r="2.21" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="13.79%" cy="21.96%" r="1.88" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="52.43%" cy="89.47%" r="0.49" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="38.25%" cy="63.85%" r="1.35" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="71.68%" cy="12.78%" r="0.82" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="23.91%" cy="94.26%" r="2.44" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="57.34%" cy="55.67%" r="1.63" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="9.82%" cy="71.53%" r="2.31" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="46.75%" cy="38.92%" r="1.47" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="78.29%" cy="84.65%" r="0.61" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="35.62%" cy="17.84%" r="2.18" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="67.13%" cy="66.27%" r="1.79" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="94.86%" cy="82.39%" r="0.53" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="21.47%" cy="53.76%" r="2.06" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="59.38%" cy="24.89%" r="1.24" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="82.71%" cy="97.12%" r="0.68" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="17.84%" cy="32.45%" r="2.39" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="43.96%" cy="69.81%" r="1.52" fill="hsl(var(--foreground) / 0.5)"></circle>
        <circle cx="75.28%" cy="41.53%" r="0.87" fill="hsl(var(--foreground) / 0.5)"></circle>  
    </svg>
</div>
<section id="about" class="bg-gray py-12">
    <div class="container px-6">
        <div class="flex justify-center">
            <h2 id="about" class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-8">О сайте</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray p-6 rounded-lg shadow-lg shadow-foreground/30 border">
                <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">О проекте</h3>
                <p class="leading-7 [&:not(:first-child)]:mt-6">Этот веб-сайт — космическая кузница ваших идей. Здесь раскалённые мысли превращаются в ослепительные звёзды, отливаются в прочные формы и становятся опорой для будущих миров. Вы словно звездный кузнец, высекающий искры вдохновения, создающий новые галактики смыслов и направляющий их в бескрайний простор вселенной. Каждый замысел здесь — это метеор, стремительно несущийся сквозь пространство творчества, ожидающий своего часа, чтобы вспыхнуть ярким светом.</p>
                <ul class="mt-4 space-y-2">
                    <li class="grid grid-cols-[2rem_auto] items-center gap-2"><Telescope class="w-full" /> <p>Надёжные инструменты для ковки ваших идей.</p></li>
                    <li class="grid grid-cols-[2rem_auto] items-center gap-2"><Sparkles class="w-full" /> <p>Мгновенный доступ к созданным мыслям, словно к звёздам на орбите.</p></li>
                    <li class="grid grid-cols-[2rem_auto] items-center gap-2"><Rocket class="w-full" /> <p>Непрерывная эволюция кузницы, совершенствующей пространство вашего творчества.</p></li>
                </ul>
            </div>
            <div class="bg-gray p-6 rounded-lg shadow-lg shadow-foreground/30 border">
                <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Контакты</h3>
                <p class="leading-7 [&:not(:first-child)]:mt-6">Если у вас есть вопросы или предложения, свяжитесь с нами:</p>
                <p class="leading-7 [&:not(:first-child)]:mt-6"><a href="mailto:iwan.lelikov@gmail.com" class="text-primary underline underline-offset-4">iwan.lelikov@gmail.com</a></p>
                <blockquote class="mt-6 border-l-2 pl-6 italic">"Даже самая яркая звезда не сияет в одиночестве. Свяжитесь с нами — вместе мы создадим целую галактику идей."</blockquote>
                <Button class="mt-6" href="mailto:iwan.lelikov@gmail.com">Связаться</Button>
            </div>
        </div>
    </div>
</section>
<div class="container py-10">
    <h2 id="details" class="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
        Boost Your Strategy with Smart Features
    </h2>
    <div class="mt-8 md:mt-16 w-full mx-auto space-y-20">
        {#each features as feature, i}
            <div class="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 {i % 2 !== 0 ? 'md:flex-row-reverse' : ''}">
                <div class="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2"></div>
                    <div class="basis-1/2 shrink-0">
                    <span class="uppercase font-semibold text-sm text-muted-foreground">
                        {feature.category}
                    </span>
                    <h4 class="my-3 text-3xl font-semibold tracking-tight">
                        {feature.title}
                    </h4>
                    <p class="text-muted-foreground text-[17px]">
                        {feature.details}
                    </p>
                    <Button class="mt-6 gap-2" href="{feature.tutorialLink}">
                        Learn More <ArrowRight />
                    </Button>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    :global(html) {
        scroll-behavior: smooth;
        scroll-padding-top: 6rem;
    }
    .main-background {
        background: radial-gradient(circle at 90% 25% , black, grey, hsl(var(--background)) 25%, black 150%);
    }
</style>
