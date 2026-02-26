<script lang="ts">
    import { onMount } from "svelte";
    import { siteConfig } from "@/data";
    import { Button } from "./ui/button";
    import {
        Mail,
        Linkedin,
        Send,
        Globe,
        Loader2,
        CheckCircle2,
        AlertCircle,
    } from "lucide-svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { enhance } from "$app/forms";
    import type { ActionData } from "../../routes/$types";

    let { form }: { form: ActionData } = $props();

    let contactSection: HTMLElement;
    let header: HTMLElement;
    let contactCards: HTMLElement[] = [];
    let contactForm: HTMLElement;
    let submitting = $state(false);

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Header Reveal
        gsap.fromTo(
            header,
            { x: -30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                },
            },
        );

        // Staggered Contact Methods
        gsap.fromTo(
            contactCards,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: contactCards[0],
                    start: "top 85%",
                },
            },
        );

        // Form Reveal
        gsap.fromTo(
            contactForm,
            { scale: 0.95, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: contactForm,
                    start: "top 80%",
                },
            },
        );

        // Magnetic Tilt Hover for contact cards
        contactCards.forEach((card) => {
            card.addEventListener("mousemove", (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(card, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)",
                });
            });
        });
    });
</script>

<section
    id="contact"
    bind:this={contactSection}
    class="py-20 sm:py-32 relative overflow-hidden"
>
    <div class="container relative z-10 px-6 sm:px-8">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
            <div class="space-y-12">
                <div bind:this={header} class="space-y-6">
                    <h2
                        class="text-4xl font-extrabold tracking-tight sm:text-6xl"
                    >
                        Let's build something <span class="text-primary italic"
                            >extraordinary</span
                        > together.
                    </h2>
                    <p
                        class="text-lg sm:text-xl text-muted-foreground font-medium max-w-lg leading-relaxed"
                    >
                        Whether you're starting a new product at Stemlen Pvt Ltd
                        or need help scaling your systems, my door is always
                        open.
                    </p>
                </div>

                <div class="flex flex-col gap-8">
                    <a
                        bind:this={contactCards[0]}
                        href={`mailto:${siteConfig.links.email}`}
                        class="group flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-border/40 bg-background hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
                    >
                        <div
                            class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0"
                        >
                            <Mail class="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <div class="space-y-0.5 min-w-0">
                            <p
                                class="text-[10px] sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                Email Me
                            </p>
                            <p class="text-lg sm:text-2xl font-bold truncate">
                                {siteConfig.links.email}
                            </p>
                        </div>
                    </a>

                    <div
                        bind:this={contactCards[1]}
                        class="flex flex-wrap gap-4"
                    >
                        <Button
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            size="lg"
                            class="flex-1 sm:flex-none rounded-2xl sm:rounded-3xl border-border/40 hover:border-primary/30 gap-3 px-6 sm:px-8 h-12 sm:h-14"
                        >
                            <Linkedin class="h-5 w-5" /> LinkedIn
                        </Button>
                        <Button
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            size="lg"
                            class="flex-1 sm:flex-none rounded-2xl sm:rounded-3xl border-border/40 hover:border-primary/30 gap-3 px-6 sm:px-8 h-12 sm:h-14"
                        >
                            <Globe class="h-5 w-5" /> GitHub
                        </Button>
                    </div>
                </div>
            </div>

            <div
                bind:this={contactForm}
                class="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/20"
            >
                <div
                    class="bg-background rounded-[2rem] sm:rounded-[2.25rem] p-6 sm:p-10 space-y-8 border border-border/40 shadow-2xl"
                >
                    <div class="space-y-2">
                        <h3 class="text-2xl font-bold tracking-tight">
                            Send a Message
                        </h3>
                        <p class="text-muted-foreground font-medium italic">
                            Usually responds within 24 hours.
                        </p>
                    </div>

                    {#if form?.success}
                        <div
                            class="flex items-center gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary animate-in fade-in slide-in-from-top-2"
                        >
                            <CheckCircle2 class="h-5 w-5 shrink-0" />
                            <p class="text-sm font-semibold">{form.success}</p>
                        </div>
                    {:else if form?.error}
                        <div
                            class="flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive animate-in fade-in slide-in-from-top-2"
                        >
                            <AlertCircle class="h-5 w-5 shrink-0" />
                            <p class="text-sm font-semibold">{form.error}</p>
                        </div>
                    {/if}

                    <form
                        method="POST"
                        use:enhance={() => {
                            submitting = true;
                            return async ({ update }) => {
                                await update();
                                submitting = false;
                            };
                        }}
                        class="space-y-6"
                    >
                        <div class="space-y-2">
                            <label
                                for="name"
                                class="font-bold uppercase tracking-widest text-muted-foreground ml-1 text-xs"
                                >Your Name</label
                            >
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="John Doe"
                                class="w-full bg-muted/30 border border-border/60 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                value={form?.values?.name ?? ""}
                            />
                        </div>
                        <div class="space-y-2">
                            <label
                                for="email"
                                class="font-bold uppercase tracking-widest text-muted-foreground ml-1 text-xs"
                                >Your Email</label
                            >
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="example@gmail.com"
                                class="w-full bg-muted/30 border border-border/60 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                value={form?.values?.email ?? ""}
                            />
                        </div>
                        <div class="space-y-2">
                            <label
                                for="message"
                                class="font-bold uppercase tracking-widest text-muted-foreground ml-1 text-xs"
                                >Your Message</label
                            >
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Tell me about your vision..."
                                class="w-full bg-muted/30 border border-border/60 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium resize-none"
                                >{form?.values?.message ?? ""}</textarea
                            >
                        </div>
                        <Button
                            type="submit"
                            disabled={submitting}
                            size="lg"
                            class="w-full rounded-2xl h-14 text-lg font-bold shadow-xl shadow-primary/20 gap-2 overflow-hidden group"
                        >
                            {#if submitting}
                                <Loader2 class="h-5 w-5 animate-spin" />
                                Sending...
                            {:else}
                                Send Message
                                <Send
                                    class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            {/if}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
