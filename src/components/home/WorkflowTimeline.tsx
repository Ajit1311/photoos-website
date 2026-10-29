"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarCheck,
  UserCheck,
  UploadCloud,
  ScanFace,
  CheckCircle,
  Truck,
  TrendingUp,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Client CRM & Booking",
    desc: "Keep contracts, client details, shooting dates, and conversations in one centralized dashboard.",
    icon: Users,
  },
  {
    step: "02",
    title: "Shoot & Event Planning",
    desc: "Schedule crews, equipment checklists, and shot lists with shared calendars.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Assemble Freelancer Crew",
    desc: "Hire second shooters and drone cinematographers from PhotoOS Marketplace when required.",
    icon: UserCheck,
  },
  {
    step: "04",
    title: "Instant High-Speed Upload",
    desc: "Batch upload high-res RAW/JPEGs into branded galleries with automatic folder hierarchies.",
    icon: UploadCloud,
  },
  {
    step: "05",
    title: "Selfie AI Face Indexing",
    desc: "Neural AI detects and tags guests in milliseconds so everyone finds their photos with 1 selfie.",
    icon: ScanFace,
  },
  {
    step: "06",
    title: "Interactive Client Selection",
    desc: "Clients heart, comment, and approve their album photos without confusing chat screenshots.",
    icon: CheckCircle,
  },
  {
    step: "07",
    title: "Lightroom Export & Delivery",
    desc: "Sync approved photo selections directly to Lightroom or deliver full-res ZIPs in one click.",
    icon: Truck,
  },
  {
    step: "08",
    title: "Scale Your Studio Brand",
    desc: "Collect client reviews, automate referral follow-ups, and double your booking volume.",
    icon: TrendingUp,
  },
];

export default function WorkflowTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0A3F61]/20 bg-[#0A3F61]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0A3F61]"
          >
            One Unified Operating System
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl"
          >
            From first inquiry to final album delivery.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Say goodbye to juggling 6 different disconnected tools. PhotoOS streamlines
            every phase of your photography business.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-[24px] border border-slate-200/90 bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#3495A1] hover:shadow-xl hover:shadow-[#0A3F61]/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black tracking-wider text-[#EF8619]">
                      STEP {step.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A3F61]/5 text-[#0A3F61] transition duration-300 group-hover:bg-[#0A3F61] group-hover:text-white">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-bold text-[#0A3F61]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3495A1] to-[#EF8619] transition-all duration-500 group-hover:w-full"
                    style={{ width: `${((idx + 1) / 8) * 100}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

