import { useState, useEffect, useRef } from "react";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { menu, site } from "@/data/content";

const fmt = (n: number) => `${n.toLocaleString("sr-RS")} ${site.currency}`;

function Wave({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cn(
        "block h-10 w-full md:h-16",
        flip && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 40c120 40 240 40 360 10s240-50 360-30 240 60 360 50 240-50 360-30v40H0z"
      />
    </svg>
  );
}

const GLASS =
  "M45 60 L155 60 L140 400 Q138 424 114 424 L86 424 Q62 424 60 400 Z";

function BeerGlass({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-20 -90 240 540"
      className={className}
      style={{ overflow: "visible" }}
      aria-hidden
    >
      <defs>
        <clipPath id="glass-clip">
          <path d={GLASS} />
        </clipPath>
        <linearGradient id="beer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0b840" />
          <stop offset="1" stopColor="#b86a1c" />
        </linearGradient>
      </defs>

      {/* beer + foam, clipped to the glass; slides up as you scroll */}
      <g clipPath="url(#glass-clip)">
        <g className="pour-fill">
          <rect x="30" y="64" width="140" height="380" fill="url(#beer)" />
          <g fill="#fff6e8">
            <rect x="30" y="50" width="140" height="22" />
            {[48, 70, 92, 114, 136, 158].map((cx, i) => (
              <circle key={cx} cx={cx} cy={64} r={13 + (i % 3) * 3} />
            ))}
          </g>
          {[70, 100, 128, 90, 118].map((cx, i) => (
            <circle
              key={i}
              className="bubble"
              cx={cx}
              cy={420}
              r={2.5 + (i % 2)}
              fill="#fff"
              opacity=".55"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </g>
        <rect
          x="62"
          y="110"
          width="9"
          height="230"
          rx="4.5"
          fill="#fff"
          opacity=".3"
        />
      </g>

      {/* glass outline */}
      <path
        d={GLASS}
        fill="rgba(255,255,255,.12)"
        stroke="#3b2418"
        strokeWidth="0"
        strokeLinejoin="round"
      />

      {/* foam head overflowing the rim */}
      <g
        className="pour-over"
        fill="#fff6e8"
        stroke="#e8d3b0"
        strokeWidth="1.5"
      >
        <circle cx="68" cy="50" r="22" />
        <circle cx="100" cy="36" r="28" />
        <circle cx="134" cy="50" r="22" />
        <circle cx="86" cy="30" r="20" />
        <circle cx="116" cy="28" r="20" />
      </g>

      {/* drips running down the outside */}
      <g fill="#fff6e8" stroke="#e8d3b0" strokeWidth="1.5">
        <rect className="drip" x="40" y="56" width="13" height="170" rx="6.5" />
        <rect
          className="drip"
          x="152"
          y="56"
          width="13"
          height="120"
          rx="6.5"
        />
        <rect className="drip" x="96" y="60" width="10" height="70" rx="5" />
      </g>
    </svg>
  );
}

export default function App() {
  const [tab, setTab] = useState(menu[0].id);
  const active = menu.find((m) => m.id === tab)!;

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Floating nav */}
      <header className="fixed inset-x-0 top-3 z-20 flex justify-center px-4">
        <nav className="flex items-center gap-5 rounded-full bg-card/90 px-5 py-2.5 text-sm font-medium shadow-lg shadow-amber-900/10 backdrop-blur">
          <a
            href="#top"
            className="font-display text-base font-bold text-primary"
          >
            {site.name}
          </a>
          <a href="#menu" className="hover:text-primary">
            Menu
          </a>
          <a href="#story" className="hidden hover:text-primary sm:inline">
            Story
          </a>
          <a href="#visit" className="hover:text-primary">
            Visit
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="pour-hero relative bg-secondary">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div
            aria-hidden
            className="absolute -left-20 top-24 size-72 rounded-full bg-accent/40 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -right-16 bottom-10 size-80 rounded-full bg-primary/20 blur-3xl"
          />

          {/* Glass background */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-end justify-center pb-16 pt-24 opacity-35 md:items-center md:justify-end md:pr-[8%] md:opacity-100"
          >
            <BeerGlass className="h-full max-h-[640px] w-auto" />
          </div>

          <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-20 text-center md:items-start md:text-left">
            <p className="font-hand text-2xl text-primary md:text-3xl">
              {site.opening}
            </p>
            <h1 className="mt-1 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground md:text-xl">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button size="lg" asChild>
                <a href="#menu">See the menu</a>
              </Button>
              <Button size="lg" variant="secondary" className="bg-card" asChild>
                <a href="#visit">Find us</a>
              </Button>
            </div>
            <p className="pour-hint mt-10 font-hand text-2xl text-primary">
              scroll to pour ↓
            </p>
          </div>

          <Wave className="absolute inset-x-0 -bottom-px text-background" />
        </div>
      </section>

      {/* Menu */}
      {/* Menu */}
      <section
        id="menu"
        className="mx-auto max-w-3xl scroll-mt-16 px-5 py-14 md:py-20"
      >
        <div className="mb-8 text-center">
          <p className="font-hand text-2xl text-primary">
            freshly made, every day
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Our menu</h2>
        </div>
        <div role="tablist" className="mb-8 flex justify-center gap-2">
          {menu.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={tab === m.id}
              onClick={() => setTab(m.id)}
              className={cn(
                "h-11 rounded-full px-6 text-sm font-semibold transition-all",
                tab === m.id
                  ? "scale-105 bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-muted",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
        <ul className="space-y-6 px-1 md:px-6">
          {active.items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="group flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-active:bg-primary group-active:text-primary-foreground">
                  <Icon
                    className="size-6 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-12 group-hover:scale-125 group-active:-rotate-12 group-active:scale-125"
                    strokeWidth={1.8}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg font-semibold">
                      {item.name}
                    </span>
                    <span
                      aria-hidden
                      className="mb-1 flex-1 border-b-2 border-dotted border-muted-foreground/30"
                    />
                    <span className="font-semibold tabular-nums text-primary">
                      {fmt(item.price)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Story + gallery */}
      <section id="story" className="relative scroll-mt-16 bg-secondary">
        <Wave flip className="absolute inset-x-0 top-[-1px] text-background" />
        <div className="mx-auto max-w-5xl px-5 py-24 md:py-32">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-hand text-2xl text-primary">a little about us</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Our story</h2>
            <div className="space-y-4 text-lg leading-relaxed text-secondary-foreground">
              {site.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <Wave className="absolute inset-x-0 -bottom-px text-background" />
      </section>

      {/* Visit */}
      <section
        id="visit"
        className="mx-auto max-w-5xl scroll-mt-16 px-5 py-16 md:py-24"
      >
        <div className="mb-10 text-center">
          <p className="font-hand text-2xl text-primary">come say hello</p>
          <h2 className="text-4xl font-bold md:text-5xl">Visit us</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-5">
            <Card className="bg-accent/25 shadow-none">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                <Clock className="size-5 text-primary" /> Opening hours
              </h3>
              <dl className="space-y-2.5">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-secondary-foreground">{h.days}</dt>
                    <dd className="font-semibold tabular-nums">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card className="space-y-3.5 text-[15px] shadow-none">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                {site.address}
              </p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex gap-3 hover:text-primary"
              >
                <Phone className="size-5 shrink-0 text-primary" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-3 hover:text-primary"
              >
                <Mail className="size-5 shrink-0 text-primary" />
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 hover:text-primary"
              >
                <Instagram className="size-5 shrink-0 text-primary" />
                {site.instagramHandle}
              </a>
            </Card>
            <Button size="lg" asChild className="w-full md:w-auto">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`}
              >
                Get directions
              </a>
            </Button>
          </div>
          <iframe
            title="Map"
            loading="lazy"
            className="h-80 w-full rounded-[2rem] sepia-[.35] md:h-full md:min-h-96"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          />
        </div>
      </section>

      <footer className="bg-cocoa px-5 py-10 text-center text-secondary">
        <p className="font-hand text-3xl text-accent">see you soon ☕</p>
        <p className="mt-2 text-sm opacity-70">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </div>
  );
}
