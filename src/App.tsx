import {
  ArrowRight,
  CalendarDays,
  Clock,
  HeartHandshake,
  Instagram,
  Menu,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const images = {
  logo: "/images/black-girl-veggies-logo.png", // LOGO_IMAGE: replace with final brand logo asset.
  hero: "/images/blackgirlveggies-hero-wide.png", // HERO_IMAGE: wide AI-extended hero version for full-bleed layout.
  soulBowl: "/images/Blackgirlveggiesdemohero.png", // SOUL_BOWL_IMAGE: replace with real Soul Bowl photo.
  biscuitGravy: "/images/biscuit-and-gravy.png", // BISCUIT_AND_GRAVY_IMAGE: replace with real biscuit and gravy photo.
  friedChicken: "/images/veganfriedchicken.png", // FRIED_CHICKEN_IMAGE: replace with real vegan fried chicken photo.
  catering: "/images/cateringtray.png", // CATERING_TRAYS_IMAGE: replace with catering tray photo.
  market: "/images/Owner.png", // MARKET_PHOTO: replace with market booth/vendor photo.
  owner: "/images/picturewithstand.png", // OWNER_OR_MARKET_IMAGE: replace with owner or market portrait.
  instagramMenu: "/images/Blackgirlveggiesdemohero.png", // INSTAGRAM_MENU_POST_IMAGE: replace with real menu post image.
  instagramCatering: "/images/cateringtray.png", // INSTAGRAM_CATERING_POST_IMAGE: replace with real catering post image.
  instagramMarket: "/images/picturewithstand.png", // INSTAGRAM_MARKET_POST_IMAGE: replace with real market post image.
};

const contactHref = "https://instagram.com/blackgirlveggies";

const navItems = ["About", "Menu", "Catering", "Contact"];

const menuItems = [
  {
    title: "Soul Bowl",
    description: "Chick'n, mac, greens, peas, and sweet potato mash.",
    image: images.soulBowl,
  },
  {
    title: "Biscuit & Gravy",
    description: "Warm biscuit plates with vegan gravy and comfort-food brunch energy.",
    image: images.biscuitGravy,
  },
  {
    title: "Vegan Fried Chicken",
    description: "Crispy, seasoned, and made for comfort-food plates.",
    image: images.friedChicken,
  },
];

const marketStops = [
  {
    name: "PSU Farmers Market",
    day: "Saturday",
    time: "8:30 AM - 2 PM",
  },
  {
    name: "King Farmers Market",
    day: "Sunday",
    time: "10 AM - 2 PM",
  },
];

const cateringFeatures = ["Vegan", "Gluten-Free", "Organic", "Soy-Free", "Nut-Free"];

const instagramUpdates = [
  {
    title: "Sunday Supper Menu",
    image: images.instagramMenu,
    note: "Rotating plates, pickup windows, and weekly comfort-food specials.",
  },
  {
    title: "Catering Trays",
    image: images.instagramCatering,
    note: "Mac, greens, chick'n, peas, and party-ready plant-based sides.",
  },
  {
    title: "Market Specials",
    image: images.instagramMarket,
    note: "Farmers market pop-ups, hot plates, soups, and seasonal extras.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <FeaturedMenu />
        <Markets />
        <Catering />
        <About />
        <InstagramUpdates />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-950/10 bg-cream/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <a href="#top" className="group flex items-center" aria-label="Black Girl Veggies home">
          <img
            src={images.logo}
            alt="Black Girl Veggies Portland Oregon logo"
            className="h-12 w-12 rounded-full bg-forest-950 object-cover shadow-soft sm:h-14 sm:w-14"
          />
        </a>

        <nav className="hidden items-center gap-6 text-base font-semibold text-forest-950 md:flex">
          {navItems.map((item) => (
            <span
              key={item}
              className="cursor-default"
            >
              {item}
            </span>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-950/15 bg-white text-forest-950 shadow-soft md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="absolute right-4 top-[calc(100%+0.5rem)] w-44 rounded-xl border border-forest-950/10 bg-cream p-2 text-sm font-semibold text-forest-950 shadow-warm md:hidden">
          {navItems.map((item) => (
            <span
              key={item}
              className="block cursor-default rounded-lg px-3 py-2.5 hover:bg-white/70"
            >
              {item}
            </span>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[88svh] overflow-hidden bg-forest-950 text-cream sm:min-h-[calc(88svh-4rem)]"
    >
      <img
        src={images.hero}
        alt="Vegan soul food bowl with mac and cheese, greens, black-eyed peas, sweet potato mash, and crispy chick'n"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,45,18,0.82)_0%,rgba(6,45,18,0.45)_48%,rgba(6,45,18,0.12)_100%)] sm:bg-[linear-gradient(90deg,rgba(6,45,18,0.84)_0%,rgba(6,45,18,0.58)_40%,rgba(6,45,18,0.24)_70%,rgba(6,45,18,0.1)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950/30 to-transparent sm:hidden" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col px-6 py-0 sm:min-h-0 sm:justify-center sm:px-6 sm:py-14 md:py-28 lg:px-8">
        <div className="flex max-w-[330px] flex-col pt-[14svh] sm:min-h-0 sm:max-w-2xl sm:justify-start sm:pt-0">
          <div>
            <h1 className="font-display text-[48px] leading-[0.93] text-cream sm:hidden">
              <span className="block">Plant-Based</span>
              <span className="block">Comfort Food</span>
              <span className="block">in Portland</span>
            </h1>
            <h1 className="hidden font-display text-4xl leading-[1.04] text-cream sm:block sm:text-6xl sm:leading-[0.98] lg:text-7xl">
              Plant-Based Comfort Food in Portland
            </h1>
            <p className="mt-5 max-w-[15rem] text-base font-medium leading-6 text-cream/90 sm:hidden">
              Vegan comfort food and catering made with soul
            </p>
            <p className="mt-4 hidden max-w-md text-base leading-7 text-cream/90 sm:mt-6 sm:block sm:max-w-xl sm:text-xl sm:leading-8">
              Vegan comfort food and catering made with soul
            </p>
          </div>

          <div className="mt-7 grid w-[260px] gap-5 sm:mt-8 sm:w-auto sm:max-w-none sm:flex sm:flex-row">
            <ButtonLink href="#menu" variant="light" className="h-[52px] px-6 sm:h-auto sm:px-5">
              <UtensilsCrossed className="h-5 w-5" />
              View Menu
            </ButtonLink>
            <ButtonLink href={contactHref} variant="outlineLight" className="hidden sm:inline-flex">
              <HeartHandshake className="h-5 w-5" />
              Catering Inquiry
            </ButtonLink>
            <a
              href="#catering"
              className="inline-flex justify-start text-sm font-bold text-cream underline decoration-cream/40 decoration-2 underline-offset-4 sm:hidden"
            >
              Ask about catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedMenu() {
  return (
    <section id="menu" className="bg-cream px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mt-1 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl text-forest-950 sm:text-5xl">
              Featured Menu
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-bark/75 sm:mt-4 sm:text-base sm:leading-7">
              Soulful vegan plates built for hot market pickup, Sunday supper,
              and trays that make plant-based catering feel generous.
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {menuItems.map((item) => (
            <article
              key={item.title}
              className="flex w-[84vw] max-w-[330px] shrink-0 flex-col overflow-hidden rounded-xl border border-bark/10 bg-white shadow-soft sm:w-auto sm:max-w-none"
            >
              <div className="relative h-[205px] overflow-hidden bg-parchment sm:aspect-[4/3] sm:h-auto">
                <img
                  src={item.image}
                  alt={`${item.title} from Black Girl Veggies`}
                  className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-xl text-forest-950 sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-bark/75">
                  {item.description}
                </p>
                <ButtonLink href={contactHref} variant="card" size="sm" className="mt-auto pt-2">
                  Order
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catering() {
  return (
    <section id="catering" className="bg-forest-950 px-4 py-12 text-cream sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-cream sm:text-5xl">
            Catering Now Available
          </h2>
          <p className="mt-4 text-base leading-7 text-cream/85 sm:mt-5 sm:text-lg sm:leading-8">
            Bring plant-based comfort food to birthdays, events, office lunches, markets, and private gatherings.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {cateringFeatures.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1.5 text-xs font-bold text-cream"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <ButtonLink href={contactHref} variant="light" className="w-full sm:w-auto">
              <Sparkles className="h-5 w-5" />
              Ask About Catering
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src={images.catering}
            alt="Catering trays of vegan comfort food"
            className="relative aspect-[4/3] w-full rounded-xl object-cover object-center shadow-warm sm:aspect-[5/4]"
          />
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section id="markets" className="bg-parchment px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="order-1 lg:order-1">
          <h2 className="font-display text-3xl text-forest-950 sm:text-5xl">
            Find Us Around Portland
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-bark/75 sm:mt-4 sm:text-base sm:leading-7">
            Follow Instagram for weekly menus, Sunday supper updates, and order
            availability.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {marketStops.map((market) => (
              <article
                key={market.name}
                className="rounded-xl border border-bark/10 bg-cream p-4 shadow-soft sm:p-5"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-950 text-cream">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <h3 className="font-display text-xl text-forest-950 sm:text-2xl">
                  {market.name}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-bark sm:mt-3 sm:text-base">
                  <Clock className="h-4 w-4 text-forest-700" />
                  {market.day}, {market.time}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="order-2 lg:order-2">
          <img
            src={images.market}
            alt="Black Girl Veggies style farmers market booth in Portland"
            className="aspect-[4/3] w-full rounded-xl object-cover object-[50%_20%] shadow-warm"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src={images.owner}
          alt="Friendly Portland farmers market food vendor"
          className="order-2 aspect-[4/3] w-full rounded-xl object-cover shadow-warm sm:aspect-[4/5] lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl text-forest-950 sm:text-5xl">
            Comfort Food, Made <span className="whitespace-nowrap">Plant-Based</span>
          </h2>
          <div className="mt-4 space-y-3 text-base leading-7 text-bark/75 sm:mt-5 sm:space-y-4 sm:leading-8">
            <p>
              Black Girl Veggies brings vegan comfort food to Portland with the
              kind of meals that feel warm, filling, and made with care. From soul bowls to catering trays, everything is built around bold flavor, community, and food that brings people together.
            </p>
            <p className="hidden sm:block">
              Find us at local markets, follow along for weekly menus, or
              reach out for catering and special orders. Whether you’re
              stopping by for lunch or planning an event, Black Girl Veggies
              makes plant-based food feel familiar, generous, and full of soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramUpdates() {
  return (
    <section className="hidden bg-forest-800 px-4 py-12 text-cream sm:block sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl text-cream sm:text-5xl">
              Fresh From the Feed
            </h2>
          </div>
          <ButtonLink href={contactHref} variant="outlineLight" size="sm" className="self-start">
            <Instagram className="h-5 w-5" />
            Follow @blackgirlveggies
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {instagramUpdates.map((update) => (
            <article
              key={update.title}
              className="overflow-hidden rounded-xl border border-cream/15 bg-cream/10 shadow-soft"
            >
              <img
                src={update.image}
                alt={`${update.title} update`}
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-xl text-cream sm:text-2xl">{update.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream/75">{update.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-950 px-4 py-8 text-cream sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={images.logo}
            alt="Black Girl Veggies Portland Oregon logo"
            className="h-14 w-14 rounded-full bg-forest-950 object-cover sm:h-16 sm:w-16"
          />
          <p className="mt-1 text-sm text-cream/70">
            Plant-Based Comfort Food in PDX · Proudly Black-Owned
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-cream/70 sm:flex-row sm:items-center md:justify-end">
          <a
            href={contactHref}
            className="inline-flex items-center gap-2 font-semibold text-cream transition hover:text-herb"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <span>© {new Date().getFullYear()} Black Girl Veggies. Demo website.</span>
        </div>
      </div>
    </footer>
  );
}

type ButtonVariant = "primary" | "secondary" | "light" | "outlineLight" | "card";
type ButtonSize = "default" | "sm";

function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition focus:outline-none focus:ring-2 focus:ring-honey focus:ring-offset-2 sm:rounded-md";
  const sizes = {
    default: "px-5 py-3 text-sm sm:text-base",
    sm: "px-4 py-2.5 text-sm",
  };
  const variants = {
    primary: "bg-forest-950 text-cream shadow-soft hover:bg-forest-800",
    secondary: "bg-forest-950 text-cream shadow-soft hover:bg-forest-800",
    light: "bg-honey text-forest-950 shadow-soft hover:bg-[#f0bc58]",
    outlineLight:
      "border border-cream/45 bg-cream/10 text-cream backdrop-blur hover:bg-cream/20",
    card: "mt-5 w-full bg-forest-950 text-cream hover:bg-forest-800",
  };

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

function SectionEyebrow({
  children,
  icon,
  dark = false,
}: {
  children: ReactNode;
  icon: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold uppercase ${
        dark
          ? "bg-cream/10 text-herb"
          : "border border-forest-950/10 bg-white/70 text-forest-700"
      }`}
    >
      {icon}
      {children}
    </p>
  );
}

export default App;
