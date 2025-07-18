import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const GoogleLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const FacebookLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const AppleLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={className} viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.701"/>
  </svg>
)

const socialButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        google: "bg-white text-gray-900 border border-gray-300 shadow-xs hover:bg-gray-50 focus-visible:ring-gray-500/20 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
        facebook: "bg-[#1877F2] text-white shadow-xs hover:bg-[#0C63D4] focus-visible:ring-[#1877F2]/20 dark:bg-[#1877F2] dark:hover:bg-[#0C63D4]",
        apple: "bg-black text-white shadow-xs hover:bg-gray-800 focus-visible:ring-gray-500/20 dark:bg-white dark:text-black dark:hover:bg-gray-100",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      },
      theme: {
        brand: "",
        outline: "!bg-transparent !text-foreground border border-border hover:!bg-accent hover:!text-accent-foreground dark:border-border dark:hover:!bg-accent/50",
        ghost: "!bg-transparent !text-foreground hover:!bg-accent hover:!text-accent-foreground dark:hover:!bg-accent/50 !border-none !shadow-none",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-11 rounded-md px-8 has-[>svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      theme: "brand",
      size: "default",
    },
  }
)

const socialLogos = {
  google: GoogleLogo,
  facebook: FacebookLogo,
  apple: AppleLogo,
} as const

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof socialButtonVariants> {
  asChild?: boolean
  social?: keyof typeof socialLogos
  theme?: "brand" | "outline" | "ghost"
}

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, variant, size, theme = "brand", asChild = false, social, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Auto-detect social variant if social prop is provided but variant is default
    const finalVariant = social && variant === "default" ? social : variant
    
    const SocialIcon = social ? socialLogos[social] : null

    return (
      <Comp
        className={cn(socialButtonVariants({ variant: finalVariant, theme, size, className }))}
        ref={ref}
        {...props}
      >
        {SocialIcon && <SocialIcon />}
        {children}
      </Comp>
    )
  }
)
SocialButton.displayName = "SocialButton"

export { SocialButton, socialButtonVariants }