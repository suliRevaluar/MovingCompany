import { Star } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews, siteConfig } from "@/lib/site-config";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-primary-dark">
              Reviews
            </p>
            <p className="mt-6 text-7xl font-black text-text">
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
            <p className="mt-4 text-sm font-bold text-secondary-text">
              {siteConfig.reviewCount} local reviews
            </p>
          </div>
          <SectionHeading
            title="Customers notice careful prep, calm crews, and no surprise finish."
            description="A few short notes from Montreal moves."
          />
        </Container>
      </Section>
      <section className="bg-background pb-20">
        <Container>
          <figure className="mb-10 grid gap-6 bg-text p-8 text-white lg:grid-cols-[0.2fr_1fr]">
            <span className="grid size-20 place-items-center bg-accent text-2xl font-black text-text">
              {reviews[0].avatar}
            </span>
            <div>
              <blockquote className="text-3xl font-black leading-10">
                &ldquo;{reviews[0].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold text-white/70">
                {reviews[0].name} · {reviews[0].location}
              </figcaption>
            </div>
          </figure>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(1).map((review, index) => (
              <figure
                key={review.name}
                className={`reveal bg-surface p-6 transition duration-300 hover:-translate-y-1 ${
                  index === 1 ? "lg:row-span-2 lg:p-8" : ""
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid size-12 place-items-center bg-primary-dark text-sm font-black text-white">
                    {review.avatar}
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-primary-dark">
                    {review.location}
                  </span>
                </div>
                <blockquote className="text-2xl font-black leading-9 text-text">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex gap-1 text-accent">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="size-4 fill-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <figcaption className="mt-5 text-sm font-bold text-secondary-text">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
