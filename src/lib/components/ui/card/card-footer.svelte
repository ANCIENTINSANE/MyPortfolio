<script lang="ts">
    import { cn } from "@/utils";
    let { class: className = "", children, ...rest } = $props();
</script>

<div class={cn("flex items-center p-6 pt-0", className)} {...rest}>
    {@render children?.()}
</div>
