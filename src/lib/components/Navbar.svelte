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
    let isMenuOpen = $state(false);
    let navElement: HTMLElement;
    let mobileMenuOverlay: HTMLElement;
    let navLinks: HTMLElement[] = [];
    let mobileNavLinks: HTMLElement[] = [];

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

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            gsap.to(mobileMenuOverlay, {
                display: "flex",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
            gsap.fromTo(
                mobileNavLinks,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2,
                },
            );
        } else {
            document.body.style.overflow = "";
            gsap.to(mobileMenuOverlay, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(mobileMenuOverlay, { display: "none" });
                },
            });
        }
    }

    function handleMobileClick(e: MouseEvent, href: string) {
        toggleMenu();
        scrollToSection(e, href);
    }
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
            <button
                onclick={toggleMenu}
                class="p-2 text-foreground z-[110] relative"
                aria-label="Toggle Menu"
            >
                <div
                    class="w-6 h-5 flex flex-col justify-between items-center relative overflow-hidden"
                >
                    <span
                        class={cn(
                            "w-6 h-0.5 bg-current transition-all duration-300 origin-center",
                            isMenuOpen ? "rotate-45 translate-y-[9px]" : "",
                        )}
                    ></span>
                    <span
                        class={cn(
                            "w-6 h-0.5 bg-current transition-all duration-300",
                            isMenuOpen ? "opacity-0 -translate-x-full" : "",
                        )}
                    ></span>
                    <span
                        class={cn(
                            "w-6 h-0.5 bg-current transition-all duration-300 origin-center",
                            isMenuOpen ? "-rotate-45 -translate-y-[9px]" : "",
                        )}
                    ></span>
                </div>
            </button>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
        bind:this={mobileMenuOverlay}
        class="fixed inset-0 z-[100] bg-background flex-col items-center justify-center hidden opacity-0"
    >
        <!-- Background decorative elements for the menu -->
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div
                class="absolute top-[10%] left-[10%] w-64 h-64 bg-primary rounded-full blur-[120px]"
            ></div>
            <div
                class="absolute bottom-[10%] right-[10%] w-64 h-64 bg-primary rounded-full blur-[120px]"
            ></div>
        </div>

        <nav class="flex flex-col items-center gap-10 px-6 text-center z-10">
            {#each navItems as item, i}
                <div class="overflow-hidden">
                    <a
                        bind:this={mobileNavLinks[i]}
                        href={item.href}
                        onclick={(e) => handleMobileClick(e, item.href)}
                        class="text-4xl sm:text-5xl font-bold tracking-tight hover:text-primary transition-colors block py-2"
                    >
                        {item.name}
                    </a>
                </div>
            {/each}
        </nav>

        <div
            class="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6 px-6 z-10"
        >
            <div class="h-px w-12 bg-border/60"></div>
            <p
                class="text-xs text-muted-foreground uppercase tracking-[0.3em] font-bold"
            >
                {siteConfig.name}
            </p>
        </div>
    </div>
</header>
