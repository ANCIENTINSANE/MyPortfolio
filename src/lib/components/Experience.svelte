<script lang="ts">
    import { onMount } from "svelte";
    import { experience } from "@/data";
    import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
    import { Badge } from "./ui/badge";
    import { Building2, CheckCircle2 } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let experienceSection: HTMLElement;
    let header: HTMLElement;
    let experienceItems: HTMLElement[] = [];

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Header Reveal
        gsap.fromTo(
            header,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                },
            },
        );

        // Staggered Items Reveal
        gsap.fromTo(
            experienceItems,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: experienceItems[0],
                    start: "top 80%",
                },
            },
        );

        // Magnetic Tilt Hover
        experienceItems.forEach((card) => {
            card.addEventListener("mousemove", (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(card, {
                    x: x * 0.05,
                    y: y * 0.05,
                    rotationX: -y * 0.02,
                    rotationY: x * 0.02,
                    duration: 0.6,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        });
    });
</script>

<section
    id="experience"
    bind:this={experienceSection}
    class="py-32 relative overflow-hidden"
>
    <div class="container relative z-10">
        <div bind:this={header} class="space-y-4 mb-20 text-left">
            <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
                Professional Journey
            </h2>
            <p class="text-xl text-muted-foreground font-medium max-w-2xl">
                Building scalable systems and leading technical initiatives
                across diverse industries.
            </p>
            <div class="h-1.5 w-20 bg-primary rounded-full mt-6"></div>
        </div>

        <div class="relative space-y-12">
            {#each experience as item, i}
                <div bind:this={experienceItems[i]}>
                    <Card
                        class="group relative overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-500 bg-background/50 backdrop-blur-sm"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        ></div>

                        <CardHeader
                            class="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8"
                        >
                            <div class="space-y-4">
                                <div class="flex flex-wrap items-center gap-3">
                                    <Badge
                                        variant="outline"
                                        class="px-4 py-1 border-primary/20 text-primary bg-primary/5 font-bold"
                                    >
                                        {item.duration}
                                    </Badge>
                                    <div
                                        class="flex items-center gap-2 text-muted-foreground text-sm font-semibold uppercase tracking-wider"
                                    >
                                        <Building2 class="h-4 w-4" />
                                        {item.company}
                                    </div>
                                </div>
                                <CardTitle
                                    class="text-3xl font-extrabold tracking-tight group-hover:text-primary transition-colors"
                                >
                                    {item.role}
                                </CardTitle>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <ul
                                class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
                            >
                                {#each item.impact as bullet}
                                    <li class="flex items-start gap-4">
                                        <div
                                            class="mt-1.5 p-1 rounded-full bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-110"
                                        >
                                            <CheckCircle2 class="h-3.5 w-3.5" />
                                        </div>
                                        <span
                                            class="text-[1.05rem] text-muted-foreground font-medium leading-relaxed"
                                        >
                                            {bullet}
                                        </span>
                                    </li>
                                {/each}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            {/each}
        </div>
    </div>
</section>
