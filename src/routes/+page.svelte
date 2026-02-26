<script lang="ts">
  import { siteConfig } from "$lib/data";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Fairlx from "$lib/components/Fairlx.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import type { ActionData } from "./$types";

  let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
  <title>{siteConfig.name} | Founder & Systems Architect</title>
  <meta name="description" content={siteConfig.description} />
  <meta
    name="keywords"
    content="Surendra Kumar M, Systems Architect, Founder, Full-Stack Developer, SaaS Engineer, Svelte, Next.js, AI Engineering, Scalable Architecture"
  />
  <link rel="canonical" href={siteConfig.url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteConfig.url} />
  <meta
    property="og:title"
    content={`${siteConfig.name} | Founder & Systems Architect`}
  />
  <meta property="og:description" content={siteConfig.description} />
  <meta property="og:image" content={`${siteConfig.url}/my-avatar.png`} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={siteConfig.url} />
  <meta
    property="twitter:title"
    content={`${siteConfig.name} | Founder & Systems Architect`}
  />
  <meta property="twitter:description" content={siteConfig.description} />
  <meta property="twitter:image" content={`${siteConfig.url}/my-avatar.png`} />
</svelte:head>

<div class="flex flex-col">
  <Hero />
  <About />
  <Fairlx />
  <Experience />
  <Projects />
  <Skills />
  <Contact {form} />
</div>
