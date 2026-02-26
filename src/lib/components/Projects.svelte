<script lang="ts">
    import { onMount } from "svelte";
    import { projects } from "@/data";
    import {
        Card,
        CardHeader,
        CardTitle,
        CardDescription,
        CardContent,
        CardFooter,
    } from "./ui/card";
    import { Badge } from "./ui/badge";
    import { Button } from "./ui/button";
    import { Github, ArrowUpRight, Monitor, Code2 } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let projectSection: HTMLElement;
    let header: HTMLElement;
    let cardItems: HTMLElement[] = [];

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

        // Grid Staggered Reveal
        gsap.fromTo(
            cardItems,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: cardItems[0],
                    start: "top 80%",
                },
            },
        );

        // Individual Card Hover Effects
        cardItems.forEach((card) => {
            const visual = card.querySelector(".project-visual");
            const badge = card.querySelector(".project-badge");

            card.addEventListener("mouseenter", () => {
                gsap.to(visual, {
                    scale: 1.1,
                    duration: 1.2,
                    ease: "expo.out",
                });
                gsap.to(badge, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(visual, { scale: 1, duration: 1, ease: "expo.out" });
                gsap.to(badge, {
                    y: 10,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in",
                });
            });
        });
    });
</script>

<section
    id="projects"
    bind:this={projectSection}
    class="py-20 sm:py-32 relative overflow-hidden bg-muted/20"
>
    <div class="container relative z-10 px-6 sm:px-8">
        <div bind:this={header} class="space-y-4 mb-12 sm:mb-20 text-center">
            <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
                Featured Works
            </h2>
            <p
                class="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
            >
                A selection of high-performance products and engineering
                experiments.
            </p>
            <div class="mx-auto h-1.5 w-20 bg-primary rounded-full mt-6"></div>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
            {#each projects as project, i}
                {@const Icon = i % 2 === 0 ? Monitor : Code2}
                <div bind:this={cardItems[i]} class="group h-full">
                    <Card
                        class="flex flex-col h-full border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden bg-background group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:-translate-y-2"
                    >
                        <!-- Project Image / Visual -->
                        <div
                            class="relative aspect-video bg-muted/50 overflow-hidden border-b border-border/40"
                        >
                            {#if project.image}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    class="project-visual absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                                    loading="lazy"
                                />
                            {:else}
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                                ></div>
                                <div
                                    class="project-visual absolute inset-0 flex items-center justify-center text-primary/20 transition-transform duration-700"
                                >
                                    <Icon size={64} strokeWidth={1} />
                                </div>
                            {/if}

                            <div
                                class="project-badge absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-300"
                            >
                                <Badge
                                    class="bg-primary text-primary-foreground font-bold shadow-lg"
                                    >Live Project</Badge
                                >
                            </div>
                        </div>

                        <CardHeader class="pt-8 space-y-4">
                            <div class="flex items-center justify-between">
                                <CardTitle
                                    class="text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors"
                                >
                                    {project.title}
                                </CardTitle>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    class="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ArrowUpRight class="h-6 w-6" />
                                </a>
                            </div>
                            <CardDescription
                                class="text-base sm:text-lg leading-relaxed font-medium line-clamp-3"
                            >
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent class="flex-1">
                            <div class="flex flex-wrap gap-2">
                                {#each project.tags as tag}
                                    <Badge
                                        variant="outline"
                                        class="border-border/60 font-semibold group-hover:border-primary/20 transition-colors"
                                    >
                                        {tag}
                                    </Badge>
                                {/each}
                            </div>
                        </CardContent>

                        <CardFooter
                            class="pt-6 border-t border-border/40 gap-4"
                        >
                            <Button
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="ghost"
                                size="sm"
                                class="gap-2 text-muted-foreground hover:text-primary px-4"
                            >
                                <Github class="h-4 w-4" /> Code
                            </Button>
                            <Button
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="link"
                                size="sm"
                                class="gap-2 text-primary font-extrabold p-0 px-2 group/btn"
                            >
                                Demo
                                <ArrowUpRight
                                    class="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                                />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            {/each}
        </div>
    </div>
</section>
