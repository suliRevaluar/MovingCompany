"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { moveSizes, quoteEstimateRules } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  movingFrom: z.string().trim().min(1, "Enter the pickup address."),
  movingTo: z.string().trim().min(1, "Enter the destination address."),
  movingDate: z.string().trim().min(1, "Choose a moving date."),
  moveSize: z.enum(moveSizes, { error: "Choose a move size." }),
  name: z.string().trim().min(1, "Enter your name."),
  contact: z
    .string()
    .trim()
    .min(1, "Enter a phone number or email.")
    .refine(
      (value) => /@/.test(value) || value.replace(/\D/g, "").length >= 7,
      "Enter a usable phone number or email.",
    ),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;
type FieldName = keyof QuoteFormValues;

const steps: Array<{
  label: string;
  title: string;
  fields: FieldName[];
}> = [
  {
    label: "Move",
    title: "Where are you moving?",
    fields: ["movingFrom", "movingTo"],
  },
  {
    label: "Details",
    title: "When and how big?",
    fields: ["movingDate", "moveSize"],
  },
  {
    label: "Contact",
    title: "Where should we send it?",
    fields: ["name", "contact"],
  },
];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<QuoteFormValues | null>(null);
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    trigger,
    control,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      movingFrom: "",
      movingTo: "",
      movingDate: "",
      moveSize: undefined,
      name: "",
      contact: "",
    },
    mode: "onTouched",
  });

  const watchedSize = useWatch({ control, name: "moveSize" });
  const estimate = useMemo(() => {
    const size = submitted?.moveSize ?? watchedSize;
    return size ? quoteEstimateRules[size] : null;
  }, [submitted?.moveSize, watchedSize]);

  async function goNext() {
    const valid = await trigger(steps[step].fields, { shouldFocus: true });
    if (valid) {
      setStep((current) => Math.min(current + 1, steps.length - 1));
    }
  }

  function onSubmit(values: QuoteFormValues) {
    setSubmitted(values);
  }

  function startOver() {
    setSubmitted(null);
    setStep(0);
    reset();
  }

  if (submitted) {
    return (
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-text p-6 text-white">
          <span className="grid size-12 place-items-center bg-accent text-text">
            <Check className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-8 text-3xl font-black">Your move plan is ready.</h3>
          <p className="mt-3 text-sm font-medium leading-6 text-white/70">
            Nothing was sent yet. Review the details below and use this estimate
            as a starting point for the next conversation.
          </p>
          {estimate ? (
            <div className="mt-8 border-l-4 border-accent bg-white p-5 text-text">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-primary-dark">
                Estimated range
              </p>
              <p className="mt-2 text-4xl font-black">{estimate.range}</p>
              <p className="mt-2 text-sm font-bold text-secondary-text">
                {estimate.crew} · {estimate.note}
              </p>
            </div>
          ) : null}
        </div>

        <div className="bg-white p-6">
          <h4 className="text-xl font-black text-text">Move summary</h4>
          <dl className="mt-6 grid gap-3 text-sm">
            <SummaryRow label="From" value={submitted.movingFrom} />
            <SummaryRow label="To" value={submitted.movingTo} />
            <SummaryRow label="Date" value={submitted.movingDate} />
            <SummaryRow label="Size" value={submitted.moveSize} />
            <SummaryRow label="Name" value={submitted.name} />
            <SummaryRow label="Contact" value={submitted.contact} />
          </dl>
          <button
            type="button"
            onClick={startOver}
            className="mt-6 inline-flex min-h-12 items-center justify-center border border-border bg-primary-light px-5 text-sm font-black text-text transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-dark"
          >
            Start another quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-text p-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
            Get My Quote
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Move details in 3 quick steps.
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-white/70">
            Keep your place while you move between steps. The final screen shows
            your summary and estimate.
          </p>
          <div className="mt-8 grid gap-3">
            {steps.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-3 border-l-4 p-3",
                  index === step
                    ? "border-accent bg-white text-text"
                    : "border-white/20 bg-white/8 text-white/65",
                )}
              >
                <span
                  className={cn(
                    "grid size-9 place-items-center text-sm font-black",
                    index === step
                      ? "bg-accent text-text"
                      : "bg-white/10 text-white",
                  )}
                >
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-black">{item.label}</span>
                  <span className="text-xs font-bold opacity-70">
                    {index + 1} of {steps.length}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 shadow-[0_20px_60px_rgba(16,43,58,0.08)] sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-primary-dark">
                {step + 1} of {steps.length}
              </p>
              <h3 className="mt-2 text-2xl font-black text-text">
                {steps[step].title}
              </h3>
            </div>
            <span className="grid size-12 shrink-0 place-items-center bg-primary-light text-primary-dark">
              {step === 0 ? (
                <MapPin className="size-6" aria-hidden="true" />
              ) : (
                <Sparkles className="size-6" aria-hidden="true" />
              )}
            </span>
          </div>

          <div className="mt-7">
            {step === 0 ? (
              <MoveStep register={register} errors={errors} />
            ) : null}
            {step === 1 ? (
              <DetailsStep register={register} errors={errors} />
            ) : null}
            {step === 2 ? (
              <ContactStep register={register} errors={errors} />
            ) : null}
          </div>

          {estimate && step === 1 ? (
            <div className="mt-5 border-l-4 border-primary-dark bg-primary-light p-5">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-primary-dark">
                Early estimate
              </p>
              <p className="mt-2 text-3xl font-black text-text">
                {estimate.range}
              </p>
              <p className="mt-1 text-sm font-bold text-secondary-text">
                {estimate.crew} · {estimate.note}
              </p>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(current - 1, 0))}
              disabled={step === 0}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-border bg-white px-5 text-sm font-black text-text transition hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-dark"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary-dark px-5 text-sm font-black text-white transition hover:bg-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              >
                Continue
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary-dark px-5 text-sm font-black text-white transition hover:bg-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              >
                Get My Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

function MoveStep({
  errors,
  register,
}: Pick<QuoteFieldProps, "errors" | "register">) {
  return (
    <div className="grid gap-4">
      <TextField
        error={errors.movingFrom?.message}
        label="Moving from"
        placeholder="123 Rue Saint-Denis, Montreal"
        registration={register("movingFrom")}
      />
      <TextField
        error={errors.movingTo?.message}
        label="Moving to"
        placeholder="456 Avenue du Parc, Montreal"
        registration={register("movingTo")}
      />
    </div>
  );
}

function DetailsStep({
  errors,
  register,
}: Pick<QuoteFieldProps, "errors" | "register">) {
  return (
    <div className="grid gap-4">
      <TextField
        error={errors.movingDate?.message}
        label="Moving date"
        registration={register("movingDate")}
        type="date"
      />
      <div>
        <label htmlFor="moveSize" className="text-sm font-black text-text">
          Move size
        </label>
        <select
          id="moveSize"
          aria-invalid={Boolean(errors.moveSize)}
          aria-describedby={errors.moveSize ? "moveSize-error" : undefined}
          className="mt-2 min-h-12 w-full border border-border bg-primary-light px-4 text-sm font-bold text-text outline-none transition focus:border-primary-dark focus:ring-4 focus:ring-primary/40"
          {...register("moveSize")}
        >
          <option value="">Choose size</option>
          {moveSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {errors.moveSize ? (
          <p
            id="moveSize-error"
            className="mt-2 text-sm font-bold text-primary-dark"
          >
            {errors.moveSize.message}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function ContactStep({
  errors,
  register,
}: Pick<QuoteFieldProps, "errors" | "register">) {
  return (
    <div className="grid gap-4">
      <TextField
        error={errors.name?.message}
        label="Name"
        placeholder="Your name"
        registration={register("name")}
      />
      <TextField
        error={errors.contact?.message}
        label="Phone or email"
        placeholder="(514) 555-0186 or you@email.com"
        registration={register("contact")}
      />
    </div>
  );
}

type QuoteFieldProps = {
  errors: ReturnType<typeof useForm<QuoteFormValues>>["formState"]["errors"];
  register: ReturnType<typeof useForm<QuoteFormValues>>["register"];
};

function TextField({
  error,
  label,
  placeholder,
  registration,
  type = "text",
}: {
  error?: string;
  label: string;
  placeholder?: string;
  registration: ReturnType<QuoteFieldProps["register"]>;
  type?: string;
}) {
  const id = registration.name;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-black text-text">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 min-h-12 w-full border border-border bg-primary-light px-4 text-sm font-bold text-text outline-none transition placeholder:text-secondary-text/65 focus:border-primary-dark focus:ring-4 focus:ring-primary/40"
        {...registration}
      />
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 text-sm font-bold text-primary-dark"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-l-4 border-primary-dark bg-primary-light p-4 sm:grid-cols-[120px_1fr]">
      <dt className="font-black text-primary-dark">{label}</dt>
      <dd className="font-bold text-text">{value}</dd>
    </div>
  );
}
