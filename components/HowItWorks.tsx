'use client';

import React, {useState} from 'react';
import {
  UploadCloud,
  Wand2,
  Share2,
  CheckCircle2,
  ImageIcon,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      stepIndex: 1,
      title: 'Select AI-Generated Image or Video',
      shortTitle: 'Select Media',
      icon: UploadCloud,
      desc: 'Open MetaClean and select any media file from Midjourney, DALL-E, Flux, Sora, Runway, or Leonardo directly from your gallery or file manager.',
      detail: 'The built-in parser instantly identifies hidden C2PA chunks, AI prompts, seed fingerprints, and camera metadata tags.',
      screenGraphic: {
        badge: 'Incoming File Loaded',
        file: 'mj_cyberpunk_samurai_v6.png',
        tag: 'C2PA Manifest Detected · 42KB metadata overhead',
      },
    },
    {
      num: '02',
      stepIndex: 2,
      title: 'Tap "Clean Metadata" to Strip Signatures',
      shortTitle: 'Clean Metadata',
      icon: Wand2,
      desc: 'With one tap, MetaClean’s offline native engine strips C2PA manifests, EXIF metadata, IPTC headers, and software signatures without touching pixels.',
      detail: 'Operates in <200ms using local device memory. Your original quality and color profiles remain 100% untouched.',
      screenGraphic: {
        badge: 'Sanitizing Container Chunks',
        file: 'Stripping 0x43325041 (C2PA)... OK',
        tag: 'Purging Software & Generator signatures... DONE',
      },
    },
    {
      num: '03',
      stepIndex: 3,
      title: 'Save to Gallery & Post Freely',
      shortTitle: 'Save & Post',
      icon: Share2,
      desc: 'Save the sanitized media straight back to your Android photo gallery. Upload to Instagram, TikTok, or YouTube with normal organic reach.',
      detail: 'No automated "AI Content" label flags, no shadowbans, and no algorithmic algorithmic suppression on explore pages.',
      screenGraphic: {
        badge: 'Ready to Publish',
        file: 'metaclean_clean_export.png',
        tag: 'Safe for Instagram Reels, TikTok, YouTube Shorts',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Simple 3-Step Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Clean and protect your AI creations in under 3 seconds.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            No technical knowledge required. MetaClean was created for creators, marketers, and
            artists who want seamless workflow integration on their mobile device.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s) => {
            const Icon = s.icon;
            const isSelected = activeStep === s.stepIndex;

            return (
              <div
                key={s.num}
                onClick={() => setActiveStep(s.stepIndex)}
                className={`relative cursor-pointer rounded-2xl border transition-all p-7 flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-600/80 bg-indigo-50/20 shadow-md ring-1 ring-indigo-500/20'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-indigo-600 font-mono">
                      {s.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <p className="text-slate-500 text-xs leading-normal">
                    {s.detail}
                  </p>
                </div>

                {/* Step Simulated UI Snippet */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="bg-slate-900 text-white rounded-xl p-3 text-xs font-mono space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{s.screenGraphic.badge}</span>
                      <span className="text-indigo-400">Step {s.stepIndex}/3</span>
                    </div>
                    <div className="text-slate-200 font-medium truncate">
                      {s.screenGraphic.file}
                    </div>
                    <div className="text-[11px] text-emerald-400 truncate">
                      {s.screenGraphic.tag}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Flow Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Zero Configuration Needed:</span> Default
              settings automatically scrub C2PA manifests, EXIF tags, GPS locations, and prompt
              history for maximum privacy.
            </p>
          </div>
          <a
            href="#download"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 shrink-0 whitespace-nowrap group"
          >
            <span>Get MetaClean APK</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
