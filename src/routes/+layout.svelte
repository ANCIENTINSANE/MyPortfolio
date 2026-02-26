<script lang="ts">
  import "../app.css";
  import { onMount, tick } from "svelte";
  import Lenis from "lenis";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { siteConfig } from "$lib/data";
  import { Motion } from "svelte-motion";

  let { children } = $props();
  const MotionAny = Motion as any;

  onMount(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  });
</script>

<svelte:head>
  <title>{siteConfig.name} — {siteConfig.description}</title>
  <meta name="description" content={siteConfig.description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteConfig.url} />
  <meta property="og:title" content={siteConfig.name} />
  <meta property="og:description" content={siteConfig.description} />
  <meta property="og:image" content="{siteConfig.url}/og.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={siteConfig.url} />
  <meta property="twitter:title" content={siteConfig.name} />
  <meta property="twitter:description" content={siteConfig.description} />
  <meta property="twitter:image" content="{siteConfig.url}/og.png" />

  <link rel="canonical" href={siteConfig.url} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="relative flex min-h-screen flex-col font-sans selection:bg-primary/20 selection:text-primary"
>
  <Navbar />
  <main class="flex-1">
    {@render children?.()}
  </main>

  <Footer />
</div>
