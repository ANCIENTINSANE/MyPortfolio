<script lang="ts">
    import { onMount } from "svelte";
    import { skills } from "@/data";
    import { Badge } from "./ui/badge";
    import {
        Monitor,
        Server,
        Smartphone as SmartphoneIcon,
        Database,
        Settings,
        Zap,
        Component,
        Wind,
        Palette,
        MonitorSmartphone,
        UserCheck,
        Terminal,
        Globe,
        Network,
        ShieldCheck,
        Layers,
        Table,
        Cloud,
        Box,
        GitMerge,
        Play,
        Rocket,
        Waves,
        Search,
        TrendingUp,
        Brain,
        Lightbulb,
        Ship,
        Activity,
        Gauge,
    } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let skillsSection: HTMLElement;
    let header: HTMLElement;
    let categoryCards: HTMLElement[] = [];

    const skillCategories = [
        { name: "Frontend", key: "frontend", Icon: Monitor },
        { name: "Backend", key: "backend", Icon: Server },
        { name: "Mobile", key: "mobile", Icon: SmartphoneIcon },
        { name: "Database", key: "database", Icon: Database },
        { name: "Cloud & DevOps", key: "infrastructure", Icon: Settings },
        { name: "Product & Strategy", key: "strategy", Icon: Lightbulb },
    ];

    // Icon mapping for individual skills
    const iconMap: Record<string, any> = {
        Zap,
        Component,
        Wind,
        Palette,
        MonitorSmartphone,
        UserCheck,
        Terminal,
        Globe,
        Network,
        ShieldCheck,
        Smartphone: SmartphoneIcon,
        Layers,
        Database,
        Table,
        Cloud,
        Box,
        GitMerge,
        Play,
        Rocket,
        Waves,
        Search,
        TrendingUp,
        Brain,
        Ship,
        Activity,
        Gauge,
    };

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

        // Staggered Category Reveal
        gsap.fromTo(
            categoryCards,
            { scale: 0.95, opacity: 0, y: 30 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: categoryCards[0],
                    start: "top 80%",
                },
            },
        );

        // Refined Magnetic Tilt Hover for category cards (Subtle & Smooth)
        categoryCards.forEach((card) => {
            if (!card) return;
            card.addEventListener("mousemove", (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(card, {
                    x: x * 0.04,
                    y: y * 0.04,
                    rotationX: -y * 0.015,
                    rotationY: x * 0.015,
                    duration: 0.6,
                    ease: "power3.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.4)",
                });
            });
        });
    });
</script>

<section
    id="skills"
    bind:this={skillsSection}
    class="py-20 sm:py-32 relative overflow-hidden bg-background"
>
    <!-- Background Decor -->
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"
    ></div>

    <div class="container relative z-10 px-6 sm:px-8">
        <div bind:this={header} class="space-y-4 mb-12 sm:mb-20 text-center">
            <h2
                class="text-3xl font-black tracking-tighter sm:text-6xl uppercase"
            >
                Technical <span class="text-primary">Arsenal</span>
            </h2>
            <p
                class="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
            >
                Engineering high-performance systems with a curated selection of
                modern tools and industrial-grade frameworks.
            </p>
            <div
                class="mx-auto h-[3px] w-24 bg-primary/40 rounded-full mt-8"
            ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each skillCategories as category, i}
                <div
                    bind:this={categoryCards[i]}
                    class="group relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 h-full overflow-hidden"
                >
                    <!-- Gloss effect -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    ></div>

                    <div class="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                        <div
                            class="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner"
                        >
                            <svelte:component
                                this={category.Icon}
                                size={24}
                                strokeWidth={2.5}
                            />
                        </div>
                        <h3
                            class="text-xl sm:text-2xl font-black tracking-tight uppercase"
                        >
                            {category.name}
                        </h3>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        {#each (skills as any)[category.key] as skill}
                            {@const SkillIcon = iconMap[skill.icon] || Zap}
                            <Badge
                                variant="outline"
                                class="flex items-center gap-2 text-[0.8rem] sm:text-[0.9rem] px-3 py-1.5 sm:px-4 sm:py-2 border-border/50 font-bold bg-background/50 group-hover:border-primary/30 transition-all hover:bg-primary/5 hover:text-primary hover:scale-105"
                            >
                                <SkillIcon size={14} strokeWidth={3} />
                                {skill.name}
                            </Badge>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    /* Premium noise texture */
    section::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3");
        opacity: 0.02;
        pointer-events: none;
        z-index: 1;
    }
</style>
