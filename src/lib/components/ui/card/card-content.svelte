<script lang="ts">
    import { cn } from "@/utils.js";
    let { class: className = "", children, ...rest } = $props();
</script>

<div class={cn("p-6 pt-0", className)} {...rest}>
    {@render children?.()}
</div>
