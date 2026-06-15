# Millhaven — Practice Project

Nuxt 4 mobile-first practice app for a local services experience in **Millhaven**. It includes a welcome screen with feature cards and a **Your Local Offer** page with category cards.

## Tech stack

- [Nuxt 4](https://nuxt.com/) + Vue 3
- [Tailwind CSS 4](https://tailwindcss.com/)
- [@nuxt/image](https://image.nuxt.com/) for optimised images
- Google Fonts: Josefin Sans, Dosis

## Features

- Welcome page with large navigable cards (`Card`)
- Local Offer page with a grid of category cards (`CategoryCard`)
- Separate layouts: `welcome` (footer + welcome header) and `app` (app header)
- Shared header navigation with `NuxtLink`, `aria-current`, and 24px icon spacing
- Context-aware routing: from home → `/local-offer`, from local offer → `/`
- Accessibility: semantic landmarks, `aria-label`, keyboard focus styles, decorative images hidden from screen readers
- Shared utilities: `normalizeColor`, `slugify`, `useNavLink`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # production build
npm run preview  # preview production build
npm run generate # static site generation
```

## Pages

| Route | Layout | Description |
|---|---|---|
| `/` | `welcome` | Welcome screen with feature cards |
| `/local-offer` | `app` | Category grid for local offer services |

## Project structure

```
app/
├── components/
│   ├── Card.vue              # Welcome page cards
│   ├── CategoryCard.vue      # Local offer category cards
│   ├── HeaderNavLinks.vue    # Shared nav list
│   ├── headers/
│   │   ├── WelcomeHeader.vue
│   │   └── AppHeader.vue
│   └── icons/
├── composables/
│   └── useNavLink.ts         # Nav paths, focus styles, aria-current
├── constants/
│   ├── cards.ts              # Welcome card data
│   ├── local-offer-categories.ts
│   ├── nav-links.ts
│   └── routes.ts
├── layouts/
│   ├── welcome.vue
│   ├── app.vue
│   └── default.vue
├── pages/
│   ├── index.vue
│   └── local-offer.vue
└── utils/
    ├── color.ts
    └── slugify.ts
public/
└── images/                   # Category and footer assets
```

## Navigation flow

- **Home cards** → `/local-offer`
- **Category cards** → `/`
- **Header icons** → alternate between home and local offer depending on the current page

## Adding content

**Welcome cards** — edit `app/constants/cards.ts`:

```ts
{
  icon: cardIconSupport,
  title: 'Events',
  description: '...',
  color: '028090',
  to: LOCAL_OFFER_PATH,
}
```

**Local offer categories** — edit `app/constants/local-offer-categories.ts`:

```ts
category('Housing', 'FEDE86', '/images/housing 1.png')
```

## Accessibility notes

- Cards and nav items use explicit `<NuxtLink>` elements (not dynamic `<component :is>`)
- Category images are decorative (`alt=""` + `aria-hidden`)
- Page sections use `<section>`, `<header>`, and labelled headings
- Header nav uses `<ul>/<li>` with `aria-current="page"` on the active route

## License

Private practice project.
