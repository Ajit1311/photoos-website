"use client";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Globe,
  Link2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Save,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  upsertFreelancerProfile,
} from "@/lib/api/freelancer-marketplace";
import {
  completeFreelancerOtpLogin,
  sendFreelancerEmailOtp,
} from "@/lib/api/freelancer-onboarding";
import {
  acceptCurrentClientLegalCompliance,
  getCurrentLegalComplianceAgreements,
  getCurrentClientComplianceStatus,
} from "@/lib/api/legal-compliance";

function FreelancerCreateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [primaryRole, setPrimaryRole] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [website, setWebsite] = useState("");

  const [dailyRate, setDailyRate] = useState("");
  const [minimumBookingDays, setMinimumBookingDays] = useState("1");
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  const [services, setServices] = useState<string[]>([]);
  const [service, setService] = useState("");

  const [portfolio, setPortfolio] = useState<string[]>([]);
  const [portfolioUrl, setPortfolioUrl] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [error, setError] = useState("");

  const [resumeMode, setResumeMode] = useState(false);
  const [checkingCompliance, setCheckingCompliance] =
    useState(false);
  const [legalRequired, setLegalRequired] = useState(false);
  const [legalAccepted, setLegalAccepted] = useState(false);
  const [legalLanguage, setLegalLanguage] =
    useState<"en" | "mr">("en");
  const [legalAgreements, setLegalAgreements] =
    useState<unknown[]>([]);
  const [legalAgreementIndex, setLegalAgreementIndex] =
    useState(0);
  const [legalReadComplete, setLegalReadComplete] =
    useState(false);
  const [legalReadConfirmed, setLegalReadConfirmed] =
    useState(false);
  const [acceptingLegal, setAcceptingLegal] =
    useState(false);
  const [creatingProfile, setCreatingProfile] =
    useState(false);


  const DRAFT_KEY =
    "photoos:freelancer-create:draft";

  const saveDraft = () => {
    if (typeof window === "undefined") return;

    const draft = {
      fullName,
      phone,
      email,
      bio,
      primaryRole,
      experience,
      location,
      city,
      state,
      instagram,
      facebook,
      youtube,
      website,
      dailyRate,
      minimumBookingDays,
      cancellationPolicy,
      services,
      service,
      portfolio,
      portfolioUrl,
    };

    window.localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify(draft),
    );
  };

  const clearDraft = () => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(DRAFT_KEY);
  };

  useEffect(() => {
    if (searchParams.get("resume") !== "1") {
      return;
    }

    setResumeMode(true);
    setCheckingCompliance(true);

    try {
      const raw =
        window.localStorage.getItem(DRAFT_KEY);

      if (raw) {
        const draft = JSON.parse(raw) as Record<
          string,
          unknown
        >;

        if (typeof draft.fullName === "string")
          setFullName(draft.fullName);
        if (typeof draft.phone === "string")
          setPhone(draft.phone);
        if (typeof draft.email === "string")
          setEmail(draft.email);
        if (typeof draft.bio === "string")
          setBio(draft.bio);
        if (typeof draft.primaryRole === "string")
          setPrimaryRole(draft.primaryRole);
        if (typeof draft.experience === "string")
          setExperience(draft.experience);
        if (typeof draft.location === "string")
          setLocation(draft.location);
        if (typeof draft.city === "string")
          setCity(draft.city);
        if (typeof draft.state === "string")
          setState(draft.state);
        if (typeof draft.instagram === "string")
          setInstagram(draft.instagram);
        if (typeof draft.facebook === "string")
          setFacebook(draft.facebook);
        if (typeof draft.youtube === "string")
          setYoutube(draft.youtube);
        if (typeof draft.website === "string")
          setWebsite(draft.website);
        if (typeof draft.dailyRate === "string")
          setDailyRate(draft.dailyRate);
        if (
          typeof draft.minimumBookingDays ===
          "string"
        )
          setMinimumBookingDays(
            draft.minimumBookingDays,
          );
        if (
          typeof draft.cancellationPolicy ===
          "string"
        )
          setCancellationPolicy(
            draft.cancellationPolicy,
          );
        if (Array.isArray(draft.services))
          setServices(
            draft.services.filter(
              (item): item is string =>
                typeof item === "string",
            ),
          );
        if (typeof draft.service === "string")
          setService(draft.service);
        if (Array.isArray(draft.portfolio))
          setPortfolio(
            draft.portfolio.filter(
              (item): item is string =>
                typeof item === "string",
            ),
          );
        if (typeof draft.portfolioUrl === "string")
          setPortfolioUrl(draft.portfolioUrl);
      }
    } catch (restoreError) {
      console.error(
        "[FREELANCER RESUME] Draft restore failed:",
        restoreError,
      );
    }

    let cancelled = false;

    const resolveCompliance = async () => {
      try {
        const status =
          await getCurrentClientComplianceStatus();

        if (cancelled) return;

        if (status.compliant) {
          setLegalAccepted(true);
          setLegalRequired(false);
        } else {
          setLegalRequired(true);

          const agreements =
            await getCurrentLegalComplianceAgreements("en");

          if (!cancelled) {
            setLegalLanguage("en");
            setLegalAgreements([...agreements]);
            setLegalAgreementIndex(0);
            setLegalReadComplete(false);
            setLegalReadConfirmed(false);
          }
        }
      } catch (complianceError) {
        if (!cancelled) {
          setError(
            complianceError instanceof Error
              ? complianceError.message
              : "Unable to verify legal compliance.",
          );
        }
      } finally {
        if (!cancelled) {
          setCheckingCompliance(false);
        }
      }
    };

    void resolveCompliance();

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  const addService = () => {
    const value = service.trim();

    if (!value) return;

    setServices((current) =>
      current.includes(value) ? current : [...current, value],
    );
    setService("");
  };

  const addPortfolio = () => {
    const value = portfolioUrl.trim();

    if (!value) return;

    setPortfolio((current) =>
      current.includes(value) ? current : [...current, value],
    );
    setPortfolioUrl("");
  };

  const submit = async (
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const parsedExperience = experience.trim()
      ? Number.parseInt(
          experience.replace(/\D/g, ""),
          10,
        )
      : null;

    const parsedDailyRate = dailyRate.trim()
      ? Number.parseFloat(
          dailyRate.replace(/,/g, ""),
        )
      : null;

    const parsedMinimumBookingDays =
      minimumBookingDays.trim()
        ? Number.parseInt(
            minimumBookingDays,
            10,
          )
        : 1;

    if (
      parsedExperience !== null &&
      Number.isNaN(parsedExperience)
    ) {
      setError(
        "Please enter a valid experience value.",
      );
      return;
    }

    if (
      parsedDailyRate !== null &&
      Number.isNaN(parsedDailyRate)
    ) {
      setError(
        "Please enter a valid daily rate.",
      );
      return;
    }

    if (
      Number.isNaN(parsedMinimumBookingDays) ||
      parsedMinimumBookingDays < 1
    ) {
      setError(
        "Minimum booking days must be at least 1.",
      );
      return;
    }

    setSubmitting(true);

    try {
      saveDraft();

      await sendFreelancerEmailOtp(
        email.trim(),
      );

      setOtp("");
      setOtpStep(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send verification code.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const createFreelancerProfile = async () => {
    setError("");
    setCreatingProfile(true);

    try {
      const parsedExperience =
        experience.trim()
          ? Number.parseInt(
              experience.replace(/\D/g, ""),
              10,
            )
          : null;

      const parsedDailyRate =
        dailyRate.trim()
          ? Number.parseFloat(
              dailyRate.replace(/,/g, ""),
            )
          : null;

      const parsedMinimumBookingDays =
        minimumBookingDays.trim()
          ? Number.parseInt(
              minimumBookingDays,
              10,
            )
          : 1;

      await upsertFreelancerProfile({
        display_name: fullName.trim(),
        bio: bio.trim() || undefined,
        phone: phone.trim() || undefined,
        email: email.trim() || undefined,
        experience_years:
          parsedExperience ?? undefined,
        primary_role:
          primaryRole.trim() || undefined,
        skills: services,
        location:
          location.trim() || undefined,
        city: city.trim() || undefined,
        state:
          state.trim() || undefined,
        country: "India",
        portfolio_urls: portfolio,
        instagram_url:
          instagram.trim() || undefined,
        facebook_url:
          facebook.trim() || undefined,
        youtube_url:
          youtube.trim() || undefined,
        website_url:
          website.trim() || undefined,
        daily_rate:
          parsedDailyRate ?? undefined,
        currency: "INR",
        minimum_booking_days:
          parsedMinimumBookingDays,
        cancellation_policy:
          cancellationPolicy.trim() ||
          undefined,
      });

      clearDraft();

      router.push(
        "/freelancer?created=1",
      );
    } catch (creationError) {
      setError(
        creationError instanceof Error
          ? creationError.message
          : "Unable to create your freelancer profile.",
      );
    } finally {
      setCreatingProfile(false);
    }
  };

  const verifyOtpAndCreateProfile = async () => {
    setError("");

    const normalizedOtp =
      otp.replace(/\D/g, "");

    if (normalizedOtp.length !== 6) {
      setError("Enter the 6-digit OTP.");
      return;
    }

    saveDraft();
    setVerifyingOtp(true);

    try {
      await completeFreelancerOtpLogin(
        email.trim(),
        normalizedOtp,
      );
    } catch (verificationError) {
      setError(
        verificationError instanceof Error
          ? verificationError.message
          : "Unable to verify OTP.",
      );
      setVerifyingOtp(false);
    }
  };

  const changeLegalLanguage = async (
    nextLanguage: "en" | "mr",
  ) => {
    if (
      nextLanguage === legalLanguage ||
      acceptingLegal ||
      creatingProfile ||
      checkingCompliance
    ) {
      return;
    }

    setError("");
    setCheckingCompliance(true);

    try {
      const status =
        await getCurrentClientComplianceStatus(nextLanguage);

      if (status.compliant) {
        setLegalLanguage(nextLanguage);
        setLegalAccepted(true);
        setLegalRequired(false);
        setLegalAgreements([]);
        setLegalAgreementIndex(0);
        setLegalReadComplete(false);
        setLegalReadConfirmed(false);
        return;
      }

      const agreements =
        await getCurrentLegalComplianceAgreements(nextLanguage);

      setLegalLanguage(nextLanguage);
      setLegalAccepted(false);
      setLegalRequired(true);
      setLegalAgreements([...agreements]);
      setLegalAgreementIndex(0);
      setLegalReadComplete(false);
      setLegalReadConfirmed(false);
    } catch (languageError) {
      setError(
        languageError instanceof Error
          ? languageError.message
          : "Unable to load agreements in the selected language.",
      );
    } finally {
      setCheckingCompliance(false);
    }
  };

  const acceptLegalAndCreateProfile = async () => {
    setError("");
    setAcceptingLegal(true);

    try {
      const result =
        await acceptCurrentClientLegalCompliance(legalLanguage);

      if (!result.compliant) {
        throw new Error(
          "Legal compliance acceptance could not be completed.",
        );
      }

      setLegalAccepted(true);
      setLegalRequired(false);

      await createFreelancerProfile();
    } catch (legalError) {
      setError(
        legalError instanceof Error
          ? legalError.message
          : "Unable to accept legal agreements.",
      );
    } finally {
      setAcceptingLegal(false);
    }
  };

  const continueLegalAgreement = () => {
    if (!legalReadComplete || !legalReadConfirmed) {
      return;
    }

    const nextIndex = legalAgreementIndex + 1;

    if (nextIndex < legalAgreements.length) {
      setLegalAgreementIndex(nextIndex);
      setLegalReadComplete(false);
      setLegalReadConfirmed(false);
      return;
    }

    void acceptLegalAndCreateProfile();
  };


  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7fafc]">
        <section className="relative overflow-hidden bg-[#071f31]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,134,25,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(52,149,161,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
            <Link
              href="/freelancer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Freelancer Marketplace
            </Link>

            <div className="mt-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <BriefcaseBusiness
                  size={16}
                  className="text-[#EF8619]"
                />
                PhotoOS Freelancer Marketplace
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Create Your Freelancer Profile
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Tell photography studios what you do, showcase your work
                and make your professional skills discoverable on PhotoOS.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-[#3495A1]" />
                  Free listing
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-[#3495A1]" />
                  Professional profile
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-[#3495A1]" />
                  Studio discovery
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <form onSubmit={submit} className="space-y-6">
            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Basic Information"
                text="Add the professional information studios will see on your profile."
              />

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field
                  label="Full Name"
                  icon={<UserRound size={16} />}
                  placeholder="Your full name"
                  required
                  value={fullName}
                  onChange={setFullName}
                />

                <Field
                  label="Phone Number"
                  icon={<Phone size={16} />}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  value={phone}
                  onChange={setPhone}
                />

                <Field
                  label="Email"
                  icon={<Mail size={16} />}
                  placeholder="your@email.com"
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                />

                <Field
                  label="Primary Role"
                  icon={<BriefcaseBusiness size={16} />}
                  placeholder="Photographer / Editor / Videographer"
                  value={primaryRole}
                  onChange={setPrimaryRole}
                />

                <Field
                  label="Experience"
                  icon={<BriefcaseBusiness size={16} />}
                  placeholder="e.g. 5 years"
                  value={experience}
                  onChange={setExperience}
                />
              </div>

              <div className="mt-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    About You
                  </span>
                  <textarea
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                    placeholder="Tell studios about your experience, style and professional strengths..."
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0A3F61] focus:ring-2 focus:ring-[#0A3F61]/10"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Location"
                text="Help nearby studios discover you."
              />

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field
                  label="Location"
                  icon={<MapPin size={16} />}
                  placeholder="Area / locality"
                  value={location}
                  onChange={setLocation}
                />

                <Field
                  label="City"
                  placeholder="City"
                  value={city}
                  onChange={setCity}
                />

                <Field
                  label="State"
                  placeholder="State"
                  value={state}
                  onChange={setState}
                />

                <Field
                  label="Country"
                  placeholder="India"
                  value="India"
                  onChange={() => undefined}
                />
              </div>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Services & Skills"
                text="Add the services you provide to studios and clients."
              />

              <div className="mt-7 flex gap-3">
                <input
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addService();
                    }
                  }}
                  placeholder="Wedding Photography, Drone, Editing..."
                  className="h-12 flex-1 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0A3F61]"
                />

                <button
                  type="button"
                  onClick={addService}
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#0A3F61] px-5 text-sm font-bold text-white"
                >
                  <Plus size={16} />
                  Add
                </button>
              </div>

              {services.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {services.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#0A3F61]/5 px-4 py-2 text-xs font-bold text-[#0A3F61]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Portfolio"
                text="Add links where studios can see your work."
              />

              <div className="mt-7 flex gap-3">
                <input
                  value={portfolioUrl}
                  onChange={(event) =>
                    setPortfolioUrl(event.target.value)
                  }
                  placeholder="https://your-portfolio.com"
                  className="h-12 flex-1 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0A3F61]"
                />

                <button
                  type="button"
                  onClick={addPortfolio}
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#0A3F61] px-5 text-sm font-bold text-white"
                >
                  <Plus size={16} />
                  Add
                </button>
              </div>

              {portfolio.length > 0 && (
                <div className="mt-5 space-y-2">
                  {portfolio.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"
                    >
                      <Globe size={15} />
                      <span className="break-all">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Social & Professional Links"
                text="Connect your professional social profiles."
              />

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field
                  label="Instagram"
                  icon={<Link2 size={16} />}
                  placeholder="Instagram profile URL"
                  value={instagram}
                  onChange={setInstagram}
                />

                <Field
                  label="Facebook"
                  icon={<Link2 size={16} />}
                  placeholder="Facebook profile URL"
                  value={facebook}
                  onChange={setFacebook}
                />

                <Field
                  label="YouTube"
                  icon={<Link2 size={16} />}
                  placeholder="YouTube channel URL"
                  value={youtube}
                  onChange={setYoutube}
                />

                <Field
                  label="Website"
                  icon={<Globe size={16} />}
                  placeholder="Website / portfolio URL"
                  value={website}
                  onChange={setWebsite}
                />
              </div>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle
                title="Booking Information"
                text="Optional information that helps studios understand your availability and pricing."
              />

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field
                  label="Daily Rate"
                  placeholder="e.g. 5000"
                  type="number"
                  value={dailyRate}
                  onChange={setDailyRate}
                />

                <Field
                  label="Minimum Booking Days"
                  placeholder="1"
                  type="number"
                  value={minimumBookingDays}
                  onChange={setMinimumBookingDays}
                />
              </div>

              <div className="mt-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    Cancellation Policy
                  </span>
                  <textarea
                    value={cancellationPolicy}
                    onChange={(event) =>
                      setCancellationPolicy(event.target.value)
                    }
                    placeholder="Optional cancellation policy"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0A3F61] focus:ring-2 focus:ring-[#0A3F61]/10"
                  />
                </label>
              </div>
            </section>

            {otpStep && (
              <section className="rounded-[28px] border border-[#0A3F61]/15 bg-white p-6 shadow-sm sm:p-8">
                <div className="mx-auto max-w-xl text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A3F61] text-white">
                    <Mail size={22} />
                  </div>

                  <h2 className="mt-5 text-2xl font-black text-[#0A3F61]">
                    Verify your email
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    We sent a 6-digit OTP to{" "}
                    <span className="font-semibold text-slate-700">
                      {email.trim()}
                    </span>
                  </p>

                  <input
                    value={otp}
                    onChange={(event) =>
                      setOtp(
                        event.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6),
                      )
                    }
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    placeholder="000000"
                    className="mx-auto mt-6 block w-full max-w-xs rounded-2xl border border-slate-200 px-5 py-4 text-center text-2xl font-black tracking-[0.35em] outline-none focus:border-[#0A3F61] focus:ring-2 focus:ring-[#0A3F61]/10"
                  />

                  <button
                    type="button"
                    onClick={verifyOtpAndCreateProfile}
                    disabled={verifyingOtp}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#EF8619] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#0A3F61] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {verifyingOtp
                      ? "Verifying & Creating..."
                      : "Verify OTP & Create Profile"}
                    <ArrowRight size={17} />
                  </button>

                  <p className="mt-4 text-xs text-slate-400">
                    Your form data will be submitted after OTP verification.
                  </p>
                </div>
              </section>
            )}

            {resumeMode && checkingCompliance && (
              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#EF8619]" />
                  <p className="text-sm font-semibold text-slate-600">
                    Verifying your legal compliance...
                  </p>
                </div>
              </section>
            )}

            {resumeMode && legalRequired && !checkingCompliance && (
              <section className="relative isolate overflow-hidden rounded-[30px] border border-[#0A3F61]/10 bg-white p-5 shadow-[0_24px_80px_-35px_rgba(10,63,97,0.35)] sm:p-8 lg:p-10">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-[radial-gradient(ellipse_at_top_left,rgba(52,149,161,0.16),transparent_65%),radial-gradient(ellipse_at_top_right,rgba(239,134,25,0.12),transparent_60%)]" />
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#3495A1]/20 bg-[#3495A1]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0A3F61]">
                        <span className="h-2 w-2 rounded-full bg-[#3495A1]" />
                        PhotoOS · Trust &amp; transparency
                      </span>
                      <h2 className="mt-4 text-2xl font-black tracking-tight text-[#0A3F61] sm:text-3xl">Legal compliance</h2>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Please review each required agreement. Your consent will be recorded for the language you select.</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 text-xs font-bold text-slate-600 shadow-sm backdrop-blur">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A3F61] text-white"><Check size={16} /></span>
                      Secure consent
                    </div>
                  </div>

                <div className="mt-7 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:p-5">
                  <label
                    htmlFor="freelancer-legal-language"
                    className="mb-3 block text-xs font-extrabold uppercase tracking-[0.12em] text-slate-600"
                  >
                    Agreement language / कागदपत्रांची भाषा
                  </label>
                  <select
                    id="freelancer-legal-language"
                    value={legalLanguage}
                    onChange={(event) =>
                      void changeLegalLanguage(
                        event.target.value as "en" | "mr",
                      )
                    }
                    disabled={
                      acceptingLegal ||
                      creatingProfile ||
                      checkingCompliance
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-[#0A3F61] shadow-sm outline-none transition focus:border-[#3495A1] focus:ring-4 focus:ring-[#3495A1]/10 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="en">English</option>
                    <option value="mr">मराठी (Marathi)</option>
                  </select>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Your consent will be recorded for the agreements in the
                    selected language. / तुमची संमती निवडलेल्या भाषेतील
                    करारांसाठी नोंदवली जाईल.
                  </p>
                </div>

                {legalAgreements.length > 0 ? (() => {
                  const agreement =
                    legalAgreements[legalAgreementIndex] as Record<
                      string,
                      unknown
                    >;

                  const agreementType =
                    typeof agreement.agreement_type === "string"
                      ? agreement.agreement_type
                      : `Agreement ${legalAgreementIndex + 1}`;

                  const title =
                    typeof agreement.title === "string"
                      ? agreement.title
                      : agreementType
                          .replaceAll("_", " ")
                          .replace(
                            /\b\w/g,
                            (letter) => letter.toUpperCase(),
                          );

                  const version =
                    typeof agreement.version === "string"
                      ? agreement.version
                      : "";

                  const languageCode =
                    typeof agreement.language_code === "string"
                      ? agreement.language_code.toUpperCase()
                      : "";

                  const content =
                    typeof agreement.content_markdown === "string"
                      ? agreement.content_markdown
                      : "";

                  return (
                    <>
                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3495A1]">
                            Agreement {legalAgreementIndex + 1} of{" "}
                            {legalAgreements.length}
                          </p>

                          <h3 className="mt-2 text-xl font-black tracking-tight text-[#0A3F61] sm:text-2xl">
                            {title}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                          {version && (
                            <span className="rounded-full bg-slate-100 px-3 py-1.5">
                              Version {version}
                            </span>
                          )}

                          {languageCode && (
                            <span className="rounded-full bg-slate-100 px-3 py-1.5">
                              {languageCode}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-5" aria-label={`Agreement ${legalAgreementIndex + 1} of ${legalAgreements.length}`}>
                        <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold text-slate-500">
                          <span>Review progress</span>
                          <span className="tabular-nums text-[#0A3F61]">{legalAgreementIndex + 1} / {legalAgreements.length}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full rounded-full bg-gradient-to-r from-[#3495A1] to-[#0A3F61] transition-[width] duration-300" style={{ width: `${((legalAgreementIndex + 1) / legalAgreements.length) * 100}%` }} />
                        </div>
                      </div>

                      <div
                        onScroll={(event) => {
                          const element = event.currentTarget;
                          const reachedBottom =
                            element.scrollTop + element.clientHeight >=
                            element.scrollHeight - 8;

                          if (reachedBottom) {
                            setLegalReadComplete(true);
                          }
                        }}
                        className="mt-5 h-[min(52vh,520px)] min-h-[280px] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200/90 bg-[#fbfdff] p-5 text-sm leading-7 text-slate-700 shadow-[inset_0_1px_3px_rgba(15,23,42,0.04)] sm:p-7 sm:text-[15px] sm:leading-8"
                      >
                        <div className="whitespace-pre-wrap break-words">
                          {content || "Legal agreement content is unavailable."}
                        </div>

                        <div className="mt-8 border-t border-slate-200 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                          End of Agreement
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-[#3495A1]/20 bg-[#3495A1]/5 p-4">
                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            checked={legalReadConfirmed}
                            disabled={!legalReadComplete}
                            onChange={(event) =>
                              setLegalReadConfirmed(event.target.checked)
                            }
                            className="mt-1 h-5 w-5 rounded border-slate-300 accent-[#EF8619] disabled:cursor-not-allowed"
                          />

                          <span className="text-sm font-semibold leading-6 text-slate-700">
                            I confirm that I have read this entire agreement.
                          </span>
                        </label>

                        {!legalReadComplete && (
                          <p className="mt-3 text-xs font-semibold text-slate-500">
                            Please scroll to the end of the agreement to enable
                            the confirmation.
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={continueLegalAgreement}
                        disabled={
                          !legalReadComplete ||
                          !legalReadConfirmed ||
                          acceptingLegal ||
                          creatingProfile
                        }
                        className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#EF8619] to-[#e9750b] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_28px_-12px_rgba(239,134,25,0.8)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EF8619]/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0"
                      >
                        {acceptingLegal || creatingProfile
                          ? "Accepting & Creating..."
                          : legalAgreementIndex + 1 < legalAgreements.length
                            ? "Accept & Continue"
                            : "Accept Legal Agreements & Create Profile"}

                        <ArrowRight size={18} />
                      </button>
                    </>
                  );
                })() : (
                  <p className="mt-6 text-sm text-slate-500">
                    Current legal agreements are being prepared.
                  </p>
                )}
              </section>
            )}

            {resumeMode &&
              legalAccepted &&
              !checkingCompliance &&
              !creatingProfile && (
                <section className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-sm font-bold text-emerald-700">
                    Legal compliance verified. Your profile is ready to be created.
                  </p>

                  <button
                    type="button"
                    onClick={() => void createFreelancerProfile()}
                    disabled={creatingProfile}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#EF8619] px-6 py-3 text-sm font-black text-white transition hover:bg-[#0A3F61] disabled:opacity-60"
                  >
                    {creatingProfile
                      ? "Creating Profile..."
                      : "Continue & Create Profile"}
                    <ArrowRight size={17} />
                  </button>
                </section>
              )}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
                {error}
              </div>
            )}

            <div className="rounded-2xl border border-[#3495A1]/20 bg-[#3495A1]/5 p-5 text-sm leading-6 text-slate-600">
              By submitting your profile, you are creating a freelancer
              listing on the PhotoOS marketplace. Your private contact
              information will not be exposed as part of the public
              freelancer listing.
            </div>

            <button
              type="submit"
              disabled={
                submitting ||
                otpStep ||
                resumeMode ||
                checkingCompliance ||
                legalRequired ||
                legalAccepted ||
                creatingProfile
              }
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EF8619] px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#0A3F61] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={18} />
              {submitting
                ? "Creating Your Freelancer Profile..."
                : "Create Free Freelancer Listing"}
              {!submitting && (
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SectionTitle({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h2 className="text-xl font-black text-[#0A3F61]">
        {title}
      </h2>
      <p className="mt-1 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function Field({
  label,
  placeholder,
  icon,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        {icon}
        {label}
      </span>

      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#0A3F61] focus:ring-2 focus:ring-[#0A3F61]/10"
      />
    </label>
  );
}


export default function FreelancerCreatePage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#f7fafc] px-5">
          <div className="rounded-2xl bg-white px-6 py-5 text-sm font-semibold text-slate-600 shadow-sm">
            Loading freelancer registration...
          </div>
        </main>
      }
    >
      <FreelancerCreateContent />
    </Suspense>
  );
}
