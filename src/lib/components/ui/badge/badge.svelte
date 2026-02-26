<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "@/utils.js";

    const badgeVariants = cva(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
            variants: {
                variant: {
                    default:
                        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                    secondary:
                        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    destructive:
                        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                    outline: "text-foreground border-border/60",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        },
    );

    interface Props extends VariantProps<typeof badgeVariants> {
        class?: string;
        children?: any;
        [key: string]: any;
    }

    let { class: className = "", variant, children, ...rest }: Props = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...rest}>
    {@render children?.()}
</div>
