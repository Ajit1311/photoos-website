"use client";

import { motion } from "framer-motion";
import { Camera, Zap, Users, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Camera,
    value: "2,000+",
    label: "Active Studios & Photographers",
    subtext: "Across India & Global Studios",
  },
  {
    icon: Zap,
    value: "< 1.0s",
    label: "AI Face Match Speed",
    subtext: "Instant selfie recognition",
  },
  {
    icon: Users,
    value: "1.5M+",
    label: "Photos Delivered",
    subtext: "Zero compression quality loss",
  },
  {
    icon: ShieldCheck,
    value: "99.8%",
    label: "Selection Accuracy",
    subtext: "Faster album turnaround",
  },
];

export default function StatsTicker() {
  return (
    <section className="relative -mt-8 z-20 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 lg:px-5 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#0A3F61]/5 text-[#0A3F61] transition duration-300 hover:bg-[#0A3F61] hover:text-white">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#0A3F61]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

