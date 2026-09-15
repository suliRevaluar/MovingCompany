import { ArrowRight, Check, Package, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceImages } from "@/lib/images";
import {
  howItWorks,
  reviews,
  services,
  siteConfig,
  trustStats,
  trustLogos,
} from "@/lib/site-config";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <QuoteStart />
      <Trust />
      <ServiceTeasers />
      <HowItWorks />
      <ReviewTeasers />
      <CTA />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="hero-shell relative overflow-hidden bg-text py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="reveal">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-accent">
            Montreal moving, done right
          </p>
          <h1 className="max-w-3xl text-5xl font-black tracking-normal text-white sm:text-6xl">
            Move day, handled with calm precision.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/72">
            Local crews, clear starting prices, and careful protection for
            Montreal homes, condos, and offices.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="gap-2">
              Get a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="tel:+15145550186" variant="secondary">
              {siteConfig.phone}
            </Button>
          </div>
        </div>

        <div className="reveal reveal-delay-1">
          <div className="relative min-h-[430px] border border-white/12 bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/hero-moving.webp"
                alt="Movers loading wrapped furniture into a moving truck"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,43,58,0),rgba(16,43,58,0.72))]" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white px-3 py-2 text-sm font-black text-text">
                <Star
                  className="size-4 fill-accent text-accent"
                  aria-hidden="true"
                />
                {siteConfig.rating} local rating
              </div>
            </div>
            <div className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="float-slow bg-accent p-4 text-text">
                <p className="text-3xl font-black">32k+</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.12em]">
                  boxes moved
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm font-bold text-white/76">
                <span className="flex items-center gap-2">
                  <Truck className="size-4 text-accent" aria-hidden="true" />
                  Clean trucks
                </span>
                <span className="flex items-center gap-2">
                  <Package className="size-4 text-accent" aria-hidden="true" />
                  Wrapped items
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-accent" aria-hidden="true" />
                  Insured crew
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-accent" aria-hidden="true" />
                  Local timing
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function QuoteStart() {
  return (
    <section className="bg-surface py-10 sm:py-12">
      <Container>
        <div className="grid overflow-hidden border border-border bg-background shadow-[0_24px_80px_rgba(16,43,58,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-primary-light p-8">
            <div className="absolute inset-x-8 top-8 h-px bg-border" />
            <div className="absolute bottom-8 left-8 right-8 h-px bg-border" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-primary-dark">
                  Fast quote
                </p>
                <h2 className="mt-4 max-w-md text-4xl font-black text-text">
                  Start with two addresses. We’ll shape the plan.
                </h2>
              </div>
              <div className="flex items-end justify-between gap-6">
                <div className="text-sm font-bold leading-6 text-secondary-text">
                  <p>Protected floors</p>
                  <p>Clear arrival window</p>
                  <p>Local Montreal crew</p>
                </div>
                <MovingBoxGraphic />
              </div>
            </div>
          </div>

          <form
            action="/quote"
            className="bg-white p-6 text-text sm:p-8 lg:p-10"
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary-dark">
              Get my quote
            </p>
            <h2 className="mt-3 text-3xl font-black">Where are you moving?</h2>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-secondary-text">
              Enter the route now. Date, size, and contact details happen on the
              next page.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <HeroField
                label="Moving from"
                name="from"
                placeholder="Pickup address"
              />
              <HeroField
                label="Moving to"
                name="to"
                placeholder="Destination address"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-primary-dark px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark md:w-auto"
            >
              Continue to quote
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function MovingBoxGraphic() {
  return (
    <div className="box-3d float-slow" aria-hidden="true">
      <div className="box-3d-top" />
      <div className="box-3d-front">
        <Package className="size-10 text-text/75" />
      </div>
      <div className="box-3d-side" />
      <div className="box-3d-shadow" />
    </div>
  );
}

function HeroField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="block text-sm font-black text-text">
      {label}
      <input
        name={name}
        placeholder={placeholder}
        className="mt-2 min-h-12 w-full border border-border bg-primary-light px-4 text-sm font-bold text-text outline-none transition placeholder:text-secondary-text/65 focus:border-primary-dark focus:ring-4 focus:ring-primary/40"
      />
    </label>
  );
}

function Trust() {
  return (
    <section className="border-b border-border bg-surface py-8">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="reveal border-l border-border pl-5"
            >
              <p className="text-3xl font-black text-text">{stat.value}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-secondary-text">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-hidden border-y border-border py-4">
          <div className="trust-marquee flex w-max gap-10 text-sm font-black uppercase tracking-[0.16em] text-secondary-text">
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <span key={`${logo}-${index}`}>{logo}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceTeasers() {
  const teasers = services.slice(0, 3);

  return (
    <Section className="bg-background">
      <Container>
        <div className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title="The core moves we handle every week."
            description="A short view of the service mix. The full details live on the services page."
          />
          <Button href="/services" variant="secondary">
            View Services
          </Button>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {teasers.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group reveal block transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={serviceImages[service.title]}
                  alt={`${service.title} moving service`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 border-t border-border pt-5">
                <h3 className="text-2xl font-black text-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-secondary-text">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three steps. No moving-day fog."
          description="The plan stays plain, visible, and easy to act on."
        />
        <div className="relative mt-10 grid gap-0 border-y border-border lg:grid-cols-3">
          <div className="absolute left-0 top-12 hidden h-1 w-full bg-primary-light lg:block">
            <div className="h-full w-2/3 bg-primary-dark" />
          </div>
          {howItWorks.map((step, index) => (
            <article
              key={step.title}
              className="group relative border-b border-border py-7 transition duration-300 hover:bg-primary-light lg:border-b-0 lg:border-r lg:px-7 last:lg:border-r-0"
            >
              <p className="grid size-10 place-items-center bg-surface text-sm font-black text-primary-dark ring-8 ring-surface transition group-hover:-translate-y-1 group-hover:bg-primary-dark group-hover:text-white">
                {step.step}
              </p>
              <h3 className="mt-8 text-2xl font-black text-text">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-secondary-text">
                {step.description}
              </p>
              {index === 2 ? null : (
                <ArrowRight
                  className="mt-8 size-5 text-primary-dark"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ReviewTeasers() {
  return (
    <Section className="bg-background">
      <Container className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-primary-dark">
            Reviews
          </p>
          <p className="mt-5 text-6xl font-black text-text">
            {siteConfig.rating}
          </p>
          <div className="mt-4 flex gap-1 text-text">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-5 fill-text"
                aria-hidden="true"
              />
            ))}
          </div>
          <Button href="/reviews" variant="secondary" className="mt-8">
            Read Reviews
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.slice(0, 2).map((review) => (
            <figure
              key={review.name}
              className="reveal border-t border-border pt-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-12 place-items-center bg-primary-dark text-sm font-black text-white">
                  {review.avatar}
                </span>
                <span>
                  <span className="block font-black text-text">
                    {review.name}
                  </span>
                  <span className="text-sm font-bold text-secondary-text">
                    {review.location}
                  </span>
                </span>
              </div>
              <blockquote className="text-xl font-black leading-8 text-text">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex gap-1 text-accent">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <section className="bg-text py-14 text-white sm:py-16">
      <Container className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
            Ready when you are
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black text-white">
            Start with the addresses. We’ll help shape the rest.
          </h2>
        </div>
        <Button href="/quote">Get a Quote</Button>
      </Container>
    </section>
  );
}
