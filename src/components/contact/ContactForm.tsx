"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Send,
  ShieldCheck,
} from "lucide-react";

import { supabase } from "@/lib/supabase/client";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const formElement = event.currentTarget;

    if (isSubmitting) {
      return;
    }

    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const form =
        new FormData(event.currentTarget);

      const name =
        String(form.get("name") ?? "").trim();

      const email =
        String(form.get("email") ?? "").trim();

      const phone =
        String(form.get("phone") ?? "").trim();

      const enquiry =
        String(form.get("enquiry") ?? "").trim();

      const subject =
        String(form.get("subject") ?? "").trim();

      const message =
        String(form.get("message") ?? "").trim();

      const {
        data,
        error,
      } = await supabase.functions.invoke(
        "website-contact",
        {
          method: "POST",
          body: {
            name,
            email,
            phone,
            enquiry,
            subject,
            message,
          },
        },
      );

      if (error) {
        let detail = error.message;

        try {
          const context =
            (error as { context?: Response }).context;

          if (context) {
            const body =
              await context.clone().text();

            if (body) {
              detail =
                `${error.message} | ${body}`;
            }
          }
        } catch {
          // Keep original error message.
        }

        throw new Error(detail);
      }

      if (!data?.success) {
        throw new Error(
          data?.error?.message ??
            data?.error ??
            "Unable to submit your enquiry.",
        );
      }

      setSuccessMessage(
        "Thank you! Your enquiry has been received. Our team will get back to you soon.",
      );

      formElement.reset();
    } catch (error) {
      console.error(
        "CONTACT_FORM :: submission failed",
        error,
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#3495A1]/10 via-transparent to-[#EF8619]/10 blur-xl" />

      <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(10,63,97,0.10)] sm:p-8 lg:p-10">
        <div className="mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A3F61] text-white shadow-lg shadow-[#0A3F61]/15">
            <Send size={20} />
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-[-0.025em] text-[#0A3F61] sm:text-3xl">
            Send us a message
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Fill in the details below and tell us how we can help.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                maxLength={200}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-[#3495A1] focus:bg-white focus:ring-4 focus:ring-[#3495A1]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                maxLength={320}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-[#3495A1] focus:bg-white focus:ring-4 focus:ring-[#3495A1]/10"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                maxLength={50}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-[#3495A1] focus:bg-white focus:ring-4 focus:ring-[#3495A1]/10"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Enquiry Type
              </label>

              <select
                id="enquiry"
                name="enquiry"
                defaultValue=""
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-[#102a43] outline-none transition focus:border-[#3495A1] focus:bg-white focus:ring-4 focus:ring-[#3495A1]/10"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="product">
                  Product Enquiry
                </option>
                <option value="sales">
                  Sales &amp; Plans
                </option>
                <option value="support">
                  Support
                </option>
                <option value="partnership">
                  Partnership
                </option>
                <option value="general">
                  General Enquiry
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              maxLength={300}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-[#3495A1] focus:bg-white focus:ring-4 focus:ring-[#3495A1]/10"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us a little about your requirement..."
              required
              maxLength={10000}
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm leading-6 text-[#102a43] outline-none transition placeholder:text-slate-400 focus:border-[#3495A1] focus:bg-white focus:ring-4 focus:ring-[#3495A1]/10"
            />
          </div>

          {successMessage && (
            <div
              role="status"
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium leading-6 text-emerald-700"
            >
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-700"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#0A3F61] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A3F61]/15 transition hover:-translate-y-0.5 hover:bg-[#1f70b8] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting
              ? "Sending..."
              : "Send Message"}

            {!isSubmitting && (
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            )}
          </button>

          <p className="flex items-start gap-2 text-xs leading-5 text-slate-400">
            <ShieldCheck size={15} className="mt-0.5 shrink-0" />
            Your information is used only to respond to your enquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
