import { Check, Star } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  faqs,
  includedItems,
  pricing,
  siteConfig,
  trustStats,
} from "@/lib/site-config";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Section className="bg-text text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Pricing"
            title="Starting points before the detailed quote."
            description="Every move is affected by inventory, access, timing, and distance. These ranges help frame the first call."
            className="[&_h2]:text-white [&_p:last-child]:text-white/70"
          />
          <div className="grid gap-4 bg-white p-6 text-text sm:grid-cols-2">
            {trustStats.slice(0, 4).map((item) => (
              <div key={item.label} className="border-l border-border pl-4">
                <p className="text-2xl font-black">{item.value}</p>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-secondary-text">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <section className="bg-background pb-20">
        <Container>
          <div className="grid gap-0 border-y border-border lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className="reveal border-b border-border p-7 transition duration-300 hover:-translate-y-1 lg:border-b-0 lg:border-r last:lg:border-r-0"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-primary-dark">
                  {plan.tag}
                </p>
                <h2 className="mt-8 text-3xl font-black text-text">
                  {plan.name}
                </h2>
                <p className="mt-5 text-4xl font-black text-primary-dark">
                  {plan.price}
                </p>
                <p className="mt-5 text-sm font-medium leading-6 text-secondary-text">
                  {plan.details}
                </p>
                <Button
                  href="/quote"
                  variant={
                    plan.tag === "Most popular" ? "primary" : "secondary"
                  }
                  className="mt-8"
                >
                  Choose package
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionHeading
                eyebrow="Included"
                title="Protection basics come with the plan."
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
              <p className="mt-3 text-sm font-bold text-secondary-text">
                {siteConfig.rating} from {siteConfig.reviewCount} reviews
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-surface p-4"
                >
                  <Check
                    className="size-5 text-primary-dark"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Pricing questions that come up first."
            />
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((item) => (
                <details key={item.question} className="py-5">
                  <summary className="cursor-pointer font-black text-text">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm font-medium leading-6 text-secondary-text">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
