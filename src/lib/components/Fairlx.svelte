<script lang="ts">
    import { onMount } from "svelte";
    import { Button } from "./ui/button";
    import { Card } from "./ui/card";
    import { Badge } from "./ui/badge";
    import { fairlxContent } from "@/data";
    import { cn, scrollToSection } from "@/utils";
    import {
        ExternalLink,
        Sparkles,
        Shield,
        Zap,
        Globe,
        Layout,
        MousePointer2,
        X,
        Maximize2,
    } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { fade, scale } from "svelte/transition";

    let fairlxSection: HTMLElement;
    let header: HTMLElement;
    let preview: HTMLElement;
    let featureItems: HTMLElement[] = [];
    let footerActions: HTMLElement;
    let isModalOpen = $state(false);
    let currentTheme = $state("light");

    // Derived iframe URL based on current theme
    const iframeSrc = $derived(`https://fairlx.com?theme=${currentTheme}`);

    // Icon mapping
    const iconMap: Record<string, any> = {
        Sparkles,
        Shield,
        Zap,
        Layout,
        MousePointer2,
        Globe,
    };

    const toggleModal = () => {
        isModalOpen = !isModalOpen;
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initial theme detection
        currentTheme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";

        // Listen for theme changes on root element
        const observer = new MutationObserver(() => {
            currentTheme = document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Header Reveal
        gsap.fromTo(
            header,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 90%",
                },
            },
        );

        // Preview Floating & Reveal
        gsap.fromTo(
            preview,
            { scale: 0.95, opacity: 0, y: 30 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: preview,
                    start: "top 80%",
                },
            },
        );

        gsap.to(preview, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Staggered Features
        gsap.fromTo(
            featureItems,
            { x: 30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: featureItems[0],
                    start: "top 80%",
                },
            },
        );

        // Final CTA
        gsap.fromTo(
            footerActions,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: footerActions,
                    start: "top 90%",
                },
            },
        );
    });
</script>

<section
    id="fairlx"
    bind:this={fairlxSection}
    class="py-24 relative overflow-hidden bg-background transition-colors duration-500"
>
    <!-- Liquid Background Gradient -->
    <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary),0.15),transparent)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary),0.1),transparent)] opacity-70"
    ></div>

    <div class="container relative z-10">
        <div
            bind:this={header}
            class="flex flex-col items-center text-center mb-16"
        >
            <Badge
                variant="outline"
                class="mb-8 border-primary/30 text-primary bg-primary/10 px-6 py-2 backdrop-blur-md shadow-sm rounded-full font-bold tracking-wide"
            >
                {fairlxContent.badge}
            </Badge>
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
                {fairlxContent.title}<span class="text-primary">.</span>
            </h2>
            <p
                class="text-lg text-muted-foreground max-w-xl font-medium leading-relaxed"
            >
                {fairlxContent.subtitle}
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <button
                bind:this={preview}
                class="relative group w-full text-left"
                onclick={toggleModal}
            >
                <!-- Glowing Ambient Light -->
                <div
                    class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-3xl opacity-20 dark:opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"
                ></div>

                <Card
                    class="relative bg-card/80 backdrop-blur-sm border-border/40 rounded-2xl overflow-hidden aspect-video p-0 shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:border-primary/20 cursor-pointer"
                >
                    <div class="absolute inset-0 w-full h-full overflow-hidden">
                        <iframe
                            src={iframeSrc}
                            title="Fairlx Platform"
                            class="border-none bg-slate-900 pointer-events-none"
                            style="width: 250%; height: 250%; transform: scale(0.4); transform-origin: 0 0;"
                            loading="lazy"
                        ></iframe>
                    </div>

                    <!-- Hover Overlay Hint -->
                    <div
                        class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
                    >
                        <div
                            class="bg-background/80 border border-border/50 p-4 rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-3"
                        >
                            <Maximize2 class="h-5 w-5 text-primary" />
                            <span class="font-bold text-sm tracking-tight"
                                >Click to Expand Preview</span
                            >
                        </div>
                    </div>

                    <!-- Premium Glass Overlay (Non-blocking) -->
                    <div
                        class="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 dark:ring-white/5 rounded-2xl"
                    ></div>
                </Card>
            </button>

            <!-- Features / Value Prop -->
            <div class="space-y-6">
                <div class="grid grid-cols-1 gap-6">
                    {#each fairlxContent.features as feature, i}
                        {@const Icon = iconMap[feature.iconName] || Sparkles}
                        <div
                            bind:this={featureItems[i]}
                            class="group/item flex gap-6 p-6 rounded-2xl bg-card/30 hover:bg-card/90 border border-border/40 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <div
                                class="p-3.5 rounded-[1.25rem] bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-500 h-fit shadow-inner"
                            >
                                <Icon class="h-5 w-5" />
                            </div>
                            <div class="space-y-2">
                                <h3
                                    class="text-xl font-bold tracking-tight group-hover/item:text-primary transition-colors"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    class="text-base text-muted-foreground leading-relaxed font-medium"
                                >
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>

                <div
                    bind:this={footerActions}
                    class="pt-8 flex flex-wrap gap-6"
                >
                    <Button
                        href={fairlxContent.links.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        class="rounded-xl h-12 px-10 text-base font-medium shadow-xl shadow-primary/10 gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
                    >
                        Visit Fairlx
                        <ExternalLink class="h-5 w-5" />
                    </Button>
                    <Button
                        href={fairlxContent.links.caseStudy}
                        onclick={(e) =>
                            scrollToSection(e, fairlxContent.links.caseStudy)}
                        variant="outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        class="rounded-xl h-12 px-10 text-base font-medium border-border/60 hover:border-primary/30 hover:bg-primary/5 transition-all active:scale-[0.98]"
                    >
                        Read Case Study
                    </Button>
                </div>
            </div>
        </div>
    </div>
</section>

{#if isModalOpen}
    <!-- Modal Overlay -->
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
        transition:fade={{ duration: 300 }}
    >
        <!-- Backdrop -->
        <button
            class="absolute inset-0 bg-background/80 backdrop-blur-xl cursor-default w-full h-full"
            onclick={toggleModal}
            aria-label="Close modal"
        ></button>

        <!-- Modal Container -->
        <div
            class="relative w-full max-w-7xl h-full max-h-[90vh] bg-card border border-border/50 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            transition:scale={{ duration: 400, start: 0.95, opacity: 0 }}
        >
            <!-- Modal Header -->
            <div
                class="flex items-center justify-between px-8 py-4 border-b border-border/40 bg-card/50 backdrop-blur-md sticky top-0 z-20"
            >
                <div class="flex items-center gap-4">
                    <div class="p-2.5 rounded-xl bg-primary/10 text-primary">
                        <Globe class="h-5 w-5" />
                    </div>
                    <div>
                        <h3
                            class="font-bold text-lg tracking-tight leading-none"
                        >
                            Fairlx Platform Preview
                        </h3>
                        <p class="text-xs text-muted-foreground mt-1">
                            Live system environment • Preview Only
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <Button
                        href={fairlxContent.links.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="default"
                        size="sm"
                        class="hidden sm:flex rounded-xl gap-2 h-10 px-6 font-medium shadow-lg shadow-primary/20"
                    >
                        Visit Live Site
                        <ExternalLink class="h-4 w-4" />
                    </Button>
                    <button
                        onclick={toggleModal}
                        class="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground border border-transparent hover:border-border/40"
                    >
                        <X class="h-6 w-6" />
                    </button>
                </div>
            </div>

            <!-- Modal Content (Iframe) -->
            <div class="flex-1 relative bg-slate-900 group/modal">
                <iframe
                    src={iframeSrc}
                    title="Fairlx Live Preview"
                    class="w-full h-full border-none"
                    loading="lazy"
                ></iframe>

                <!-- Bottom Action Bar (Mobile only or extra utility) -->
                <div
                    class="sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-xs"
                >
                    <Button
                        href={fairlxContent.links.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="default"
                        size="lg"
                        class="w-full rounded-2xl gap-2 h-14 font-bold shadow-2xl shadow-primary/30"
                    >
                        Launch Platform
                        <ExternalLink class="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
{/if}
