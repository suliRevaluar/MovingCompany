import { Languages, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { ScrollProgress } from "@/components/scroll-progress";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="relative sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark"
        >
          <span className="text-xl font-black tracking-tight text-text">
            BleuNord
          </span>
          <span className="hidden text-sm font-semibold text-secondary-text sm:inline">
            Moving
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-bold text-secondary-text transition after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary-dark after:transition-all hover:text-text hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+15145550186"
            className="inline-flex items-center gap-2 text-sm font-black text-text transition hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 border-l border-border pl-4 text-sm font-bold text-text"
            aria-label="Language switch"
          >
            <Languages className="size-4" aria-hidden="true" />
            EN / FR
          </button>
          <Button href="/quote">Get a Quote</Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center border border-border bg-surface text-text md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </Container>
      <ScrollProgress />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
        <div>
          <p className="text-lg font-black text-text">
            {siteConfig.companyName}
          </p>
          <p className="mt-2 max-w-lg text-sm font-medium leading-6 text-secondary-text">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="grid gap-2 text-sm font-medium text-secondary-text sm:grid-cols-2">
          <p>{siteConfig.address}</p>
          <p>
            <a className="font-black text-text" href="tel:+15145550186">
              {siteConfig.phone}
            </a>
            <br />
            <a
              className="font-black text-text"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
