"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

type MessageLink = {
  label: string;
  href: string;
};

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  links?: MessageLink[];
};

type QuickAction = {
  label: string;
  response: string;
};

const quickActions: QuickAction[] = [
  {
    label: "What is PhotoOS?",
    response:
      "PhotoOS is an AI-powered photography management platform designed for photographers and studios. It helps manage clients, events, galleries, photo delivery and modern photography workflows.",
  },
  {
    label: "Show me pricing",
    response:
      "PhotoOS offers a 7-day Free Trial and studio plans starting from ₹399/month. I can help you explore the available plans.",
  },
  {
    label: "Tell me about AI",
    response:
      "PhotoOS includes AI-powered capabilities such as AI Face Matching and intelligent photography workflows designed to make photo discovery and delivery easier.",
  },
  {
    label: "Client App",
    response:
      "The PhotoOS Client App gives photography clients a dedicated experience for accessing their photos, interacting with their studio and staying connected with their photography workflow.",
  },
  {
    label: "Start Free Trial",
    response:
      "You can start with the PhotoOS Free Trial and explore the platform before choosing a paid studio plan.",
  },
];

const fallbackResponse =
  "I can help you with PhotoOS features, pricing, AI Face Matching, the Client App, Free Trial and getting started. You can choose one of the options below, or ask me a question.";

const CHAT_STORAGE_KEY = "photoos-ai-assistant-chat";

export default function PhotoOSChatbot() {
  const [open, setOpen] = useState(false);
const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "Hi 👋 How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [leadStep, setLeadStep] = useState<
    "name" | "email" | "message" | null
  >(null);
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

  const visibleQuickActions = useMemo(
    () => quickActions.slice(0, open ? 5 : 3),
    [open],
  );

  useEffect(() => {
    setShowGreeting(false);

    try {
      const storedChat = window.sessionStorage.getItem(CHAT_STORAGE_KEY);

      if (storedChat) {
        const parsed = JSON.parse(storedChat);

        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (error) {
      console.error("PhotoOS chat restore error:", error);
    }
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(
        CHAT_STORAGE_KEY,
        JSON.stringify(messages),
      );
    } catch (error) {
      console.error("PhotoOS chat save error:", error);
    }
  }, [messages]);
const clearChat = () => {
    const initialMessage: Message = {
      id: Date.now(),
      role: "bot",
      text: "Hi 👋 How can I help you today?",
    };

    setMessages([initialMessage]);

    try {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      console.error("PhotoOS chat clear error:", error);
    }
  };

  const addBotMessage = (text: string) => {
    setTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "bot",
          text,
        },
      ]);
      setTyping(false);
    }, 650);
  };

  const handleQuickAction = async (action: QuickAction) => {
    if (typing) return;

    const trimmed = action.label;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: trimmed,
      },
    ]);

    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Unable to get an AI response.");
      }

      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "bot",
          text:
            typeof data.reply === "string"
              ? data.reply
              : "Sorry, I could not generate a response.",
          links: Array.isArray(data.pageLinks)
            ? data.pageLinks
                .filter(
                  (page: MessageLink) =>
                    typeof page?.label === "string" &&
                    typeof page?.href === "string",
                )
            : [],
        },
      ]);
    } catch (error) {
      console.error("PhotoOS quick action error:", error);

      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "bot",
          text:
            "Sorry, I am having trouble connecting to the PhotoOS AI Assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const startHumanSupport = () => {
    setLeadMode(true);
    setLeadStep("name");

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: "Talk to a human",
      },
    ]);

    addBotMessage(
      "Absolutely. I can collect your details and create an enquiry for the PhotoOS team. What is your name?",
    );
  };

  const getDynamicResponse = (question: string) => {
    const q = question.toLowerCase();

    if (
      q.includes("price") ||
      q.includes("pricing") ||
      q.includes("cost") ||
      q.includes("399") ||
      q.includes("plan")
    ) {
      return "PhotoOS offers a 7-day Free Trial and studio plans starting from ₹399/month. You can visit the Pricing page to compare the available plans.";
    }

    if (
      q.includes("face") ||
      q.includes("selfie") ||
      q.includes("matching")
    ) {
      return "PhotoOS AI Face Matching helps clients discover relevant photos using face-based matching, making large event galleries easier to explore.";
    }

    if (
      q.includes("client app") ||
      q.includes("mobile app") ||
      q.includes("app")
    ) {
      return "The PhotoOS Client App is designed to give clients a dedicated mobile experience for accessing photos and staying connected with their photography studio.";
    }

    if (
      q.includes("trial") ||
      q.includes("free") ||
      q.includes("demo")
    ) {
      return "PhotoOS provides a 7-day Free Trial for exploring the photography management platform. If you want a personal walkthrough, I can also collect your details for the team.";
    }

    if (
      q.includes("what is photoos") ||
      q.includes("what is photo os") ||
      q.includes("about photoos")
    ) {
      return "PhotoOS is an AI-powered photography management platform built for photographers and studios. It brings studio management, client collaboration, galleries, photo delivery and AI workflows into one ecosystem.";
    }

    if (
      q.includes("support") ||
      q.includes("help") ||
      q.includes("contact")
    ) {
      return "I can help with product information, pricing and common questions. If you need personal assistance, choose “Talk to a human” and I can collect your details.";
    }

    return fallbackResponse;
  };

  const sendMessage = async () => {
    const trimmed = input.trim();

    if (!trimmed || typing) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: trimmed,
      },
    ]);

    setInput("");

    if (leadMode && leadStep) {
      if (leadStep === "name") {
        setLead((current) => ({ ...current, name: trimmed }));
        setLeadStep("email");
        addBotMessage("Thanks! What is your email address?");
        return;
      }

      if (leadStep === "email") {
        setLead((current) => ({ ...current, email: trimmed }));
        setLeadStep("message");
        addBotMessage(
          "Great. Finally, briefly tell us what you would like help with.",
        );
        return;
      }

      if (leadStep === "message") {
        const updatedLead = {
          ...lead,
          message: trimmed,
        };

        setLead(updatedLead);
        setLeadStep(null);
        setLeadMode(false);

        addBotMessage(
          "Thank you! Your enquiry details are ready for the PhotoOS team. We will get back to you as soon as possible.",
        );
        return;
      }
    }

    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Unable to get an AI response.");
      }

      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "bot",
          text:
            typeof data.reply === "string"
              ? data.reply
              : "Sorry, I could not generate a response.",
          links: Array.isArray(data.pageLinks)
            ? data.pageLinks
                .filter(
                  (page: MessageLink) =>
                    typeof page?.label === "string" &&
                    typeof page?.href === "string",
                )
            : [],
        },
      ]);
    } catch (error) {
      console.error("PhotoOS chatbot error:", error);

      addBotMessage(
        "Sorry, I am having trouble connecting right now. Please try again in a moment, or choose “Talk to a human” for assistance.",
      );
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {showGreeting && !open && (
        <div className="fixed bottom-24 right-5 z-[90] hidden max-w-xs animate-[fadeIn_.3s_ease-out] sm:block">
          <div className="relative rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#0A3F61] shadow-xl shadow-[#0A3F61]/10">
            Hi 👋 How can I help you?
            <span className="absolute -bottom-2 right-7 h-4 w-4 rotate-45 border-b border-r border-slate-200 bg-white" />
          </div>
        </div>
      )}

      {open && (
        <div
          className="photoos-chat-panel fixed bottom-5 right-4 z-[100] w-[calc(100vw-2rem)] max-w-[390px] sm:right-6 sm:bottom-6"
        >
          <div className="relative">
<div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(10,63,97,0.22)]">
              <div className="photoos-chat-header relative overflow-hidden px-5 py-4 text-white">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/15">
                <Bot size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">PhotoOS AI Assistant</h3>
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                </div>
                <p className="mt-0.5 text-xs text-white/65">
                  AI-powered help for PhotoOS
                </p>
              </div>

              <div className="flex items-center gap-1">


                <button


                  type="button"


                  onClick={clearChat}


                  aria-label="Clear PhotoOS AI Assistant chat"


                  title="Clear chat"


                  className="rounded-xl px-2.5 py-1.5 text-[11px] font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"


                >


                  Clear Chat


                </button>



                <button


                  type="button"


                  onClick={() => setOpen(false)}


                  aria-label="Close PhotoOS AI Assistant"


                  className="rounded-xl p-2 text-white/75 transition hover:bg-white/10 hover:text-white"


                >


                  <X size={19} />


                </button>


              </div>
            </div>
          </div>

          <div className="flex h-[460px] flex-col">
            <div className="scrollbar-thin flex-1 space-y-3 overflow-y-auto bg-[#f8fafc] px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-[86%] items-end gap-2 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        message.role === "user"
                          ? "bg-[#EF8619] text-white"
                          : "bg-[#0A3F61] text-white"
                      }`}
                    >
                      {message.role === "user" ? (
                        <UserRound size={14} />
                      ) : (
                        <Sparkles size={14} />
                      )}
                    </div>

                    <div
                      className={`rounded-2xl px-3.5 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "rounded-br-md bg-[#0A3F61] text-white"
                          : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                      }`}
                    >
                      {message.text}

                      {message.role === "bot" &&
                        message.links &&
                        message.links.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center rounded-xl bg-[#0A3F61] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#1f70b8]"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A3F61] text-white">
                    <Sparkles size={14} />
                  </div>

                  <div className="flex gap-1 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]" />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 bg-white px-4 pb-3 pt-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {visibleQuickActions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    disabled={typing}
                    onClick={() => handleQuickAction(action)}
                    className="shrink-0 rounded-full border border-[#0A3F61]/10 bg-[#0A3F61]/[0.03] px-3 py-2 text-xs font-semibold text-[#0A3F61] transition hover:border-[#3495A1]/30 hover:bg-[#3495A1]/10 disabled:opacity-50"
                  >
                    {action.label}
                  </button>
                ))}
              </div>

              {!leadMode && (
                <button
                  type="button"
                  onClick={startHumanSupport}
                  disabled={typing}
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#EF8619]/20 bg-[#EF8619]/5 px-3 py-2.5 text-xs font-bold text-[#a95700] transition hover:bg-[#EF8619]/10 disabled:opacity-50"
                >
                  <MessageCircle size={15} />
                  Talk to a human
                </button>
              )}

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-[#3495A1] focus-within:ring-4 focus-within:ring-[#3495A1]/10">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder={
                    leadStep === "name"
                      ? "Enter your name..."
                      : leadStep === "email"
                        ? "Enter your email..."
                        : leadStep === "message"
                          ? "Tell us what you need..."
                          : "Ask me anything..."
                  }
                  className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-sm text-[#102a43] outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A3F61] text-white transition hover:bg-[#1f70b8] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={17} />
                </button>
              </div>

              <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <Check size={11} />
                PhotoOS AI Assistant
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setShowGreeting(false);
          }}
          aria-label="Open PhotoOS AI Assistant"
          className="pointer-events-auto fixed bottom-5 right-5 z-[9999] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#0A3F61] to-[#3495A1] text-white shadow-[0_12px_35px_rgba(10,63,97,0.28)] ring-4 ring-white sm:right-6 sm:bottom-6"
        >
          <MessageCircle size={27} />
          <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#EF8619]" />
        </button>
      )}

      <style jsx global>{`
        .photoos-chat-panel {
          pointer-events: auto;
        }

        .photoos-chat-header {
          background-image: linear-gradient(
            110deg,
            #0a3f61 0%,
            #1f70b8 32%,
            #3495a1 55%,
            #ef8619 72%,
            #0a3f61 100%
          );
          background-size: 300% 300%;
          animation: photoosHeaderColorShift 8s ease-in-out infinite;
        }

        @keyframes photoosHeaderColorShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 45% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 45% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .photoos-chat-header {
            animation: none;
          }
        }
      `}</style>

    </>
  );
}
