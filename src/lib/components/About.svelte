<script lang="ts">
    import { onMount } from "svelte";
    import { aboutContent } from "@/data.js";
    import {
        Card,
        CardHeader,
        CardTitle,
        CardContent,
    } from "./ui/card/index.js";
    import { Lightbulb, Code2, Rocket, ArrowUpRight } from "lucide-svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    let aboutSection: HTMLElement;
    let title: HTMLElement;
    let narrativeParagraphs: HTMLElement[] = [];
    let contactLink: HTMLElement;
    let skillCards: HTMLElement[] = [];
    const icons = [Lightbulb, Code2, Rocket];

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title Reveal
        gsap.fromTo(
            title,
            { x: -30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 85%",
                },
            },
        );

        // Narrative Reveal
        gsap.fromTo(
            narrativeParagraphs,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: narrativeParagraphs[0],
                    start: "top 85%",
                },
            },
        );

        // Skill Cards Staggered Reveal
        gsap.fromTo(
            skillCards,
            { x: 30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: skillCards[0],
                    start: "top 80%",
                },
            },
        );

        // Contact Link Reveal
        gsap.fromTo(
            contactLink,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: contactLink,
                    start: "top 90%",
                },
            },
        );

        // Hover Effect: Magnetic-like subtle tilt for cards
        skillCards.forEach((card) => {
            card.addEventListener("mousemove", (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(card, {
                    x: x * 0.1,
                    y: y * 0.1,
                    rotationX: -y * 0.05,
                    rotationY: x * 0.05,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        });
    });
</script>

<section
    id="about"
    bind:this={aboutSection}
    class="py-32 relative overflow-hidden"
>
    <div class="container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <!-- Narrative Column -->
            <div class="space-y-12">
                <div bind:this={title} class="space-y-6">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
                        {aboutContent.title}
                    </h2>
                    <div class="h-1.5 w-20 bg-primary rounded-full"></div>
                </div>

                <div class="space-y-8">
                    {#each aboutContent.narrative as paragraph, i}
                        <p
                            bind:this={narrativeParagraphs[i]}
                            class="text-xl text-muted-foreground leading-relaxed font-medium"
                        >
                            {paragraph}
                        </p>
                    {/each}
                </div>

                <div bind:this={contactLink} class="pt-4">
                    <a
                        href="#contact"
                        class="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        Let's talk about your next project
                        <ArrowUpRight class="h-5 w-5" />
                    </a>
                </div>
            </div>

            <!-- Expertise Cards Column -->
            <div class="grid grid-cols-1 gap-6">
                {#each aboutContent.expertise as skill, i}
                    <div bind:this={skillCards[i]}>
                        <Card
                            class="group hover:border-primary/30 transition-all duration-300"
                        >
                            <CardHeader
                                class="flex flex-row items-center gap-4 space-y-0"
                            >
                                <div
                                    class="p-3 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                >
                                    <svelte:component
                                        this={icons[i]}
                                        class="h-6 w-6"
                                    />
                                </div>
                                <CardTitle
                                    class="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors"
                                >
                                    {skill.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p
                                    class="text-muted-foreground text-lg leading-relaxed"
                                >
                                    {skill.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
