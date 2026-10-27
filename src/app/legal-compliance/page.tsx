"use client";

import { useState } from "react";
import { ArrowRight, Check, ShieldCheck, Eye } from "lucide-react";

const agreements = {
  en: [
    {
      title: "Terms of Service",
      type: "TERMS OF SERVICE",
      version: "Preview",
      content: `PHOTOOS — TERMS OF SERVICE

Preview document for UI inspection

1. Introduction

Welcome to PhotoOS. These sample terms represent the agreement reader layout for visual preview. They are illustrative content and are not the production legal agreement.

2. Using the service

Users should review the applicable terms before using the service. The production version should display the current published agreement supplied by the legal compliance service.

3. Account responsibilities

Keep your account credentials secure and provide accurate information when using the platform.

4. Privacy and data

Refer to the applicable Privacy Policy for details about how personal information is handled.

5. Updates

Applicable terms may be updated from time to time. Users should review the published version before providing consent.

6. Contact

For questions about these sample terms, use the official PhotoOS support channel.

IMPORTANT: This is sample preview content only. No legal acceptance is submitted from this page.`,
    },
    {
      title: "Privacy Policy",
      type: "PRIVACY POLICY",
      version: "Preview",
      content: `PHOTOOS — PRIVACY POLICY

Preview document for UI inspection

1. Overview

This sample text demonstrates the appearance of a second legal agreement in the PhotoOS compliance experience.

2. Information

The production policy should explain what information is collected and how it is used.

3. Security

The production policy should describe relevant data protection and security practices.

4. User rights

Users should consult the published policy for applicable privacy rights and available choices.

IMPORTANT: This is sample preview content only. No legal acceptance is submitted from this page.`,
    },
  ],
  mr: [
    {
      title: "सेवा वापरण्याच्या अटी",
      type: "सेवा वापरण्याच्या अटी",
      version: "पूर्वदृश्य",
      content: `PHOTOOS — सेवा वापरण्याच्या अटी

UI तपासणीसाठी नमुना दस्तऐवज

१. परिचय

PhotoOS मध्ये आपले स्वागत आहे. हा नमुना मजकूर कायदेशीर दस्तऐवज वाचण्याच्या विभागाचे पूर्वदृश्य पाहण्यासाठी आहे. हा प्रत्यक्ष कायदेशीर करार नाही.

२. सेवेचा वापर

सेवा वापरण्यापूर्वी लागू असलेल्या अटी काळजीपूर्वक वाचाव्यात. प्रत्यक्ष पृष्ठावर कायदेशीर अनुपालन सेवेकडून मिळालेला अद्ययावत करार दाखवला जाईल.

३. खाते आणि जबाबदाऱ्या

आपल्या खात्याची माहिती सुरक्षित ठेवा आणि प्लॅटफॉर्म वापरताना योग्य माहिती द्या.

४. गोपनीयता

वैयक्तिक माहिती कशी हाताळली जाते यासाठी लागू असलेले गोपनीयता धोरण वाचा.

५. महत्त्वाची सूचना

हा केवळ UI तपासणीसाठी नमुना मजकूर आहे. या पृष्ठावरून कोणतीही कायदेशीर संमती नोंदवली जात नाही.`,
    },
    {
      title: "गोपनीयता धोरण",
      type: "गोपनीयता धोरण",
      version: "पूर्वदृश्य",
      content: `PHOTOOS — गोपनीयता धोरण

UI तपासणीसाठी नमुना दस्तऐवज

१. आढावा

हा नमुना मजकूर PhotoOS मधील दुसऱ्या कायदेशीर दस्तऐवजाचे पूर्वदृश्य दाखवतो.

२. माहितीचा वापर

प्रत्यक्ष धोरणामध्ये कोणती माहिती संकलित केली जाते आणि तिचा वापर कसा होतो हे स्पष्ट केले जाईल.

३. माहितीची सुरक्षा

प्रत्यक्ष धोरणामध्ये लागू असलेल्या डेटा संरक्षण आणि सुरक्षा पद्धतींचे वर्णन असेल.

महत्त्वाची सूचना: हा केवळ UI तपासणीसाठी नमुना मजकूर आहे. कोणतीही कायदेशीर संमती नोंदवली जात नाही.`,
    },
  ],
};

export default function LegalCompliancePreviewPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en");
  const [agreementIndex, setAgreementIndex] = useState(0);
  const [readComplete, setReadComplete] = useState(false);
  const [readConfirmed, setReadConfirmed] = useState(false);
  const [previewComplete, setPreviewComplete] = useState(false);

  const currentAgreements = agreements[language];
  const agreement = currentAgreements[agreementIndex];

  function changeLanguage(next: "en" | "mr") {
    setLanguage(next);
    setAgreementIndex(0);
    setReadComplete(false);
    setReadConfirmed(false);
    setPreviewComplete(false);
  }

  function continuePreview() {
    if (!readComplete || !readConfirmed) return;

    if (agreementIndex + 1 < currentAgreements.length) {
      setAgreementIndex((current) => current + 1);
      setReadComplete(false);
      setReadConfirmed(false);
    } else {
      setPreviewComplete(true);
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(52,149,161,0.10),transparent_38%),linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <a href="/" className="text-lg font-black tracking-tight text-[#0A3F61]">
            PhotoOS<span className="text-[#EF8619]">.</span>
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">
            <Eye size={15} />
            UI PREVIEW ONLY
          </span>
        </div>

        <section className="relative isolate overflow-hidden rounded-[30px] border border-[#0A3F61]/10 bg-white p-5 shadow-[0_24px_80px_-35px_rgba(10,63,97,0.35)] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-[radial-gradient(ellipse_at_top_left,rgba(52,149,161,0.16),transparent_65%),radial-gradient(ellipse_at_top_right,rgba(239,134,25,0.12),transparent_60%)]"
          />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3495A1]/20 bg-[#3495A1]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0A3F61]">
                <span className="h-2 w-2 rounded-full bg-[#3495A1]" />
                PhotoOS · Trust &amp; transparency
              </span>
              <h1 className="mt-4 text-2xl font-black tracking-tight text-[#0A3F61] sm:text-3xl">
                Legal compliance
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Please review each required agreement. Your consent will be recorded
                for the language you select.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 text-xs font-bold text-slate-600 shadow-sm backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A3F61] text-white">
                <ShieldCheck size={17} />
              </span>
              Secure consent
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 sm:p-5">
            <label
              htmlFor="preview-legal-language"
              className="mb-3 block text-xs font-extrabold uppercase tracking-[0.12em] text-slate-600"
            >
              Agreement language / कागदपत्रांची भाषा
            </label>
            <select
              id="preview-legal-language"
              value={language}
              onChange={(event) => changeLanguage(event.target.value as "en" | "mr")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold text-[#0A3F61] shadow-sm outline-none transition focus:border-[#3495A1] focus:ring-4 focus:ring-[#3495A1]/10"
            >
              <option value="en">English</option>
              <option value="mr">मराठी (Marathi)</option>
            </select>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Your consent will be recorded for the agreements in the selected
              language. / तुमची संमती निवडलेल्या भाषेतील करारांसाठी नोंदवली जाईल.
            </p>
          </div>

          {previewComplete ? (
            <div className="mt-8 rounded-2xl border border-[#3495A1]/20 bg-[#3495A1]/5 p-6">
              <div className="flex items-center gap-3 text-[#0A3F61]">
                <Check size={22} />
                <h2 className="text-lg font-black">Preview completed</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                You have previewed the sample agreements. No consent was saved and
                no freelancer profile was created.
              </p>
              <button
                type="button"
                onClick={() => {
                  setAgreementIndex(0);
                  setReadComplete(false);
                  setReadConfirmed(false);
                  setPreviewComplete(false);
                }}
                className="mt-5 rounded-xl bg-[#0A3F61] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#124f70]"
              >
                Preview again
              </button>
            </div>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3495A1]">
                    Agreement {agreementIndex + 1} of {currentAgreements.length}
                  </p>
                  <h2 className="mt-2 text-xl font-black tracking-tight text-[#0A3F61] sm:text-2xl">
                    {agreement.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">
                    Version {agreement.version}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">
                    {language.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold text-slate-500">
                  <span>Review progress</span>
                  <span className="tabular-nums text-[#0A3F61]">
                    {agreementIndex + 1} / {currentAgreements.length}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#3495A1] to-[#0A3F61] transition-[width] duration-300"
                    style={{
                      width: `${((agreementIndex + 1) / currentAgreements.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div
                onScroll={(event) => {
                  const element = event.currentTarget;
                  if (element.scrollTop + element.clientHeight >= element.scrollHeight - 8) {
                    setReadComplete(true);
                  }
                }}
                className="mt-5 h-[min(52vh,520px)] min-h-[280px] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200/90 bg-[#fbfdff] p-5 text-sm leading-7 text-slate-700 shadow-[inset_0_1px_3px_rgba(15,23,42,0.04)] sm:p-7 sm:text-[15px] sm:leading-8"
              >
                <div className="whitespace-pre-wrap break-words">{agreement.content}</div>
                <div className="mt-8 border-t border-slate-200 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  End of Agreement
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#3495A1]/20 bg-[#3495A1]/5 p-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={readConfirmed}
                    disabled={!readComplete}
                    onChange={(event) => setReadConfirmed(event.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-slate-300 accent-[#EF8619] disabled:cursor-not-allowed"
                  />
                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    I confirm that I have read this entire agreement.
                  </span>
                </label>
                {!readComplete && (
                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    Please scroll to the end of the agreement to enable the confirmation.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={continuePreview}
                disabled={!readComplete || !readConfirmed}
                className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#EF8619] to-[#e9750b] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_28px_-12px_rgba(239,134,25,0.8)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EF8619]/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0"
              >
                {agreementIndex + 1 < currentAgreements.length
                  ? "Preview Next Agreement"
                  : "Finish UI Preview"}
                <ArrowRight size={18} />
              </button>
            </>
          )}

          <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
            Preview mode: sample agreement text only. This page does not save consent,
            call the acceptance API, or create a profile.
          </p>
        </section>

        <p className="mt-5 text-center text-xs text-slate-500">
          PhotoOS · Legal compliance UI preview
        </p>
      </div>
    </main>
  );
}
