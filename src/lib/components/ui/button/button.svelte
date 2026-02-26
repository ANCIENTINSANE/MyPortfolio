<script lang="ts">
	import { cva, type VariantProps } from "class-variance-authority";
	import { cn } from "@/utils";

	const buttonVariants = cva(
		"inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-[0.98]",
		{
			variants: {
				variant: {
					default:
						"bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30",
					destructive:
						"bg-destructive text-destructive-foreground hover:bg-destructive/90",
					outline:
						"border border-border/60 bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent",
					secondary:
						"bg-secondary text-secondary-foreground hover:bg-secondary/80",
					ghost: "hover:bg-accent hover:text-accent-foreground",
					link: "underline-offset-4 hover:underline text-primary",
				},
				size: {
					default: "h-11 py-2 px-6",
					sm: "h-9 px-4 rounded-xl",
					lg: "h-14 px-10 rounded-[1.25rem] text-base",
					icon: "h-11 w-11",
				},
			},
			defaultVariants: {
				variant: "default",
				size: "default",
			},
		},
	);

	interface Props extends VariantProps<typeof buttonVariants> {
		class?: string;
		href?: string;
		type?: "button" | "submit" | "reset";
		onclick?: (e: MouseEvent) => void;
		children?: any;
		[key: string]: any;
	}

	let {
		class: className = "",
		variant,
		size,
		href,
		type = "button",
		onclick,
		children,
		...rest
	}: Props = $props();
</script>

{#if href}
	<a
		{href}
		class={cn(buttonVariants({ variant, size, className }))}
		{...rest}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		{type}
		class={cn(buttonVariants({ variant, size, className }))}
		{onclick}
		{...rest}
	>
		{@render children?.()}
	</button>
{/if}
