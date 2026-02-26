<script lang="ts">
    import { onMount } from "svelte";
    import { Button } from "./ui/button";
    import { heroContent, siteConfig } from "@/data";
    import { cn, scrollToSection } from "@/utils";
    import { ArrowRight, ChevronRight } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let heroSection: HTMLElement;
    let badge: HTMLElement;
    let title: HTMLElement;
    let subtitle: HTMLElement;
    let actions: HTMLElement;
    let bgCircle1: HTMLElement;
    let bgCircle2: HTMLElement;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            defaults: { ease: "expo.out", duration: 1.5 },
        });

        // Entrance Animation
        tl.fromTo(
            bgCircle1,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
            },
        )
            .fromTo(
                bgCircle2,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 2.5,
                    ease: "elastic.out(1, 0.5)",
                },
                "-=2",
            )
            .fromTo(badge, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.8")
            .fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.5")
            .fromTo(
                subtitle,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=1.3",
            )
            .fromTo(
                actions,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=1.1",
            );

        // Parallax & Liquid Scroll Effects
        gsap.to(bgCircle1, {
            y: 200,
            x: 100,
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        gsap.to(bgCircle2, {
            y: -150,
            x: -50,
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 2,
            },
        });

        // Zoom-Up & Liquid Scroll Effects
        // Wait for entrance animation to finish before allowing ScrollTrigger to affect state
        tl.add(() => {
            gsap.fromTo(
                [title, subtitle, badge, actions],
                { y: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
                {
                    y: -150,
                    scale: 1.3,
                    opacity: 0,
                    filter: "blur(20px)",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: heroSection,
                        start: "top+=50 top",
                        end: "bottom 10%",
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                    },
                },
            );
        }, "-=0.5");
    });
</script>

<section
    bind:this={heroSection}
    class="relative flex min-h-screen items-center justify-center overflow-hidden py-32 text-center"
>
    <!-- Premium Mesh Background -->
    <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
            bind:this={bgCircle1}
            class="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5 dark:blur-[150px]"
        ></div>
        <div
            bind:this={bgCircle2}
            class="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-600/5 dark:blur-[120px]"
        ></div>
        <div
            class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2] dark:opacity-[0.05]"
        ></div>
    </div>

    <div class="container relative z-10 flex flex-col items-center">
        <div
            bind:this={badge}
            class="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md px-6 py-2.5 text-sm font-bold text-primary mb-12 shadow-sm"
        >
            <span
                class="mr-3 flex h-2 w-2 rounded-full bg-primary animate-pulse"
            ></span>
            Founder • Systems Engineer • SaaS Architect
        </div>

        <h1
            bind:this={title}
            class="max-w-5xl text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-[1.1]"
        >
            <span
                class="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent inline-block pb-2"
            >
                {heroContent.title}
            </span>
        </h1>

        <p
            bind:this={subtitle}
            class="max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed mb-14 font-medium opacity-90"
        >
            {heroContent.subtitle}
        </p>

        <div
            bind:this={actions}
            class="flex flex-col gap-6 sm:flex-row items-center"
        >
            {#each heroContent.cta as item}
                <Button
                    href={item.href}
                    onclick={(e) => scrollToSection(e, item.href)}
                    variant={item.variant as "default" | "outline"}
                    size="lg"
                    class="group relative gap-3 px-8 rounded-xl h-12 font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98]"
                >
                    {item.name}
                    {#if item.variant === "default"}
                        <ArrowRight
                            class="h-5 w-5 transition-transform group-hover:translate-x-1"
                        />
                    {:else}
                        <ChevronRight
                            class="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
                        />
                    {/if}
                </Button>
            {/each}
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div
        class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30"
    >
        <div
            class="h-10 w-6 rounded-full border-2 border-foreground flex justify-center pt-2"
        >
            <div class="h-2 w-1 rounded-full bg-foreground"></div>
        </div>
    </div>
</section>
