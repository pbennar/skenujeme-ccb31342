import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'micro': ['6px', { lineHeight: '1.4' }],
        'tiny': ['7px', { lineHeight: '1.4' }],
        'xs-nav': ['8px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'body': ['10px', { lineHeight: '1.6' }],
        'body-lg': ['11px', { lineHeight: '1.6' }],
        'box-title': ['12px', { lineHeight: '1.3' }],
        'heading-sm': ['14px', { lineHeight: '1.3' }],
        'heading-md': ['16px', { lineHeight: '1.25' }],
        'heading-lg': ['18px', { lineHeight: '1.2' }],
        'heading-xl': ['20px', { lineHeight: '1.15' }],
        'heading-2xl': ['24px', { lineHeight: '1.1' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        forest: {
          DEFAULT: "hsl(var(--forest))",
          dark: "hsl(var(--forest-dark))",
        },
        yellow: {
          DEFAULT: "hsl(var(--yellow))",
          hover: "hsl(var(--yellow-hover))",
        },
        dark: "hsl(var(--dark))",
        "gray-light": "hsl(var(--gray-light))",
        "gray-medium": "hsl(var(--gray-medium))",
        "gray-text": "hsl(var(--gray-text))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-gentle": "bounce-gentle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
