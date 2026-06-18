import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  Clock,
  HeartHandshake,
  Instagram,
  MapPin,
  Sparkles,
  Sprout,
  UtensilsCrossed,
} from "lucide-react";
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

const navItems = ["About", "Menu", "Catering", "Contact"];

const menuItems = [
  {
    title: "Soul Bowl",
    description:
      "Vegan chick'n, mac & cheese, greens, black-eyed peas, and sweet potato mash.",
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
        <Catering />
        <Markets />
        <About />
        <InstagramUpdates />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-950/10 bg-cream/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center" aria-label="Black Girl Veggies home">
          <img
            src={images.logo}
            alt="Black Girl Veggies Portland Oregon logo"
            className="h-14 w-14 rounded-full bg-forest-950 object-cover shadow-soft sm:h-16 sm:w-16"
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

      </div>

      <nav className="grid grid-cols-4 gap-1 border-t border-forest-950/10 px-2 py-2 text-sm font-semibold text-forest-950 md:hidden">
        {navItems.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap rounded-md bg-white/65 px-1 py-2 text-center"
          >
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(88svh-4rem)] overflow-hidden bg-forest-950 text-cream"
    >
      <img
        src={images.hero}
        alt="Vegan soul food bowl with mac and cheese, greens, black-eyed peas, sweet potato mash, and crispy chick'n"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,46,19,0.94)_0%,rgba(11,46,19,0.72)_42%,rgba(11,46,19,0.22)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-14 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.8rem] leading-[1.02] text-cream sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            Plant-Based Comfort Food in Portland
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-cream/90 sm:mt-6 sm:text-xl sm:leading-8">
            Vegan comfort food, farmers market favorites, and catering made
            with soul
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <ButtonLink href="#menu" variant="light">
              <UtensilsCrossed className="h-5 w-5" />
              View Menu
            </ButtonLink>
            <ButtonLink href="#catering" variant="outlineLight">
              <HeartHandshake className="h-5 w-5" />
              Catering Inquiry
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedMenu() {
  return (
    <section id="menu" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl text-forest-950 sm:text-5xl">
              Featured Menu
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-bark/75">
              Soulful vegan plates built for hot market pickup, Sunday supper,
              and trays that make plant-based catering feel generous.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-bark/10 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
                <img
                  src={item.image}
                  alt={`${item.title} from Black Girl Veggies`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-forest-950">{item.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-bark/75">
                  {item.description}
                </p>
                <ButtonLink href="#contact" variant="card" size="sm">
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
    <section id="catering" className="bg-forest-950 px-4 py-20 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            Catering Now Available
          </h2>
          <p className="mt-5 text-lg leading-8 text-cream/85">
            Bring plant-based comfort food to birthdays, corporate events,
            fundraisers, graduations, retirements, baby showers, grand openings,
            and private events.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/70">
            Vegan comfort-food trays can be planned around gluten-free,
            soy-free, nut-free, organic, grain-free, and refined sugar-free
            needs where appropriate.
          </p>

          <div className="mt-8">
            <ButtonLink href="#contact" variant="light">
              <Sparkles className="h-5 w-5" />
              Request Catering Info
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src={images.catering}
            alt="Catering trays of vegan comfort food"
            className="relative aspect-[5/4] w-full rounded-lg object-cover shadow-warm"
          />
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section id="markets" className="bg-parchment px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-display text-4xl text-forest-950 sm:text-5xl">
            Find Us Around Portland
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-bark/75">
            Follow Instagram for weekly menus, Sunday supper updates, and order
            availability.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {marketStops.map((market) => (
              <article
                key={market.name}
                className="rounded-lg border border-bark/10 bg-cream p-5 shadow-soft"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-forest-950 text-cream">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl text-forest-950">
                  {market.name}
                </h3>
                <p className="mt-3 flex items-center gap-2 font-semibold text-bark">
                  <Clock className="h-4 w-4 text-forest-700" />
                  {market.day}, {market.time}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src={images.market}
            alt="Black Girl Veggies style farmers market booth in Portland"
            className="aspect-[4/3] w-full rounded-lg object-cover object-[50%_20%] shadow-warm"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src={images.owner}
            alt="Friendly Portland farmers market food vendor"
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-warm"
          />
        <div>
          <h2 className="font-display text-4xl text-forest-950 sm:text-5xl">
            Comfort Food, Made Plant-Based
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-bark/75">
            <p>
              Black Girl Veggies brings vegan comfort food to Portland with the
              kind of meals that feel warm, filling, and made with care. From
              soul bowls and vegan mac to crispy chick’n and Sunday supper
              specials, every plate is built around bold flavor, fresh
              ingredients, and food that brings people together.
            </p>
            <p>
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
    <section className="bg-forest-800 px-4 py-20 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Fresh From the Feed
            </h2>
          </div>
          <ButtonLink href="https://instagram.com/blackgirlveggies" variant="outlineLight">
            <Instagram className="h-5 w-5" />
            Follow @blackgirlveggies
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {instagramUpdates.map((update) => (
            <article
              key={update.title}
              className="overflow-hidden rounded-lg border border-cream/15 bg-cream/10 shadow-soft"
            >
              <img
                src={update.image}
                alt={`${update.title} update`}
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-2xl text-cream">{update.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/75">{update.note}</p>
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
    <footer className="bg-forest-950 px-4 py-10 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <img
            src={images.logo}
            alt="Black Girl Veggies Portland Oregon logo"
            className="h-16 w-16 rounded-full bg-forest-950 object-cover"
          />
          <p className="mt-1 text-sm text-cream/70">
            Plant-Based Comfort Food in PDX · Proudly Black-Owned
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-cream/70 sm:flex-row sm:items-center">
          <a
            href="https://instagram.com/blackgirlveggies"
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
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-bold transition focus:outline-none focus:ring-2 focus:ring-honey focus:ring-offset-2";
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
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]}`}>
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
