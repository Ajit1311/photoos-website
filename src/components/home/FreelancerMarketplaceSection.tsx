"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Star,
  CheckCircle2,
  Camera,
  Video,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

const talent = [
  {
    name: "Vikram Mehta",
    role: "Senior Wedding Cinematographer",
    location: "Mumbai & Destination",
    rating: "4.9",
    reviews: "64 shoots",
    gear: "Sony FX3 • DJI RS3 Pro • 35mm GM",
    badge: "Top Rated Pro",
    specialty: "Candid & Cinematic",
  },
  {
    name: "Ayesha Khan",
    role: "Lead Traditional & Portrait Shooter",
    location: "Delhi NCR • Jaipur",
    rating: "5.0",
    reviews: "82 shoots",
    gear: "Canon R5 • 85mm f/1.2 • Profoto A10",
    badge: "Verified Master",
    specialty: "Bridal Portraits",
  },
  {
    name: "Rohan Deshmukh",
    role: "Licensed Drone & FPV Specialist",
    location: "Pune • Goa • Bengaluru",
    rating: "4.9",
    reviews: "48 shoots",
    gear: "DJI Mavic 3 Pro Cine • Avata FPV",
    badge: "DGCA Certified",
    specialty: "Aerial Destination Coverage",
  },
];

export default function FreelancerMarketplaceSection() {
  return (
    <section id="marketplace" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EF8619]/30 bg-[#EF8619]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#EF8619]">
              <BriefcaseBusiness size={13} />
              On-Demand Creative Network
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl lg:text-[46px]">
              Need extra shooters?{" "}
              <span className="text-[#3495A1]">Hire verified pros instantly.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Never turn down a lucrative wedding or corporate gig due to team
              bandwidth. Hire pre-vetted photographers, video editors, and drone
              pilots backed by verified portfolios and ratings.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/freelancer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0A3F61] shadow-xs transition hover:border-[#3495A1] hover:bg-slate-50"
            >
              Browse Creative Network
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Talent Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {talent.map((pro, idx) => (
            <motion.div
              key={pro.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-[28px] border border-slate-200/90 bg-[#f8fafc] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#3495A1] hover:bg-white hover:shadow-xl hover:shadow-[#0A3F61]/5"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A3F61] to-[#3495A1] text-white font-bold text-lg shadow-md">
                      {pro.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-[#0A3F61]">
                          {pro.name}
                        </h3>
                        <CheckCircle2 size={16} className="text-[#3495A1]" />
                      </div>
                      <p className="text-xs text-slate-500">{pro.role}</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#EF8619]/15 px-2.5 py-1 text-[11px] font-bold text-[#EF8619]">
                    {pro.badge}
                  </span>
                </div>

                <div className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{pro.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-slate-400" />
                    <span className="truncate">{pro.gear}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-[#EF8619]" />
                    <span className="font-semibold text-slate-800">
                      {pro.specialty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-slate-200/80 pt-4">
                <div className="flex items-center gap-1.5">
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-800">
                    {pro.rating}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    ({pro.reviews})
                  </span>
                </div>

                <Link
                  href="/freelancer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0A3F61] transition group-hover:text-[#EF8619]"
                >
                  View Profile & Book
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner for freelancers wanting to join */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A3F61] text-white">
              <Camera size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A3F61]">
                Are you a freelance photographer, videographer, or editor?
              </p>
              <p className="text-xs text-slate-500">
                Create your verified profile and receive direct shoot inquiries from top studios.
              </p>
            </div>
          </div>

          <Link
            href="/freelancer/create"
            className="shrink-0 rounded-full bg-[#0A3F61] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#3495A1]"
          >
            Join as Freelancer
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

