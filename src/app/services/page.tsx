import { Check } from "lucide-react";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceImages } from "@/lib/images";
import { services } from "@/lib/site-config";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Moving services for Montreal homes, offices, and tight timelines."
            description="Pick the move type closest to your day. The quote flow can handle the details."
          />
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/fleet.webp"
              alt="Baby-blue moving trucks ready for Montreal service"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-accent p-4 text-text">
              <p className="text-2xl font-black">6 service paths</p>
              <p className="text-xs font-black uppercase tracking-[0.14em]">
                one careful crew
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <section className="bg-background pb-20">
        <Container className="grid gap-10">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-6 border-t border-border pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
              <div className={index % 2 ? "lg:order-2" : undefined}>
                <p className="text-sm font-black text-primary-dark">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-4xl font-black text-text">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-xl text-base font-medium leading-7 text-secondary-text">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 text-sm font-bold text-text sm:grid-cols-3 lg:grid-cols-1">
                  {service.inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check
                        className="size-4 text-primary-dark"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/quote" variant="secondary" className="mt-8">
                  Quote this move
                </Button>
              </div>
              <div className="reveal relative aspect-[16/10] overflow-hidden bg-primary-light transition duration-300 hover:-translate-y-1">
                {serviceImages[service.title] ? (
                  <Image
                    src={serviceImages[service.title]}
                    alt={`${service.title} moving service`}
                    fill
                    sizes="(min-width: 1024px) 48vw, 92vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-primary-dark">
                    <service.icon className="size-14" aria-hidden="true" />
                  </div>
                )}
              </div>
            </article>
          ))}
          <Button href="/quote" className="justify-self-start">
            Get a Quote
          </Button>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
