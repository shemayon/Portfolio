"use client";

import Image from "next/image";
import Link from "next/link";
import ShaderBackground from "@/components/ui/shader-background";
import { PROFILE } from "@/lib/profile";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Mail from "lucide-react/dist/esm/icons/mail";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";
import Phone from "lucide-react/dist/esm/icons/phone";
import Brain from "lucide-react/dist/esm/icons/brain";
import X from "lucide-react/dist/esm/icons/x";
import Copy from "lucide-react/dist/esm/icons/copy";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Renders the Hero component.
 * @returns The JSX element for the rendered hero section.
 */
export function Hero() {
  const { toast } = useToast();
  const [activeContact, setActiveContact] = useState<{ label: string, value: string } | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${label} Copied`,
      description: `${text} has been copied to your clipboard.`,
    });
  };
  return (
    <ShaderBackground>
      <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
        {/* Ambient Neural Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl flex flex-col items-start text-left gap-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="shrink-0 group">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/5 bg-surface-container-low shadow-[0_0_40px_rgba(129,236,255,0.1)] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(129,236,255,0.2)]">
                  <Image
                    src="/headshot/hero.png"
                    alt="Shemayon Soloman"
                    fill
                    sizes="(max-width: 768px) 160px, 224px"
                    priority
                    className="object-cover scale-110 translate-x-4 transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
                </div>
              </div>

              <div className="flex flex-col items-start">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-surface-container-highest border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(129,236,255,0.8)]" />
                  <span className="text-xs font-mono text-primary tracking-wider uppercase">System Online // AI Ready</span>
                </div> */}
                <h1 className="text-balance text-5xl font-heading font-bold tracking-tighter md:text-7xl lg:text-[5rem] text-foreground leading-[1.1]">
                  Architecting <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_20px_rgba(129,236,255,0.3)]">Intelligence.</span>
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-foreground max-w-3xl font-medium tracking-tight leading-relaxed">
                  I turn data into decisions and models into products; across AI, ML, IoT, and industrial systems.
                  Based in the UAE. Building for the world.
                </p>

                <div className="mt-12 w-full max-w-2xl">
                  <div className="flex flex-wrap items-end gap-12">
                    {/* Connect Section */}
                    <div className="flex flex-col gap-5">
                      <span className="text-xs md:text-sm font-mono text-foreground uppercase tracking-[0.4em] font-black">Connect</span>
                      <div className="flex items-center gap-6">
                        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="group/icon transition-transform hover:scale-110" aria-label="LinkedIn">
                          <svg className="w-6 h-6 fill-[#0A66C2] filter drop-shadow-[0_0_8px_rgba(10,102,194,0.3)]" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </a>
                        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="group/icon transition-transform hover:scale-110" aria-label="GitHub">
                          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                        <a href={PROFILE.huggingface} target="_blank" rel="noopener noreferrer" className="group/icon transition-transform hover:scale-110" aria-label="Hugging Face">
                          <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">🤗</span>
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="group/icon transition-transform hover:scale-110" aria-label="Email">
                          <svg className="w-6 h-6 fill-[#EA4335]" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Direct Section */}
                    <div className="flex flex-col gap-5">
                      <span className="text-xs md:text-sm font-mono text-foreground uppercase tracking-[0.4em] font-black">Direct</span>
                      <div className="flex items-center gap-6">
                        <button
                          type="button"
                          className="group/icon transition-transform hover:scale-110 flex items-center gap-2 cursor-pointer"
                          aria-label="Show WhatsApp Number"
                          onClick={() => {
                            handleCopy(PROFILE.whatsapp, "WhatsApp Number");
                            setActiveContact({ label: "WhatsApp", value: PROFILE.whatsapp });
                          }}
                        >
                          <svg className="w-6 h-6 fill-[#25D366] filter drop-shadow-[0_0_8px_rgba(37,211,102,0.3)]" viewBox="0 0 24 24">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0012.04 2zm5.71 14.12c-.24.67-1.2 1.23-1.65 1.32-.45.09-1.03.11-1.66-.09-1.12-.35-2.52-1.16-3.67-2-.91-.67-1.58-1.31-2.22-2.14-.64-.83-1.07-1.84-1.22-2.43-.15-.59-.03-1.03.14-1.24.17-.21.36-.45.54-.67.18-.22.24-.31.33-.51.09-.2.03-.45-.03-.66-.06-.21-.54-1.29-.74-1.76-.19-.46-.38-.4-.54-.4h-.47c-.17 0-.45.06-.68.3-.23.24-.87.85-.87 2.07s.89 2.4 1 2.56c.11.16 1.76 2.68 4.25 3.76.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.11-.22-.17-.47-.32z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="group/icon transition-transform hover:scale-110 flex items-center gap-2 cursor-pointer"
                          aria-label="Show Mobile Number"
                          onClick={() => {
                            handleCopy(PROFILE.mobile, "Contact Number");
                            setActiveContact({ label: "Mobile", value: PROFILE.mobile });
                          }}
                        >
                          <div className="p-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                            <Phone className="w-4 h-4" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-5">
                  <Link
                    href="/contact"
                    className="group relative inline-flex h-12 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] focus-visible:outline-hidden"
                  >
                    <span className="flex items-center gap-2">Contact Me <span className="transition-transform group-hover:translate-x-1">→</span></span>
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-outline-variant/20 bg-transparent px-8 text-sm font-medium text-primary hover:bg-surface-container-high transition-colors focus-visible:outline-hidden"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {activeContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveContact(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm rounded-2xl bg-[#161617] border border-white/20 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Brighter Background Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/30 blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-primary/70 uppercase tracking-[0.2em] font-bold">Contact Initiated</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{activeContact.label}</h3>
                  </div>
                  <button
                    onClick={() => setActiveContact(null)}
                    className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex items-center justify-between gap-4 mb-8">
                  <p className="text-xl font-mono text-primary font-black tracking-tight">
                    {activeContact.value}
                  </p>
                  <button
                    onClick={() => handleCopy(activeContact.value, activeContact.label)}
                    className="p-2.5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-all active:scale-90"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveContact(null)}
                    className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  {activeContact.label === "WhatsApp" && (
                    <a
                      href={`https://wa.me/${activeContact.value.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-black text-center hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all"
                    >
                      Connect Now
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ShaderBackground>
  );
}
