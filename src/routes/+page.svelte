<script lang="ts">
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
  <title>Surendra Kumar M | Founder & Systems Architect</title>
  <meta
    name="description"
    content="Founder and Systems Architect building scalable, AI-powered SaaS products with automation-first design and usage-based architecture."
  />
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
