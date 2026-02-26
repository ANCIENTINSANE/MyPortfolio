<script lang="ts">
    import { Button } from "./ui/button";
    import ThemeToggle from "./ThemeToggle.svelte";
    import { siteConfig, navItems } from "$lib/data";
    import { cn, scrollToSection } from "@/utils";
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let { class: className = "" } = $props();
    let scrolled = $state(false);
    let navElement: HTMLElement;
    let navLinks: HTMLElement[] = [];

    onMount(() => {
        // Entrance Animation
        gsap.fromTo(
            navElement,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.5 },
        );

        // Magnetic Effect
        navLinks.forEach((link) => {
            link.addEventListener("mousemove", (e: MouseEvent) => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(link, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });

            link.addEventListener("mouseleave", () => {
                gsap.to(link, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        });

        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<header
    bind:this={navElement}
    class={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
            ? "py-3 bg-background/70 backdrop-blur-xl border-border/40 shadow-sm"
            : "py-5 bg-transparent border-transparent",
        className,
    )}
>
    <div class="container flex items-center justify-between">
        <div class="flex items-center gap-2">
            <a
                href="/"
                class="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
                {siteConfig.name.split(" ")[0]}<span class="text-primary"
                    >.</span
                >
            </a>
        </div>

        <nav class="hidden md:flex items-center gap-8">
            {#each navItems as item, i}
                <a
                    bind:this={navLinks[i]}
                    href={item.href}
                    onclick={(e) => scrollToSection(e, item.href)}
                    class="text-sm font-medium text-muted-foreground transition-all hover:text-primary relative group inline-block"
                >
                    {item.name}
                    <span
                        class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                    ></span>
                </a>
            {/each}
            <div class="h-4 w-px bg-border/60 mx-2"></div>
            <ThemeToggle />
        </nav>

        <div class="flex md:hidden items-center gap-4">
            <ThemeToggle />
        </div>
    </div>
</header>
