<script lang="ts">
    import { cn } from "@/utils.js";
    let { class: className = "", children, ...rest } = $props();
</script>

<p class={cn("text-sm text-muted-foreground", className)} {...rest}>
    {@render children?.()}
</p>
