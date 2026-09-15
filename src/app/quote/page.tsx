import { Check, Star } from "lucide-react";
import Image from "next/image";
import { QuoteForm } from "@/components/quote-form";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, trustStats } from "@/lib/site-config";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Section className="bg-text text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Quote"
              title="Get a moving estimate without the phone tag."
              description="A fast 3-step flow for addresses, timing, move size, and the best way to reach you."
              className="[&_h2]:text-white [&_p:last-child]:text-white/70"
            />
            <div className="mt-8 flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-accent"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-3 text-sm font-bold text-white/70">
              {siteConfig.rating} rating · insured local crews · no hidden fees
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/hero-moving.webp"
              alt="Movers loading wrapped furniture into a moving truck"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>
      <section className="bg-background py-12">
        <Container>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((item) => (
              <div
                key={item.label}
                className="border-l border-border bg-surface p-5"
              >
                <p className="text-2xl font-black text-text">{item.value}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-secondary-text">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.26fr_1fr]">
            <div className="hidden border-y border-border py-6 lg:block">
              {["Move", "Details", "Contact"].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 border-b border-border py-4 last:border-b-0"
                >
                  <span className="grid size-8 place-items-center bg-primary-dark text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-black text-text">{step}</span>
                </div>
              ))}
            </div>
            <QuoteForm />
          </div>
        </Container>
      </section>
      <section className="bg-surface py-10">
        <Container className="grid gap-4 sm:grid-cols-3">
          {[
            "Furniture protection included",
            "Estimate shown before contact",
            "Easy to connect later",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check className="size-5 text-primary-dark" aria-hidden="true" />
              <span className="font-bold text-text">{item}</span>
            </div>
          ))}
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
