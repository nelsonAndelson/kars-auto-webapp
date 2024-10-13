/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{html,js,ts,tsx}",
//     "./components/**/*.{html,js,ts,tsx}",
//   ],
//   darkMode: ["class"],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "var(--primary)",
//           foreground: "var(--primary-foreground)",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff6600",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#01142e",
          foreground: "#fff",
        },
      },
    },
  },
  plugins: [],
};

// theme: {
//   extend: {
//     colors: {
//       background: "hsl(var(--background))",
//       foreground: "hsl(var(--foreground))",
//       card: "hsl(var(--card))",
//       "card-foreground": "hsl(var(--card-foreground))",
//       popover: "hsl(var(--popover))",
//       "popover-foreground": "hsl(var(--popover-foreground))",
//       primary: "hsl(var(--primary))",
//       "primary-foreground": "hsl(var(--primary-foreground))",
//       secondary: "hsl(var(--secondary))",
//       "secondary-foreground": "hsl(var(--secondary-foreground))",
//       muted: "hsl(var(--muted))",
//       "muted-foreground": "hsl(var(--muted-foreground))",
//       accent: "hsl(var(--accent))",
//       "accent-foreground": "hsl(var(--accent-foreground))",
//       destructive: "hsl(var(--destructive))",
//       "destructive-foreground": "hsl(var(--destructive-foreground))",
//       border: "hsl(var(--border))",
//       input: "hsl(var(--input))",
//       ring: "hsl(var(--ring))",
//       "chart-1": "hsl(var(--chart-1))",
//       "chart-2": "hsl(var(--chart-2))",
//       "chart-3": "hsl(var(--chart-3))",
//       "chart-4": "hsl(var(--chart-4))",
//       "chart-5": "hsl(var(--chart-5))",
//     },
//     borderRadius: {
//       DEFAULT: "var(--radius)",
//     },
//   },
// },
