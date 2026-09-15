import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  companyHighlights,
  siteConfig,
  trustLogos,
  whyUs,
} from "@/lib/site-config";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Section className="bg-text text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="About"
            title="A Montreal moving crew built for practical details."
            description="The work is simple on paper: protect the home, move efficiently, and communicate clearly."
            className="[&_h2]:text-white [&_p:last-child]:text-white/70"
          />
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/team.webp"
              alt="BleuNord Moving crew beside a moving truck"
              fill
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-accent p-4 text-text">
              <p className="text-2xl font-black">Local crew</p>
              <p className="text-xs font-black uppercase tracking-[0.14em]">
                Montreal ready
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <section className="bg-background pb-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-y border-border py-8">
            {siteConfig.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between border-b border-border py-4 last:border-b-0"
              >
                <span className="font-bold text-secondary-text">
                  {fact.label}
                </span>
                <span className="font-black text-text">{fact.value}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <article
                key={item.title}
                className="reveal border-t border-border pt-6 transition duration-300 hover:-translate-y-1"
              >
                <item.icon
                  className="size-6 text-primary-dark"
                  aria-hidden="true"
                />
                <h2 className="mt-8 text-2xl font-black text-text">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm font-medium leading-6 text-secondary-text">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="lg:col-span-2 grid gap-5 border-t border-border pt-8 sm:grid-cols-3">
            {companyHighlights.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-black text-primary-dark">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-secondary-text">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 overflow-hidden border-y border-border py-5">
            <div className="trust-marquee flex w-max gap-10 text-sm font-black uppercase tracking-[0.16em] text-secondary-text">
              {[...trustLogos, ...trustLogos].map((logo, index) => (
                <span key={`${logo}-${index}`}>{logo}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/fleet.webp"
                alt="BleuNord Moving fleet outside a Montreal building"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
              />
            </div>
            <div className="bg-surface p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-primary-dark">
                Service area
              </p>
              <h2 className="mt-4 text-3xl font-black text-text">
                Built around real Montreal access.
              </h2>
              <p className="mt-4 text-sm font-medium leading-6 text-secondary-text">
                Stairs, snow, elevator windows, narrow streets, loading zones,
                and careful condo rules are part of the operating plan.
              </p>
            </div>
          </div>
          <Button href="/quote" className="justify-self-start">
            Get a Quote
          </Button>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
