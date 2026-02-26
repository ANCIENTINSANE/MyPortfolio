<script lang="ts">
    import { onMount } from "svelte";
    import { footerContent, navItems } from "$lib/data";
    import { Button } from "./ui/button";
    import {
        Github,
        Linkedin,
        Instagram,
        Twitter,
        MessageSquare,
    } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    // Map icon names from data to components
    const iconMap: Record<string, any> = {
        Github,
        Linkedin,
        Instagram,
        Twitter,
    };

    let footer: HTMLElement;
    let ctaSection: HTMLElement;
    let infoBar: HTMLElement;
    let bottomBar: HTMLElement;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footer,
                start: "top 85%",
            },
        });

        tl.from(ctaSection, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            .from(
                infoBar,
                { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" },
                "-=0.6",
            )
            .from(
                bottomBar,
                { y: 10, opacity: 0, duration: 0.6, ease: "power3.out" },
                "-=0.4",
            );
    });
</script>

<footer bind:this={footer} class="bg-background overflow-hidden">
    <!-- CTA Section -->
    <div
        bind:this={ctaSection}
        class="border-t border-border/40 py-20 md:py-28"
    >
        <div
            class="container flex flex-col items-center text-center gap-8 max-w-3xl"
        >
            <h2
                class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
            >
                {footerContent.cta.headline}
            </h2>
            <Button
                href={footerContent.cta.buttonHref}
                size="lg"
                class="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold gap-3 group transition-all hover:scale-[1.03] active:scale-95"
            >
                {footerContent.cta.buttonLabel}
                <div
                    class="bg-background/20 rounded-full p-1.5 group-hover:bg-background/30 transition-colors"
                >
                    <MessageSquare class="h-4 w-4" />
                </div>
            </Button>
        </div>
    </div>

    <!-- Info Bar: Brand | Nav | Social -->
    <div bind:this={infoBar} class="border-t border-border/40">
        <div
            class="container py-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <!-- Brand -->
            <a
                href="/"
                class="flex items-center gap-2.5 text-foreground shrink-0"
            >
                <span class="text-base font-bold tracking-tight">
                    {footerContent.brand.name}<span class="text-primary">/</span
                    >{footerContent.brand.suffix}
                </span>
            </a>

            <!-- Navigation (same as Navbar) -->
            <nav>
                <ul
                    class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
                >
                    {#each navItems as link}
                        <li>
                            <a
                                href={link.href}
                                class="hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>

            <!-- Social Icons -->
            <div class="flex items-center gap-4 shrink-0">
                {#each footerContent.socials as social}
                    {@const IconComponent = iconMap[social.icon]}
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={social.label}
                    >
                        <IconComponent class="h-[18px] w-[18px]" />
                    </a>
                {/each}
            </div>
        </div>
    </div>

    <!-- Bottom Bar: Copyright | Legal -->
    <div bind:this={bottomBar} class="border-t border-border/40">
        <div
            class="container py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
        >
            <p>
                &copy;{new Date().getFullYear()}
                {footerContent.brand.name}/{footerContent.brand.suffix}, {footerContent
                    .bottom.copyrightText}
                <span class="text-red-500">❤</span>
                {footerContent.bottom.tagline}
            </p>
            <div class="flex items-center gap-6">
                {#each footerContent.bottom.links as link}
                    <a
                        href={link.href}
                        class="hover:text-foreground transition-colors"
                    >
                        {link.label}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</footer>
