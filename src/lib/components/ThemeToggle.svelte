<script lang="ts">
    import { onMount } from "svelte";
    import { Sun, Moon } from "lucide-svelte";
    import { Button } from "./ui/button/index.js";

    type ThemeMode = "light" | "dark" | "system";
    let mode = $state<ThemeMode>("system");
    let isDark = $state(false);

    function applyTheme(targetMode: ThemeMode) {
        let actualDark = false;

        if (targetMode === "system") {
            actualDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            localStorage.removeItem("theme");
        } else {
            actualDark = targetMode === "dark";
            localStorage.theme = targetMode;
        }

        if (actualDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        isDark = actualDark;
        mode = targetMode;
    }

    onMount(() => {
        // Initialize state from storage or system
        const storedTheme = localStorage.theme as ThemeMode | undefined;
        if (storedTheme === "dark" || storedTheme === "light") {
            applyTheme(storedTheme);
        } else {
            applyTheme("system");
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = () => {
            if (mode === "system") {
                applyTheme("system");
            }
        };

        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    });

    function cycleTheme() {
        if (mode === "system") applyTheme("light");
        else if (mode === "light") applyTheme("dark");
        else applyTheme("system");
    }
</script>

<Button
    variant="ghost"
    size="icon"
    onclick={cycleTheme}
    aria-label="Toggle theme: current mode is {mode}"
    class="relative group"
>
    {#if mode === "system"}
        <div class="relative">
            {#if isDark}
                <Moon class="h-5 w-5 text-primary" />
            {:else}
                <Sun class="h-5 w-5 text-primary" />
            {/if}
            <span class="absolute -top-1 -right-1 flex h-2 w-2">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                ></span>
                <span
                    class="relative inline-flex rounded-full h-2 w-2 bg-primary"
                ></span>
            </span>
        </div>
    {:else if isDark}
        <Moon class="h-5 w-5" />
    {:else}
        <Sun class="h-5 w-5" />
    {/if}
</Button>
