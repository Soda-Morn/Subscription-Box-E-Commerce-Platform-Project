/** @type {import('tailwindcss').Config} */

// ─────────────────────────────────────────────────────────────────────────────
// Tailwind config — translates InApp template colors to our Cambodian theme
//
// InApp original → Our adaptation:
//   primary  #E66239 orange  →  #8B0000 deep red  (Cambodian)
//   warning  #F0B100 yellow  →  #D4AF37 gold       (Cambodian)
//   success  #00C951         →  same
//   info     #00B8DB         →  same
//   danger   #FB2C36         →  same
// ─────────────────────────────────────────────────────────────────────────────

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    // Keep Tailwind's default colors, then extend with our custom ones
    extend: {
      colors: {
        // Primary — Cambodian deep red (replaces InApp orange)
        primary: {
          DEFAULT: '#8B0000',
          light:   '#a01010',
          dark:    '#5C0000',
        },
        // Success — keep InApp green
        success: '#00C951',
        // Info — keep InApp cyan
        info:    '#00B8DB',
        // Warning — Cambodian gold (replaces InApp yellow)
        warning: '#D4AF37',
        // Danger — keep InApp red
        danger:  '#FB2C36',

        // InApp gray scale (matches _variables.scss exactly)
        // These are the same as Tailwind's neutral scale — naming them explicitly
        // so team can use bg-gray-200 and get #e5e5e5 like InApp does
        gray: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },

      fontFamily: {
        // Poppins — same font as InApp template
        sans: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        // Base font size from InApp: 0.875rem (14px)
        base: ['0.875rem', { lineHeight: '1.5' }],
        xs:   ['0.75rem',  { lineHeight: '1.4' }],
        sm:   ['0.8125rem',{ lineHeight: '1.5' }],
      },

      spacing: {
        // Sidebar width: 240px — use as w-sidebar, ml-sidebar, etc.
        sidebar:  '240px',
        // Topbar height: 60px — use as h-topbar, pt-topbar, etc.
        topbar:   '60px',
      },

      borderRadius: {
        // InApp uses rounded-2 (Bootstrap) = 0.5rem
        DEFAULT: '0.5rem',
      },

      keyframes: {
        // For the animated "active" dot in subscriber topbar
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.5' },
        }
      }
    }
  },
  plugins: []
}
