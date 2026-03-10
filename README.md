# XpressDM – Pricing Page

A pixel-perfect Next.js implementation of the XpressDM pricing page, built with the App Router, Tailwind CSS, and the Nacelle custom font.

## 🚀 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Font | Nacelle (custom OTF, all 16 weights) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (fonts, metadata)
│   ├── page.tsx              # Root route → redirects to /pricing
│   ├── pricing/
│   │   ├── layout.tsx        # Wraps page with Navbar + Footer
│   │   └── page.tsx          # Pricing page (hero, cards, comparison, FAQ, CTA)
│   └── placeholder/
│       └── page.tsx          # Stub page for unfinished routes
│
├── components/
│   ├── Navbar.tsx            # Responsive sticky navigation
│   ├── PricingCard.tsx       # Reusable card (title, price, features, CTA)
│   ├── Button.tsx            # Multi-variant button (primary / outline / ghost)
│   ├── Footer.tsx            # Footer with links, newsletter, social icons
│   └── SectionWrapper.tsx    # Centred max-width section container
│
├── lib/
│   └── utils.ts              # cn(), formatPrice(), truncate()
│
└── styles/
    └── globals.css           # @font-face rules + Tailwind directives
```

```
public/
└── fonts/
    ├── Nacelle-Thin.otf
    ├── Nacelle-ThinItalic.otf
    ├── Nacelle-UltraLight.otf
    ├── Nacelle-UltraLightItalic.otf
    ├── Nacelle-Light.otf
    ├── Nacelle-LightItalic.otf
    ├── Nacelle-Regular.otf
    ├── Nacelle-Italic.otf
    ├── Nacelle-SemiBold.otf
    ├── Nacelle-SemiBoldItalic.otf
    ├── Nacelle-Bold.otf
    ├── Nacelle-BoldItalic.otf
    ├── Nacelle-Heavy.otf
    ├── Nacelle-HeavyItalic.otf
    ├── Nacelle-Black.otf
    └── Nacelle-BlackItalic.otf
```

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the root route auto-redirects to `/pricing`.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Colours (Tailwind custom tokens)

| Token | Hex | Usage |
|---|---|---|
| `brand-bg` | `#0A0A0F` | Page background |
| `brand-card` | `#111118` | Card & panel backgrounds |
| `brand-border` | `#1E1E2E` | Borders, dividers |
| `brand-accent` | `#6C63FF` | Primary interactive colour |
| `brand-accent-hover` | `#5A52E0` | Accent hover state |
| `brand-highlight` | `#00D4FF` | Highlight / featured features |
| `brand-text-primary` | `#FFFFFF` | Primary text |
| `brand-text-secondary` | `#A0A0B8` | Body / description text |
| `brand-text-muted` | `#6B6B80` | Captions, placeholders |

### Typography

The Nacelle font is loaded via `@font-face` in `globals.css` for all 16 variants (weight 100–900, normal & italic). The font is applied globally via `font-family: "Nacelle", sans-serif` on the `body`.

---

## 🧩 Component Reference

### `<PricingCard />`

```tsx
<PricingCard
  title="Pro"
  price={49}
  billingPeriod="month"
  description="For growing teams..."
  badge="Most Popular"
  isPopular={true}
  variant="featured"
  ctaText="Start Free Trial"
  ctaLink="/placeholder"
  features={[
    { label: "Unlimited messages", included: true, highlight: true },
    { label: "Analytics dashboard", included: true },
    { label: "White-label", included: false },
  ]}
/>
```

### `<Button />`

```tsx
<Button href="/pricing" variant="primary" size="lg">
  Get Started Free
</Button>
```

Variants: `primary` | `secondary` | `outline` | `ghost`  
Sizes: `sm` | `md` | `lg`

### `<SectionWrapper />`

```tsx
<SectionWrapper id="hero" className="pt-32">
  {/* content */}
</SectionWrapper>
```

---

## 🛣 Routing

| Route | Page |
|---|---|
| `/` | Redirects → `/pricing` |
| `/pricing` | Main pricing page |
| `/placeholder` | Stub page for unbuilt routes |

All navbar links, footer links, and CTA buttons that don't have a live destination route to `/placeholder`.

---

## 📄 License

The Nacelle font is distributed under the [SIL Open Font License v1.1](./public/fonts/SIL_Open_Font_License.txt).  
All application code is © XpressDM.
