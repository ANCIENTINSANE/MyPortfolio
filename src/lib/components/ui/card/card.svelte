<script lang="ts">
	import { cn } from "@/utils";
	let { class: className = "", children, ...rest } = $props();
</script>

<div
	class={cn(
		"rounded-2xl border border-border/40 bg-card text-card-foreground shadow-sm transition-all duration-300",
		className,
	)}
	{...rest}
>
	{@render children?.()}
</div>
