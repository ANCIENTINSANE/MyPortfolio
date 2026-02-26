<script lang="ts">
    import { cn } from "@/utils.js";
    let { class: className = "", children, ...rest } = $props();
</script>

<div class={cn("flex flex-col space-y-1.5 p-6", className)} {...rest}>
    {@render children?.()}
</div>
